#!/usr/bin/env python3
"""
Aethorion AI Backend - DeepSeek + MatterGen Integrated (Final Version)
Fully updated:
- Selected elements from periodic table now recognized by the AI
- Mode-aware system prompt
- Robust chat history handling
- MatterGen solid-state generator
- PDF, CIF, and IMAGE file upload system
"""

from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List, Optional
import subprocess
import os
import zipfile
import shutil
import tempfile
import logging
from pathlib import Path
import json
from openai import OpenAI
from ase.io import read, write
from ase.build import surface as ase_surface
import PyPDF2
import re
from PIL import Image
import base64
from io import BytesIO

# ------------------------------------------------------------
# Logging
# ------------------------------------------------------------
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Aethorion AI Backend")

# ------------------------------------------------------------
# CORS
# ------------------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],     # Use specific domains if needed
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------------------------------------------
# CPK Colors
# ------------------------------------------------------------
ELEMENT_COLORS = {
    'H': '#FFFFFF', 'He': '#D9FFFF', 'Li': '#CC80FF', 'Be': '#C2FF00',
    'B': '#FFB5B5', 'C': '#909090', 'N': '#3050F8', 'O': '#FF0D0D',
    'F': '#90E050', 'Ne': '#B3E3F5', 'Na': '#AB5CF2', 'Mg': '#8AFF00',
    'Al': '#BFA6A6', 'Si': '#F0C8A0', 'P': '#FF8000', 'S': '#FFFF30',
    'Cl': '#1FF01F', 'Ar': '#80D1E3', 'K': '#8F40D4', 'Ca': '#3DFF00',
    'Sc': '#E6E6E6', 'Ti': '#BFC2C7', 'V': '#A6A6AB', 'Cr': '#8A99C7',
    'Mn': '#9C7AC7', 'Fe': '#E06633', 'Co': '#F090A0', 'Ni': '#50D050',
    'Cu': '#C88033', 'Zn': '#7D80B0', 'Ga': '#C28F8F', 'Ge': '#668F8F',
    'As': '#BD80E3', 'Se': '#FFA100', 'Br': '#A62929', 'Kr': '#5CB8D1',
    'Rb': '#702EB0', 'Sr': '#00FF00', 'Y': '#94FFFF', 'Zr': '#94E0E0',
    'Nb': '#73C2C9', 'Mo': '#54B5B5', 'Tc': '#3B9E9E', 'Ru': '#248F8F',
    'Rh': '#0A7D8C', 'Pd': '#006985', 'Ag': '#C0C0C0', 'Cd': '#FFD98F',
    'In': '#A67573', 'Sn': '#668080', 'Sb': '#9E63B5', 'Te': '#D47A00',
    'I': '#940094', 'Xe': '#429EB0', 'Cs': '#57178F', 'Ba': '#00C900',
    'La': '#70D4FF', 'Ce': '#FFFFC7', 'Pr': '#D9FFC7', 'Nd': '#C7FFC7',
    'Pm': '#A3FFC7', 'Sm': '#8FFFC7', 'Eu': '#61FFC7', 'Gd': '#45FFC7',
    'Tb': '#30FFC7', 'Dy': '#1FFFC7', 'Ho': '#00FF9C', 'Er': '#00E675',
    'Tm': '#00D452', 'Yb': '#00BF38', 'Lu': '#00AB24'
}

# ------------------------------------------------------------
# Global Structure Cache & File Storage
# ------------------------------------------------------------
structure_cache = {}
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

# Maximum file sizes (in bytes)
MAX_PDF_SIZE = 50 * 1024 * 1024  # 50 MB
MAX_CIF_SIZE = 10 * 1024 * 1024  # 10 MB
MAX_IMAGE_SIZE = 20 * 1024 * 1024  # 20 MB

# Supported image formats
SUPPORTED_IMAGE_FORMATS = {'.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp'}

# ------------------------------------------------------------
# DeepSeek Client (OpenAI SDK Wrapper)
# ------------------------------------------------------------
deepseek_client = None
try:
    api_key = os.getenv("DEEPSEEK_API_KEY")
    if not api_key:
        raise ValueError("DEEPSEEK_API_KEY not found in environment")

    deepseek_client = OpenAI(
        api_key=api_key,
        base_url="https://api.deepseek.com/v1"
    )
    logger.info("✅ DeepSeek client initialized")
