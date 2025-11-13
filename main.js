// ===================================
// Shared Module - Utilities, Periodic Table, Animations
// Aethorion AI Innovation Assistant
// ===================================

// =================================== 
// Periodic Table Data
// =================================== 
const periodicTableData = [
  // Period 1
  { number: 1, symbol: 'H', name: 'Hydrogen', weight: '1.008', category: 'nonmetal', row: 1, col: 1 },
  { number: 2, symbol: 'He', name: 'Helium', weight: '4.003', category: 'noble-gas', row: 1, col: 18 },
  // Period 2
  { number: 3, symbol: 'Li', name: 'Lithium', weight: '6.941', category: 'alkali', row: 2, col: 1 },
  { number: 4, symbol: 'Be', name: 'Beryllium', weight: '9.012', category: 'alkaline', row: 2, col: 2 },
  { number: 5, symbol: 'B', name: 'Boron', weight: '10.81', category: 'metalloid', row: 2, col: 13 },
  { number: 6, symbol: 'C', name: 'Carbon', weight: '12.01', category: 'nonmetal', row: 2, col: 14 },
  { number: 7, symbol: 'N', name: 'Nitrogen', weight: '14.01', category: 'nonmetal', row: 2, col: 15 },
  { number: 8, symbol: 'O', name: 'Oxygen', weight: '16.00', category: 'nonmetal', row: 2, col: 16 },
  { number: 9, symbol: 'F', name: 'Fluorine', weight: '19.00', category: 'halogen', row: 2, col: 17 },
  { number: 10, symbol: 'Ne', name: 'Neon', weight: '20.18', category: 'noble-gas', row: 2, col: 18 },
  // Period 3
  { number: 11, symbol: 'Na', name: 'Sodium', weight: '22.99', category: 'alkali', row: 3, col: 1 },
  { number: 12, symbol: 'Mg', name: 'Magnesium', weight: '24.31', category: 'alkaline', row: 3, col: 2 },
  { number: 13, symbol: 'Al', name: 'Aluminum', weight: '26.98', category: 'post-transition', row: 3, col: 13 },
  { number: 14, symbol: 'Si', name: 'Silicon', weight: '28.09', category: 'metalloid', row: 3, col: 14 },
  { number: 15, symbol: 'P', name: 'Phosphorus', weight: '30.97', category: 'nonmetal', row: 3, col: 15 },
  { number: 16, symbol: 'S', name: 'Sulfur', weight: '32.07', category: 'nonmetal', row: 3, col: 16 },
  { number: 17, symbol: 'Cl', name: 'Chlorine', weight: '35.45', category: 'halogen', row: 3, col: 17 },
  { number: 18, symbol: 'Ar', name: 'Argon', weight: '39.95', category: 'noble-gas', row: 3, col: 18 },
  // Period 4
  { number: 19, symbol: 'K', name: 'Potassium', weight: '39.10', category: 'alkali', row: 4, col: 1 },
  { number: 20, symbol: 'Ca', name: 'Calcium', weight: '40.08', category: 'alkaline', row: 4, col: 2 },
  { number: 21, symbol: 'Sc', name: 'Scandium', weight: '44.96', category: 'transition', row: 4, col: 3 },
  { number: 22, symbol: 'Ti', name: 'Titanium', weight: '47.87', category: 'transition', row: 4, col: 4 },
  { number: 23, symbol: 'V', name: 'Vanadium', weight: '50.94', category: 'transition', row: 4, col: 5 },
  { number: 24, symbol: 'Cr', name: 'Chromium', weight: '52.00', category: 'transition', row: 4, col: 6 },
  { number: 25, symbol: 'Mn', name: 'Manganese', weight: '54.94', category: 'transition', row: 4, col: 7 },
  { number: 26, symbol: 'Fe', name: 'Iron', weight: '55.85', category: 'transition', row: 4, col: 8 },
  { number: 27, symbol: 'Co', name: 'Cobalt', weight: '58.93', category: 'transition', row: 4, col: 9 },
  { number: 28, symbol: 'Ni', name: 'Nickel', weight: '58.69', category: 'transition', row: 4, col: 10 },
  { number: 29, symbol: 'Cu', name: 'Copper', weight: '63.55', category: 'transition', row: 4, col: 11 },
  { number: 30, symbol: 'Zn', name: 'Zinc', weight: '65.39', category: 'transition', row: 4, col: 12 },
  { number: 31, symbol: 'Ga', name: 'Gallium', weight: '69.72', category: 'post-transition', row: 4, col: 13 },
  { number: 32, symbol: 'Ge', name: 'Germanium', weight: '72.61', category: 'metalloid', row: 4, col: 14 },
  { number: 33, symbol: 'As', name: 'Arsenic', weight: '74.92', category: 'metalloid', row: 4, col: 15 },
  { number: 34, symbol: 'Se', name: 'Selenium', weight: '78.96', category: 'nonmetal', row: 4, col: 16 },
  { number: 35, symbol: 'Br', name: 'Bromine', weight: '79.90', category: 'halogen', row: 4, col: 17 },
  { number: 36, symbol: 'Kr', name: 'Krypton', weight: '83.80', category: 'noble-gas', row: 4, col: 18 },
  // Period 5
  { number: 37, symbol: 'Rb', name: 'Rubidium', weight: '85.47', category: 'alkali', row: 5, col: 1 },
  { number: 38, symbol: 'Sr', name: 'Strontium', weight: '87.62', category: 'alkaline', row: 5, col: 2 },
  { number: 39, symbol: 'Y', name: 'Yttrium', weight: '88.91', category: 'transition', row: 5, col: 3 },
  { number: 40, symbol: 'Zr', name: 'Zirconium', weight: '91.22', category: 'transition', row: 5, col: 4 },
  { number: 41, symbol: 'Nb', name: 'Niobium', weight: '92.91', category: 'transition', row: 5, col: 5 },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', weight: '95.94', category: 'transition', row: 5, col: 6 },
  { number: 43, symbol: 'Tc', name: 'Technetium', weight: '98', category: 'transition', row: 5, col: 7 },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', weight: '101.1', category: 'transition', row: 5, col: 8 },
  { number: 45, symbol: 'Rh', name: 'Rhodium', weight: '102.9', category: 'transition', row: 5, col: 9 },
  { number: 46, symbol: 'Pd', name: 'Palladium', weight: '106.4', category: 'transition', row: 5, col: 10 },
  { number: 47, symbol: 'Ag', name: 'Silver', weight: '107.9', category: 'transition', row: 5, col: 11 },
  { number: 48, symbol: 'Cd', name: 'Cadmium', weight: '112.4', category: 'transition', row: 5, col: 12 },
  { number: 49, symbol: 'In', name: 'Indium', weight: '114.8', category: 'post-transition', row: 5, col: 13 },
  { number: 50, symbol: 'Sn', name: 'Tin', weight: '118.7', category: 'post-transition', row: 5, col: 14 },
  { number: 51, symbol: 'Sb', name: 'Antimony', weight: '121.8', category: 'metalloid', row: 5, col: 15 },
  { number: 52, symbol: 'Te', name: 'Tellurium', weight: '127.6', category: 'metalloid', row: 5, col: 16 },
  { number: 53, symbol: 'I', name: 'Iodine', weight: '126.9', category: 'halogen', row: 5, col: 17 },
  { number: 54, symbol: 'Xe', name: 'Xenon', weight: '131.3', category: 'noble-gas', row: 5, col: 18 },
  // Period 6
  { number: 55, symbol: 'Cs', name: 'Cesium', weight: '132.9', category: 'alkali', row: 6, col: 1 },
  { number: 56, symbol: 'Ba', name: 'Barium', weight: '137.3', category: 'alkaline', row: 6, col: 2 },
  { number: 57, symbol: 'La', name: 'Lanthanum', weight: '138.9', category: 'lanthanide', row: 6, col: 3 },
  { number: 72, symbol: 'Hf', name: 'Hafnium', weight: '178.5', category: 'transition', row: 6, col: 4 },
  { number: 73, symbol: 'Ta', name: 'Tantalum', weight: '180.9', category: 'transition', row: 6, col: 5 },
  { number: 74, symbol: 'W', name: 'Tungsten', weight: '183.8', category: 'transition', row: 6, col: 6 },
  { number: 75, symbol: 'Re', name: 'Rhenium', weight: '186.2', category: 'transition', row: 6, col: 7 },
  { number: 76, symbol: 'Os', name: 'Osmium', weight: '190.2', category: 'transition', row: 6, col: 8 },
  { number: 77, symbol: 'Ir', name: 'Iridium', weight: '192.2', category: 'transition', row: 6, col: 9 },
  { number: 78, symbol: 'Pt', name: 'Platinum', weight: '195.1', category: 'transition', row: 6, col: 10 },
  { number: 79, symbol: 'Au', name: 'Gold', weight: '197.0', category: 'transition', row: 6, col: 11 },
  { number: 80, symbol: 'Hg', name: 'Mercury', weight: '200.6', category: 'transition', row: 6, col: 12 },
  { number: 81, symbol: 'Tl', name: 'Thallium', weight: '204.4', category: 'post-transition', row: 6, col: 13 },
  { number: 82, symbol: 'Pb', name: 'Lead', weight: '207.2', category: 'post-transition', row: 6, col: 14 },
  { number: 83, symbol: 'Bi', name: 'Bismuth', weight: '209.0', category: 'post-transition', row: 6, col: 15 },
  { number: 84, symbol: 'Po', name: 'Polonium', weight: '209', category: 'post-transition', row: 6, col: 16 },
  { number: 85, symbol: 'At', name: 'Astatine', weight: '210', category: 'halogen', row: 6, col: 17 },
  { number: 86, symbol: 'Rn', name: 'Radon', weight: '222', category: 'noble-gas', row: 6, col: 18 },
  // Period 7
  { number: 87, symbol: 'Fr', name: 'Francium', weight: '223', category: 'alkali', row: 7, col: 1 },
  { number: 88, symbol: 'Ra', name: 'Radium', weight: '226', category: 'alkaline', row: 7, col: 2 },
  { number: 89, symbol: 'Ac', name: 'Actinium', weight: '227', category: 'actinide', row: 7, col: 3 },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', weight: '267', category: 'transition', row: 7, col: 4 },
  { number: 105, symbol: 'Db', name: 'Dubnium', weight: '268', category: 'transition', row: 7, col: 5 },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', weight: '269', category: 'transition', row: 7, col: 6 },
  { number: 107, symbol: 'Bh', name: 'Bohrium', weight: '270', category: 'transition', row: 7, col: 7 },
  { number: 108, symbol: 'Hs', name: 'Hassium', weight: '277', category: 'transition', row: 7, col: 8 },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', weight: '278', category: 'transition', row: 7, col: 9 },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', weight: '281', category: 'transition', row: 7, col: 10 },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', weight: '282', category: 'transition', row: 7, col: 11 },
  { number: 112, symbol: 'Cn', name: 'Copernicium', weight: '285', category: 'transition', row: 7, col: 12 },
  { number: 113, symbol: 'Nh', name: 'Nihonium', weight: '286', category: 'post-transition', row: 7, col: 13 },
  { number: 114, symbol: 'Fl', name: 'Flerovium', weight: '289', category: 'post-transition', row: 7, col: 14 },
  { number: 115, symbol: 'Mc', name: 'Moscovium', weight: '290', category: 'post-transition', row: 7, col: 15 },
  { number: 116, symbol: 'Lv', name: 'Livermorium', weight: '293', category: 'post-transition', row: 7, col: 16 },
  { number: 117, symbol: 'Ts', name: 'Tennessine', weight: '294', category: 'halogen', row: 7, col: 17 },
  { number: 118, symbol: 'Og', name: 'Oganesson', weight: '294', category: 'noble-gas', row: 7, col: 18 },
  // Lanthanides (f-block, row 8)
  { number: 58, symbol: 'Ce', name: 'Cerium', weight: '140.1', category: 'lanthanide', row: 8, col: 4 },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', weight: '140.9', category: 'lanthanide', row: 8, col: 5 },
  { number: 60, symbol: 'Nd', name: 'Neodymium', weight: '144.2', category: 'lanthanide', row: 8, col: 6 },
  { number: 61, symbol: 'Pm', name: 'Promethium', weight: '145', category: 'lanthanide', row: 8, col: 7 },
  { number: 62, symbol: 'Sm', name: 'Samarium', weight: '150.4', category: 'lanthanide', row: 8, col: 8 },
  { number: 63, symbol: 'Eu', name: 'Europium', weight: '152.0', category: 'lanthanide', row: 8, col: 9 },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', weight: '157.3', category: 'lanthanide', row: 8, col: 10 },
  { number: 65, symbol: 'Tb', name: 'Terbium', weight: '158.9', category: 'lanthanide', row: 8, col: 11 },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', weight: '162.5', category: 'lanthanide', row: 8, col: 12 },
  { number: 67, symbol: 'Ho', name: 'Holmium', weight: '164.9', category: 'lanthanide', row: 8, col: 13 },
  { number: 68, symbol: 'Er', name: 'Erbium', weight: '167.3', category: 'lanthanide', row: 8, col: 14 },
  { number: 69, symbol: 'Tm', name: 'Thulium', weight: '168.9', category: 'lanthanide', row: 8, col: 15 },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', weight: '173.0', category: 'lanthanide', row: 8, col: 16 },
  { number: 71, symbol: 'Lu', name: 'Lutetium', weight: '175.0', category: 'lanthanide', row: 8, col: 17 },
  // Actinides (f-block, row 9)
  { number: 90, symbol: 'Th', name: 'Thorium', weight: '232.0', category: 'actinide', row: 9, col: 4 },
  { number: 91, symbol: 'Pa', name: 'Protactinium', weight: '231.0', category: 'actinide', row: 9, col: 5 },
  { number: 92, symbol: 'U', name: 'Uranium', weight: '238.0', category: 'actinide', row: 9, col: 6 },
  { number: 93, symbol: 'Np', name: 'Neptunium', weight: '237', category: 'actinide', row: 9, col: 7 },
  { number: 94, symbol: 'Pu', name: 'Plutonium', weight: '244', category: 'actinide', row: 9, col: 8 },
  { number: 95, symbol: 'Am', name: 'Americium', weight: '243', category: 'actinide', row: 9, col: 9 },
  { number: 96, symbol: 'Cm', name: 'Curium', weight: '247', category: 'actinide', row: 9, col: 10 },
  { number: 97, symbol: 'Bk', name: 'Berkelium', weight: '247', category: 'actinide', row: 9, col: 11 },
  { number: 98, symbol: 'Cf', name: 'Californium', weight: '251', category: 'actinide', row: 9, col: 12 },
  { number: 99, symbol: 'Es', name: 'Einsteinium', weight: '252', category: 'actinide', row: 9, col: 13 },
  { number: 100, symbol: 'Fm', name: 'Fermium', weight: '257', category: 'actinide', row: 9, col: 14 },
  { number: 101, symbol: 'Md', name: 'Mendelevium', weight: '258', category: 'actinide', row: 9, col: 15 },
  { number: 102, symbol: 'No', name: 'Nobelium', weight: '259', category: 'actinide', row: 9, col: 16 },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', weight: '266', category: 'actinide', row: 9, col: 17 }
];

// Shared state for periodic table
const sharedState = {
  selectedElements: new Set()
};

// =================================== 
// Periodic Table Functions
// =================================== 
function initializePeriodicTable() {
  const table = document.getElementById('periodicTable');
  if (!table) return;
  
  // Create 9 rows x 18 columns grid
  const totalCells = 9 * 18;
  const elementMap = new Map();
  
  // Map elements to grid positions
  periodicTableData.forEach(el => {
    const index = (el.row - 1) * 18 + (el.col - 1);
    elementMap.set(index, el);
  });
  
  // Create all cells
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    
    if (elementMap.has(i)) {
      const el = elementMap.get(i);
      cell.className = `element ${el.category}`;
      cell.setAttribute('data-symbol', el.symbol);
      cell.innerHTML = `
        <div class="element-number">${el.number}</div>
        <div class="element-symbol">${el.symbol}</div>
        <div class="element-name">${el.name}</div>
        <div class="element-weight">${el.weight}</div>
      `;
      
      cell.addEventListener('click', () => toggleElement(el.symbol, cell));
    } else {
      cell.className = 'element empty';
    }
    
    table.appendChild(cell);
  }
  
  console.log('✅ Periodic table initialized');
}

function toggleElement(symbol, cell) {
  if (sharedState.selectedElements.has(symbol)) {
    sharedState.selectedElements.delete(symbol);
    cell.classList.remove('selected');
  } else {
    sharedState.selectedElements.add(symbol);
    cell.classList.add('selected');
  }
  updateSelectionCounter();
  
  const selectedArray = Array.from(sharedState.selectedElements);

  if (window.ChatModule?.setSelectedElements) {
      window.ChatModule.setSelectedElements(selectedArray);
  }

  window.selectedElements = selectedArray;

  window.dispatchEvent(new CustomEvent("elementsSelected", {
      detail: { elements: selectedArray }
  }));
}