except Exception as e:
    logger.error(f"❌ DeepSeek initialization failed: {e}")

# ------------------------------------------------------------
# Pydantic Models
# ------------------------------------------------------------
class ChatRequest(BaseModel):
    message: str
    conversation_history: Optional[List[dict]] = []
    selected_elements: Optional[List[str]] = []
    mode: Optional[str] = None
    uploaded_file_id: Optional[str] = None
    
class GenerateRequest(BaseModel):
    elements: List[str]
    energy_above_hull: Optional[float] = 0.1

class StructureModRequest(BaseModel):
    structure_id: str
    modification_type: str
    parameters: dict

# ------------------------------------------------------------
# Helper Functions
# ------------------------------------------------------------
def find_and_extract_cif(temp_dir: Path) -> Optional[Path]:
    """Locate CIF file from MatterGen output or ZIP."""
    zip_files = list(temp_dir.rglob("*.zip"))
    if zip_files:
        unzip_dir = temp_dir / "unzipped"
        unzip_dir.mkdir(exist_ok=True)
        try:
            with zipfile.ZipFile(zip_files[0], 'r') as z:
                z.extractall(unzip_dir)
        except Exception:
            return None
        cif_files = list(unzip_dir.rglob("*.cif"))
        if cif_files:
            return cif_files[0]

    cif_files = list(temp_dir.rglob("*.cif"))
    return cif_files[0] if cif_files else None

def extract_text_from_pdf(pdf_path: Path) -> str:
    """Extract text content from PDF file."""
    try:
        text = ""
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
        return text
    except Exception as e:
        logger.error(f"PDF extraction error: {e}")
        return ""

def parse_cif_metadata(cif_path: Path) -> dict:
    """Parse basic metadata from CIF file."""
    try:
        structure = read(str(cif_path))
        a, b, c, alpha, beta, gamma = structure.get_cell_lengths_and_angles()
        atoms = structure.get_chemical_symbols()
        
        return {
            "num_atoms": len(structure),
            "elements": list(set(atoms)),
            "formula": structure.get_chemical_formula(),
            "cell_parameters": {
                "a": float(a), "b": float(b), "c": float(c),
                "alpha": float(alpha), "beta": float(beta), "gamma": float(gamma)
            }
        }
    except Exception as e:
        logger.error(f"CIF parsing error: {e}")
        return {}

def extract_image_metadata(image_path: Path) -> dict:
    """Extract metadata from image file."""
    try:
        with Image.open(image_path) as img:
            metadata = {
                "width": img.width,
                "height": img.height,
                "format": img.format,
                "mode": img.mode,
                "size_pixels": f"{img.width}x{img.height}"
            }
            
            # Extract EXIF data if available
            exif_data = {}
            if hasattr(img, '_getexif') and img._getexif():
                exif = img._getexif()
                if exif:
                    from PIL.ExifTags import TAGS
                    for tag_id, value in exif.items():
                        tag = TAGS.get(tag_id, tag_id)
                        exif_data[tag] = str(value)
            
            if exif_data:
                metadata["exif"] = exif_data
                
            return metadata
    except Exception as e:
        logger.error(f"Image metadata extraction error: {e}")
        return {}

def create_image_thumbnail(image_path: Path, max_size: tuple = (400, 400)) -> str:
    """Create base64 encoded thumbnail of image."""
    try:
        with Image.open(image_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = background
            
            # Create thumbnail
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Convert to base64
            buffer = BytesIO()
            img.save(buffer, format='JPEG', quality=85)
            img_str = base64.b64encode(buffer.getvalue()).decode()
            
            return f"data:image/jpeg;base64,{img_str}"
    except Exception as e:
        logger.error(f"Thumbnail creation error: {e}")
        return ""

def analyze_image_with_vision(image_path: Path) -> str:
    """Analyze image using vision model (placeholder - can integrate with GPT-4 Vision or similar)."""
    try:
        # This is a placeholder - you can integrate with OpenAI GPT-4 Vision or other vision models
        # For now, return basic description based on metadata
        metadata = extract_image_metadata(image_path)
        description = f"Image: {metadata.get('format', 'Unknown')} format, "
        description += f"{metadata.get('width', 0)}x{metadata.get('height', 0)} pixels, "
        description += f"Color mode: {metadata.get('mode', 'Unknown')}"
        return description
    except Exception as e:
        logger.error(f"Image analysis error: {e}")
        return "Unable to analyze image"

def sanitize_filename(filename: str) -> str:
    """Sanitize filename to prevent security issues."""
    filename = re.sub(r'[^\w\s.-]', '', filename)
    return filename[:255]

# ------------------------------------------------------------
# Basic Status Routes
# ------------------------------------------------------------
@app.get("/")
async def root():
    return {"status": "online", "deepseek_enabled": deepseek_client is not None}

@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "deepseek": deepseek_client is not None,
        "mattergen": shutil.which("mattergen-generate") is not None,
        "upload_enabled": True,
        "supported_formats": ["pdf", "cif", "png", "jpg", "jpeg", "gif", "webp"]
    }