function updateSelectionCounter() {
  const counter = document.getElementById('selectionCount');
  if (counter) {
    counter.textContent = sharedState.selectedElements.size;
  }
}

function clearAllSelections() {
  sharedState.selectedElements.clear();
  document.querySelectorAll('.element.selected').forEach(el => {
    el.classList.remove('selected');
  });
  updateSelectionCounter();
}

function applySelection() {
  if (sharedState.selectedElements.size === 0) {
    showToast('Please select at least one element', 'warning');
    return;
  }
  
  updateSelectedElementsDisplay();
  const selectedArray = Array.from(sharedState.selectedElements);

  if (window.ChatModule?.setSelectedElements) {
      window.ChatModule.setSelectedElements(selectedArray);
  }

  window.selectedElements = selectedArray;

  window.dispatchEvent(new CustomEvent("elementsSelected", {
      detail: { elements: selectedArray }
  }));
  closePeriodicTableModal();
  
  // Add to message input
  const elementsList = Array.from(sharedState.selectedElements).join(', ');
  const messageInput = document.getElementById('messageInput');
  if (messageInput) {
    const currentText = messageInput.value;
    if (currentText && !currentText.endsWith(' ')) {
      messageInput.value += ' ';
    }
    messageInput.value += elementsList;
    messageInput.focus();
  }
}

function updateSelectedElementsDisplay() {
  const display = document.getElementById('selectedElementsDisplay');
  const list = document.getElementById('selectedElementsList');
  
  if (!display || !list) return;
  
  if (sharedState.selectedElements.size === 0) {
    display.style.display = 'none';
    return;
  }
  
  display.style.display = 'flex';
  list.innerHTML = '';
  
  Array.from(sharedState.selectedElements).forEach(symbol => {
    const chip = document.createElement('div');
    chip.className = 'element-chip';
    chip.innerHTML = `
      <span>${symbol}</span>
      <span class="element-chip-remove">×</span>
    `;
    
    chip.querySelector('.element-chip-remove').addEventListener('click', (e) => {
      e.stopPropagation();
      removeSelectedElement(symbol);
    });
    
    list.appendChild(chip);
  });
}

function removeSelectedElement(symbol) {
  sharedState.selectedElements.delete(symbol);
  
  const elementCell = document.querySelector(`.element[data-symbol="${symbol}"]`);
  if (elementCell) {
    elementCell.classList.remove('selected');
  }
  
  updateSelectedElementsDisplay();
  updateSelectionCounter();
  
  const selectedArray = Array.from(sharedState.selectedElements);

  if (window.ChatModule?.setSelectedElements) {
      window.ChatModule.setSelectedElements(selectedArray);
  }

  window.selectedElements = selectedArray;

  window.dispatchEvent(new CustomEvent("elementsSelected", {
      detail: { elements: selectedArray }
  }));
}