# ------------------------------------------------------------
# File Upload Endpoints
# ------------------------------------------------------------
@app.post("/api/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):
    """Upload and process PDF file."""
    try:
        if not file.filename.lower().endswith('.pdf'):
            raise HTTPException(status_code=400, detail="Only PDF files are allowed")
        
        content = await file.read()
        
        if len(content) > MAX_PDF_SIZE:
            raise HTTPException(
                status_code=400, 
                detail=f"PDF file too large. Maximum size: {MAX_PDF_SIZE // (1024*1024)} MB"
            )
        
        safe_filename = sanitize_filename(file.filename)
        file_id = f"pdf_{len(os.listdir(UPLOAD_DIR))}_{safe_filename}"
        file_path = UPLOAD_DIR / file_id
        
        with open(file_path, 'wb') as f:
            f.write(content)
        
        extracted_text = extract_text_from_pdf(file_path)
        
        word_count = len(extracted_text.split())
        page_count = 0
        try:
            with open(file_path, 'rb') as f:
                pdf_reader = PyPDF2.PdfReader(f)
                page_count = len(pdf_reader.pages)
        except:
            pass
        
        logger.info(f"✅ PDF uploaded: {file_id} ({page_count} pages, {word_count} words)")
        
        return {
            "success": True,
            "file_id": file_id,
            "filename": file.filename,
            "type": "pdf",
            "size": len(content),
            "pages": page_count,
            "word_count": word_count,
            "preview": extracted_text[:500] + "..." if len(extracted_text) > 500 else extracted_text
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ PDF upload error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to process PDF: {str(e)}")

@app.post("/api/upload-cif")
async def upload_cif(file: UploadFile = File(...)):
    """Upload and process CIF file."""
    try:
        if not file.filename.lower().endswith('.cif'):
            raise HTTPException(status_code=400, detail="Only CIF files are allowed")
        
        content = await file.read()
        
        if len(content) > MAX_CIF_SIZE:
            raise HTTPException(
                status_code=400, 
                detail=f"CIF file too large. Maximum size: {MAX_CIF_SIZE // (1024*1024)} MB"
            )
        
        safe_filename = sanitize_filename(file.filename)
        file_id = f"cif_{len(os.listdir(UPLOAD_DIR))}_{safe_filename}"
        file_path = UPLOAD_DIR / file_id
        
        with open(file_path, 'wb') as f:
            f.write(content)
        
        metadata = parse_cif_metadata(file_path)
        
        try:
            structure = read(str(file_path))
            
            pdb_path = file_path.with_suffix('.pdb')
            write(str(pdb_path), structure, format="proteindatabank")
            
            with open(pdb_path, 'r') as f:
                pdb_data = f.read()
            
            structure_id = f"struct_{len(structure_cache)}"
            structure_cache[structure_id] = structure
            
            atoms = structure.get_chemical_symbols()
            atom_colors = {a: ELEMENT_COLORS.get(a, "#FF00FF") for a in set(atoms)}
            
        except Exception as e:
            logger.error(f"CIF structure loading error: {e}")
            pdb_data = None
            structure_id = None
            atom_colors = {}
        
        logger.info(f"✅ CIF uploaded: {file_id} ({metadata.get('num_atoms', 0)} atoms)")
        
        return {
            "success": True,
            "file_id": file_id,
            "filename": file.filename,
            "type": "cif",
            "size": len(content),
            "metadata": metadata,
            "pdb": pdb_data,
            "structure_id": structure_id,
            "atom_colors": atom_colors
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ CIF upload error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to process CIF: {str(e)}")

@app.post("/api/upload-image")
async def upload_image(file: UploadFile = File(...)):
    """Upload and process image file."""
    try:
        file_ext = Path(file.filename).suffix.lower()
        if file_ext not in SUPPORTED_IMAGE_FORMATS:
            raise HTTPException(
                status_code=400, 
                detail=f"Unsupported image format. Allowed: {', '.join(SUPPORTED_IMAGE_FORMATS)}"
            )
        
        content = await file.read()
        
        if len(content) > MAX_IMAGE_SIZE:
            raise HTTPException(
                status_code=400, 
                detail=f"Image file too large. Maximum size: {MAX_IMAGE_SIZE // (1024*1024)} MB"
            )
        
        safe_filename = sanitize_filename(file.filename)
        file_id = f"img_{len(os.listdir(UPLOAD_DIR))}_{safe_filename}"
        file_path = UPLOAD_DIR / file_id
        
        with open(file_path, 'wb') as f:
            f.write(content)
        
        # Extract metadata
        metadata = extract_image_metadata(file_path)
        
        # Create thumbnail
        thumbnail = create_image_thumbnail(file_path)
        
        # Analyze image (basic description)
        description = analyze_image_with_vision(file_path)
        
        logger.info(f"✅ Image uploaded: {file_id} ({metadata.get('width', 0)}x{metadata.get('height', 0)})")
        
        return {
            "success": True,
            "file_id": file_id,
            "filename": file.filename,
            "type": "image",
            "size": len(content),
            "metadata": metadata,
            "thumbnail": thumbnail,
            "description": description
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Image upload error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to process image: {str(e)}")

# ------------------------------------------------------------
# Chat Endpoint (DeepSeek) - Enhanced with file context
# ------------------------------------------------------------
@app.post("/api/chat")
async def chat(request: ChatRequest):
    if not deepseek_client:
        return {"response": "DeepSeek API not configured.", "success": False}

    try:
        system_prompt = (
            "You are Aethorion AI, an expert in materials science, computational chemistry, "
            "atomistic simulation, and scientific reasoning.\n"
            "Respond using academic tone with clear paragraphs. Do not use markdown syntax.\n"
        )

        file_context = ""
        if request.uploaded_file_id:
            try:
                file_path = UPLOAD_DIR / request.uploaded_file_id
                if file_path.exists():
                    if file_path.suffix == '.pdf':
                        text = extract_text_from_pdf(file_path)
                        file_context = (
                            f"\n\nThe user has uploaded a PDF document. Here is the extracted content:\n\n"
                            f"{text[:4000]}\n\n"
                            f"Use this document content to answer the user's questions.\n\n"
                        )
                    elif file_path.suffix == '.cif':
                        metadata = parse_cif_metadata(file_path)
                        file_context = (
                            f"\n\nThe user has uploaded a CIF structure file with the following properties:\n"
                            f"- Formula: {metadata.get('formula', 'Unknown')}\n"
                            f"- Number of atoms: {metadata.get('num_atoms', 'Unknown')}\n"
                            f"- Elements: {', '.join(metadata.get('elements', []))}\n"
                            f"- Cell parameters: {metadata.get('cell_parameters', {})}\n\n"
                            f"Use this structure information to answer the user's questions.\n\n"
                        )
                    elif file_path.suffix.lower() in SUPPORTED_IMAGE_FORMATS:
                        metadata = extract_image_metadata(file_path)
                        description = analyze_image_with_vision(file_path)
                        file_context = (
                            f"\n\nThe user has uploaded an image with the following properties:\n"
                            f"- Format: {metadata.get('format', 'Unknown')}\n"
                            f"- Dimensions: {metadata.get('width', 0)}x{metadata.get('height', 0)} pixels\n"
                            f"- Description: {description}\n\n"
                            f"Use this image information to answer the user's questions about visualizations, "
                            f"data plots, diagrams, or any visual content.\n\n"
                        )
            except Exception as e:
                logger.error(f"Error loading file context: {e}")

        element_context = ""
        if request.selected_elements:
            element_context = (
                "The user has selected the following chemical elements directly from the periodic table: "
                f"{', '.join(request.selected_elements)}. "
                "Use these elements explicitly in your reasoning.\n\n"
            )

        messages = [{"role": "system", "content": system_prompt}]

        if request.conversation_history:
            for msg in request.conversation_history[-10:]:
                messages.append({
                    "role": msg.get("role", "user"),
                    "content": msg.get("content", "")
                })

        messages.append({
            "role": "user",
            "content": file_context + element_context + request.message
        })

        completion = deepseek_client.chat.completions.create(
            model="deepseek-chat",
            messages=messages,
            temperature=0.7,
            max_tokens=2000
        )

        reply = completion.choices[0].message.content
        return {"success": True, "response": reply}

    except Exception as e:
        logger.error(f"❌ DeepSeek Chat Failure: {e}", exc_info=True)
        return {"success": False, "response": f"Error: {str(e)}"}

# ------------------------------------------------------------
# MatterGen Structure Generator
# ------------------------------------------------------------
@app.post("/api/generate-structure")
async def generate_structure(request: GenerateRequest):
    logger.info(f"🔬 Generating structure for: {request.elements}")
    temp_dir = tempfile.mkdtemp()
    try:
        output_path = os.path.join(temp_dir, "output")
        elements_str = "-".join(sorted(request.elements))

        cmd = [
            "mattergen-generate",
            output_path,
            "--pretrained-name=chemical_system_energy_above_hull",
            "--batch_size=1",
            f"--properties_to_condition_on={{'energy_above_hull': {request.energy_above_hull}, 'chemical_system': '{elements_str}'}}",
            "--diffusion_guidance_factor=2.0"
        ]

        result = subprocess.run(cmd, cwd=temp_dir, capture_output=True, text=True, timeout=300)
        if result.returncode != 0:
            raise HTTPException(status_code=500, detail=result.stderr[:300])

        cif_file = find_and_extract_cif(Path(temp_dir))
        if not cif_file:
            raise HTTPException(status_code=500, detail="No CIF file found")

        structure = read(str(cif_file))
        pdb_path = Path(temp_dir) / "structure.pdb"
        write(str(pdb_path), structure, format="proteindatabank")

        with open(pdb_path, "r") as f:
            pdb_data = f.read()

        a, b, c, alpha, beta, gamma = structure.get_cell_lengths_and_angles()
        atoms = structure.get_chemical_symbols()

        structure_id = f"struct_{len(structure_cache)}"
        structure_cache[structure_id] = structure

        return {
            "success": True,
            "pdb": pdb_data,
            "structure_id": structure_id,
            "num_atoms": len(structure),
            "elements": list(set(atoms)),
            "cell_parameters": {
                "a": a, "b": b, "c": c,
                "alpha": alpha, "beta": beta, "gamma": gamma
            },
            "atom_colors": {a: ELEMENT_COLORS.get(a, "#FF00FF") for a in set(atoms)}
        }

    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)

# ------------------------------------------------------------
# Structure Modification
# ------------------------------------------------------------
@app.post("/api/modify-structure")
async def modify_structure(request: StructureModRequest):
    if request.structure_id not in structure_cache:
        raise HTTPException(status_code=404, detail="Structure not found")

    structure = structure_cache[request.structure_id]

    try:
        if request.modification_type == "slab":
            miller = tuple(request.parameters.get("miller", [1, 1, 1]))
            layers = request.parameters.get("layers", 5)
            vacuum = request.parameters.get("vacuum", 10)
            modified = ase_surface(structure, miller, layers, vacuum=vacuum)

        elif request.modification_type == "supercell":
            repeat = request.parameters.get("repeat", [2, 2, 2])
            modified = structure.repeat(repeat)

        else:
            raise HTTPException(status_code=400, detail="Unknown modification")

        pdb_path = tempfile.mktemp(suffix=".pdb")
        write(pdb_path, modified, format="proteindatabank")

        with open(pdb_path, "r") as f:
            pdb_data = f.read()

        new_id = f"struct_{len(structure_cache)}"
        structure_cache[new_id] = modified

        return {"success": True, "pdb": pdb_data, "structure_id": new_id}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ------------------------------------------------------------
# CIF Download
# ------------------------------------------------------------
@app.get("/api/download-cif/{structure_id}")
async def download_cif(structure_id: str):
    if structure_id not in structure_cache:
        raise HTTPException(status_code=404, detail="Structure not found")

    structure = structure_cache[structure_id]
    temp_dir = tempfile.mkdtemp()
    cif_path = Path(temp_dir) / f"{structure_id}.cif"
    try:
        write(str(cif_path), structure, format="cif")
        return FileResponse(str(cif_path))
    finally:
        shutil.rmtree(temp_dir)

# ------------------------------------------------------------
# Local Dev Entry
# ------------------------------------------------------------
if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", "5000"))
    uvicorn.run(app, host="0.0.0.0", port=port)