function openPeriodicTableModal() {
  const modal = document.getElementById('periodicTableModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  hidePeriodicHint();
}

function closePeriodicTableModal() {
  const modal = document.getElementById('periodicTableModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// =================================== 
// Periodic Table Hint
// =================================== 
function initializePeriodicHint() {
  setTimeout(() => {
    try {
      const used = localStorage.getItem('periodicTableUsed');
      const periodicHint = document.getElementById('periodicHint');
      
      if (periodicHint && !used) {
        periodicHint.style.display = 'block';
        
        setTimeout(() => {
          if (periodicHint) {
            periodicHint.style.opacity = '0';
            setTimeout(() => {
              if (periodicHint) {
                periodicHint.style.display = 'none';
              }
            }, 300);
          }
        }, 10000);
      }
    } catch (e) {
      console.error('localStorage error:', e);
    }
  }, 3000);
}

function hidePeriodicHint() {
  const periodicHint = document.getElementById('periodicHint');
  if (periodicHint) {
    periodicHint.classList.add('hidden');
    try {
      localStorage.setItem('periodicTableUsed', 'true');
    } catch (e) {
      console.error('localStorage error:', e);
    }
  }
}

// =================================== 
// Particle System
// =================================== 
function initializeParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 50;
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
      ctx.fillStyle = `rgba(111, 158, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          ctx.strokeStyle = `rgba(111, 158, 255, ${0.15 * (1 - distance / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // Resize handler
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  console.log('✅ Particle system initialized');
}

// =================================== 
// UI Utilities
// =================================== 
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

function autoResizeInput() {
  const messageInput = document.getElementById('messageInput');
  if (messageInput) {
    messageInput.style.height = 'auto';
    messageInput.style.height = messageInput.scrollHeight + 'px';
  }
}

function toggleMobileMenu() {
  const nav = document.querySelector('.nav');
  if (nav) {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  }
}

// =================================== 
// Scroll Effects
// =================================== 
function initializeScrollEffects() {
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// =================================== 
// Contact Form Handler
// =================================== 
async function handleContactSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const submitBtn = form.querySelector('.submit-btn');
  const formStatus = document.getElementById('form-status');
  
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.6';
  
  if (formStatus) {
    formStatus.textContent = '📤 Sending your message...';
    formStatus.style.color = '#6F9EFF';
  }
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    
    if (result.success) {
      showToast('✅ Message sent successfully!', 'success');
      if (formStatus) {
        formStatus.textContent = '✅ Message sent! We\'ll get back to you soon.';
        formStatus.style.color = '#10B981';
      }
      form.reset();
      
      setTimeout(() => {
        if (formStatus) formStatus.textContent = '';
      }, 5000);
    } else {
      showToast('❌ Failed to send message', 'error');
      if (formStatus) {
        formStatus.textContent = '❌ Failed to send. Please try again.';
        formStatus.style.color = '#EF4444';
      }
    }
  } catch (error) {
    console.error('Submission failed:', error);
    showToast('❌ Network error. Please try again.', 'error');
    if (formStatus) {
      formStatus.textContent = '❌ Network error. Please try again.';
      formStatus.style.color = '#EF4444';
    }
  } finally {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
  }
}

// =================================== 
// Shared Event Listeners Initialization
// =================================== 
function initializeSharedEventListeners() {
  // Periodic table modal
  const periodicTableBtn = document.getElementById('periodicTableBtn');
  if (periodicTableBtn) {
    periodicTableBtn.addEventListener('click', openPeriodicTableModal);
  }
  
  const modalClose = document.getElementById('modalClose');
  if (modalClose) {
    modalClose.addEventListener('click', closePeriodicTableModal);
  }
  
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closePeriodicTableModal);
  }
  
  const modalClearAll = document.getElementById('modalClearAll');
  if (modalClearAll) {
    modalClearAll.addEventListener('click', clearAllSelections);
  }
  
  const modalApply = document.getElementById('modalApply');
  if (modalApply) {
    modalApply.addEventListener('click', applySelection);
  }
  
  const clearSelectionBtn = document.getElementById('clearSelectionBtn');
  if (clearSelectionBtn) {
    clearSelectionBtn.addEventListener('click', () => {
      clearAllSelections();
      updateSelectedElementsDisplay();
    });
  }
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Auto-resize textarea
  const messageInput = document.getElementById('messageInput');
  if (messageInput) {
    messageInput.addEventListener('input', autoResizeInput);
    messageInput.addEventListener('input', () => {
      if (messageInput.value.length > 0) {
        hidePeriodicHint();
      }
    });
  }
  
  // ESC key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePeriodicTableModal();
      // Add other modal closers here
    }
  });
  
  console.log('✅ Shared event listeners initialized');
}

// =================================== 
// Initialization
// =================================== 
document.addEventListener('DOMContentLoaded', function() {
  initializeSharedEventListeners();
  initializeScrollEffects();
  initializeSmoothScroll();
  initializeParticles();
  initializePeriodicTable();
  initializePeriodicHint();
});

// =================================== 
// Export Shared Module
// =================================== 
window.SharedModule = {
  state: sharedState,
  periodicTableData: periodicTableData,
  selectedElements: () => Array.from(sharedState.selectedElements),
  showToast: showToast,
  openPeriodicTableModal: openPeriodicTableModal,
  closePeriodicTableModal: closePeriodicTableModal,
  clearAllSelections: clearAllSelections,
  initializePeriodicTable: initializePeriodicTable,
  initializeParticles: initializeParticles
};

console.log('✅ Shared Module Loaded');


// ==============================
// FILE UPLOAD MANAGER
// ==============================
window.fileUploadManager = {
  uploadedFiles: [],
  currentFileId: null,

  init() {
    const btn = document.getElementById("fileUploadBtn");
    const input = document.getElementById("fileUploadInput");

    if (!btn || !input) return;

    btn.addEventListener("click", () => input.click());

    input.addEventListener("change", () => {
      if (input.files.length > 0) {
        this.uploadFile(input.files[0]);
      }
    });
  },

  async uploadFile(file) {
    const formData = new FormData();
    let endpoint = null;

    if (file.type === "application/pdf") {
      endpoint = "/api/upload-pdf";
    } else if (file.name.toLowerCase().endsWith(".cif")) {
      endpoint = "/api/upload-cif";
    } else if (file.type.startsWith("image/")) {
      endpoint = "/api/upload-image";
    } else {
      alert("Please upload a PDF, CIF file, or an image");
      return;
    }

    formData.append("file", file);

    const res = await fetch(`https://aethorionai.com${endpoint}`, {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    if (!data.success) {
      alert("Upload failed!");
      return;
    }

    this.uploadedFiles.unshift(data);
    this.currentFileId = data.file_id;
    this.renderFilesPanel();

    window.dispatchEvent(new CustomEvent("fileUploaded"));
  },

  getCurrentFileId() {
    return this.currentFileId;
  },

  renderFilesPanel() {
    const panel = document.getElementById("uploadedFilesPanel");
    if (!panel) return;

    // If no files → hide panel completely
    if (this.uploadedFiles.length === 0) {
      panel.style.display = "none";
      panel.innerHTML = "";
      return;
    }

    // If files exist → show panel
    panel.style.display = "flex";

    panel.innerHTML = this.uploadedFiles
      .map(
        f => `
          <div class="file-chip" data-id="${f.file_id}">
            ${f.filename}
            <span class="file-chip-remove" data-remove="${f.file_id}">✕</span>
          </div>
        `
      )
      .join("");

    panel.querySelectorAll(".file-chip-remove").forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-remove");
        this.removeFile(id);
      };
    });
  },

  removeFile(id) {
    this.uploadedFiles = this.uploadedFiles.filter(f => f.file_id !== id);
    if (this.currentFileId === id) this.currentFileId = null;
    this.renderFilesPanel(); // Re-evaluate visibility
  }

};


// ==============================
// MAIN INITIALIZATION
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  window.fileUploadManager.init();
  console.log("main.js loaded.");
});

// ==============================
// DRAG & DROP FILE UPLOAD
// ==============================
const dropZone = document.getElementById("fileDropZone");

["dragenter", "dragover"].forEach(event => {
  window.addEventListener(event, (e) => {
    e.preventDefault();
    dropZone.classList.add("active");
  });
});

["dragleave", "drop"].forEach(event => {
  window.addEventListener(event, (e) => {
    e.preventDefault();
    dropZone.classList.remove("active");
  });
});

// Handle the dropped files
window.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("active");

  const file = e.dataTransfer.files[0];
  if (!file) return;

  window.fileUploadManager.uploadFile(file);
});
