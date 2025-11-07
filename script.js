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
  
  // Period 6 (simplified - main group elements)
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
  { number: 57, symbol: 'La', name: 'Lanthanum', weight: '138.9', category: 'lanthanide', row: 8, col: 3 },
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

// ===================================
// Global State & Configuration
// ===================================
const state = {
  conversationHistory: [],
  isTyping: false,
  currentSessionId: null,
  selectedElements: new Set()
};

// ===================================
// DOM Elements
// ===================================
const elements = {
  chatMessages: document.getElementById('chatMessages'),
  messageInput: document.getElementById('messageInput'),
  sendBtn: document.getElementById('sendBtn'),
  attachmentBtn: document.getElementById('attachmentBtn'),
  periodicTableBtn: document.getElementById('periodicTableBtn'),
  quickActions: document.querySelectorAll('.quick-action-btn'),
  contactForm: document.getElementById('contactForm'),
  menuToggle: document.getElementById('menuToggle'),
  header: document.querySelector('.header'),
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toastMessage'),
  periodicTableModal: document.getElementById('periodicTableModal'),
  modalOverlay: document.getElementById('modalOverlay'),
  modalClose: document.getElementById('modalClose'),
  periodicTable: document.getElementById('periodicTable'),
  selectionCount: document.getElementById('selectionCount'),
  modalClearAll: document.getElementById('modalClearAll'),
  modalApply: document.getElementById('modalApply'),
  selectedElementsDisplay: document.getElementById('selectedElementsDisplay'),
  selectedElementsList: document.getElementById('selectedElementsList'),
  clearSelectionBtn: document.getElementById('clearSelectionBtn'),
  periodicHint: document.getElementById('periodicHint')
};

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  initializeEventListeners();
  initializeScrollEffects();
  initializeSmoothScroll();
  initializeParticles();
  initializePeriodicTable();
  initializePeriodicHint();
  showWelcomeMessage();
});

// ===================================
// Periodic Table Initialization
// ===================================
function initializePeriodicTable() {
  const table = elements.periodicTable;
  
  // Create 9 rows x 18 columns grid (includes f-block rows 8-9)
  const totalCells = 9 * 18;
  const elementMap = new Map();
  
  // Map elements to their grid positions
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
      cell.dataset.symbol = el.symbol;
      cell.innerHTML = `
        <span class="element-number">${el.number}</span>
        <div class="element-symbol">${el.symbol}</div>
        <div class="element-name">${el.name}</div>
        <span class="element-weight">${el.weight}</span>
      `;
      
      cell.addEventListener('click', () => toggleElement(el.symbol, cell));
    } else {
      cell.className = 'element empty';
    }
    
    table.appendChild(cell);
  }
}

function toggleElement(symbol, cell) {
  if (state.selectedElements.has(symbol)) {
    state.selectedElements.delete(symbol);
    cell.classList.remove('selected');
  } else {
    state.selectedElements.add(symbol);
    cell.classList.add('selected');
  }
  
  updateSelectionCounter();
}

function updateSelectionCounter() {
  elements.selectionCount.textContent = state.selectedElements.size;
}

function clearAllSelections() {
  state.selectedElements.clear();
  document.querySelectorAll('.element.selected').forEach(el => {
    el.classList.remove('selected');
  });
  updateSelectionCounter();
}

function applySelection() {
  if (state.selectedElements.size === 0) {
    showToast('Please select at least one element');
    return;
  }
  
  updateSelectedElementsDisplay();
  closePeriodicTableModal();
  
  // Optionally add to message input
  const elementsList = Array.from(state.selectedElements).join(', ');
  const currentText = elements.messageInput.value;
  if (currentText && !currentText.endsWith(' ')) {
    elements.messageInput.value += ' ';
  }
  elements.messageInput.value += elementsList;
  elements.messageInput.focus();
}

function updateSelectedElementsDisplay() {
  if (state.selectedElements.size === 0) {
    elements.selectedElementsDisplay.style.display = 'none';
    return;
  }
  
  elements.selectedElementsDisplay.style.display = 'flex';
  elements.selectedElementsList.innerHTML = '';
  
  state.selectedElements.forEach(symbol => {
    const chip = document.createElement('div');
    chip.className = 'element-chip';
    chip.innerHTML = `
      <span>${symbol}</span>
      <span class="element-chip-remove" data-symbol="${symbol}">×</span>
    `;
    
    chip.querySelector('.element-chip-remove').addEventListener('click', (e) => {
      e.stopPropagation();
      removeSelectedElement(symbol);
    });
    
    elements.selectedElementsList.appendChild(chip);
  });
}

function removeSelectedElement(symbol) {
  state.selectedElements.delete(symbol);
  
  // Update modal if open
  const elementCell = document.querySelector(`.element[data-symbol="${symbol}"]`);
  if (elementCell) {
    elementCell.classList.remove('selected');
  }
  
  updateSelectedElementsDisplay();
  updateSelectionCounter();
}

function openPeriodicTableModal() {
  elements.periodicTableModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePeriodicTableModal() {
  elements.periodicTableModal.classList.remove('active');
  document.body.style.overflow = '';
}

// ===================================
// Periodic Table Hint
// ===================================
function initializePeriodicHint() {
  // Show hint after 3 seconds if user hasn't opened periodic table yet
  setTimeout(() => {
    if (elements.periodicHint && !localStorage.getItem('periodicTableUsed')) {
      elements.periodicHint.style.display = 'block';
      
      // Hide hint after 10 seconds
      setTimeout(() => {
        if (elements.periodicHint) {
          elements.periodicHint.style.opacity = '0';
          setTimeout(() => {
            elements.periodicHint.style.display = 'none';
          }, 300);
        }
      }, 10000);
    }
  }, 3000);
}

function hidePeriodicHint() {
  if (elements.periodicHint) {
    elements.periodicHint.classList.add('hidden');
    localStorage.setItem('periodicTableUsed', 'true');
  }
}

// ===================================
// Particle System
// ===================================
function initializeParticles() {
  const canvas = document.getElementById('particles');
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
}

// ===================================
// Event Listeners
// ===================================
function initializeEventListeners() {
  // Send message events
  elements.sendBtn.addEventListener('click', handleSendMessage);
  elements.messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  });

  // Quick action buttons
  // Quick action buttons (if they exist)
  elements.quickActions.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      handleQuickAction(action);
    });
  });
  
  // Clickable capability tags in welcome message
  document.querySelectorAll('.clickable-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const action = tag.dataset.action;
      handleQuickAction(action);
    });
  });

  // Periodic table modal
  elements.periodicTableBtn.addEventListener('click', () => {
    hidePeriodicHint();
    openPeriodicTableModal();
  });
  elements.modalClose.addEventListener('click', closePeriodicTableModal);
  elements.modalOverlay.addEventListener('click', closePeriodicTableModal);
  elements.modalClearAll.addEventListener('click', clearAllSelections);
  elements.modalApply.addEventListener('click', applySelection);
  
  // Clear selection button
  elements.clearSelectionBtn.addEventListener('click', () => {
    clearAllSelections();
    updateSelectedElementsDisplay();
  });
  
  // Hide periodic hint when user starts typing
  elements.messageInput.addEventListener('input', () => {
    if (elements.messageInput.value.length > 0) {
      hidePeriodicHint();
    }
  });

  // Contact form
  elements.contactForm.addEventListener('submit', handleContactSubmit);

  // Mobile menu toggle
  elements.menuToggle.addEventListener('click', toggleMobileMenu);

  // Auto-resize textarea
  elements.messageInput.addEventListener('input', autoResizeInput);
  
  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.periodicTableModal.classList.contains('active')) {
      closePeriodicTableModal();
    }
  });
}

// ===================================
// Chat Functions
// ===================================
function handleSendMessage() {
  const message = elements.messageInput.value.trim();
  
  if (!message || state.isTyping) return;

  // Add user message
  addMessage(message, 'user');

  // Clear input
  elements.messageInput.value = '';
  elements.messageInput.style.height = 'auto';

  // Save to conversation history
  state.conversationHistory.push({
    role: 'user',
    content: message,
    elements: Array.from(state.selectedElements)
  });

  // Process message and generate response
  processUserMessage(message);
}

function addMessage(text, sender = 'ai', isTyping = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;

  // Create avatar
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  
  if (sender === 'ai') {
    avatar.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    `;
  } else {
    avatar.textContent = 'U';
  }

  // Create content
  const content = document.createElement('div');
  content.className = 'message-content';
  
  const textDiv = document.createElement('div');
  textDiv.className = 'message-text';
  
  if (isTyping) {
    textDiv.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
  } else {
    textDiv.innerHTML = formatMessage(text);
  }

  content.appendChild(textDiv);
  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);

  elements.chatMessages.appendChild(messageDiv);
  scrollToBottom();

  return messageDiv;
}

function formatMessage(text) {
  // Convert markdown-like formatting to HTML
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
  
  return formatted;
}

function scrollToBottom() {
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function showTypingIndicator() {
  const typingMsg = addMessage('', 'ai', true);
  typingMsg.id = 'typing-indicator';
  return typingMsg;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// ===================================
// Message Processing & AI Responses
// ===================================
async function processUserMessage(message) {
  state.isTyping = true;
  const typingIndicator = showTypingIndicator();

  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

  removeTypingIndicator();

  // Analyze message intent and generate appropriate response
  const intent = analyzeMessageIntent(message);
  const response = generateAIResponse(intent, message);

  addMessage(response, 'ai');

  state.conversationHistory.push({
    role: 'assistant',
    content: response
  });

  state.isTyping = false;
}

function analyzeMessageIntent(message) {
  const lower = message.toLowerCase();

  if (lower.includes('literature') || lower.includes('research') || lower.includes('paper') || lower.includes('analyze')) {
    return 'literature';
  } else if (lower.includes('design') || lower.includes('generate') || lower.includes('create') || lower.includes('material')) {
    return 'design';
  } else if (lower.includes('predict') || lower.includes('property') || lower.includes('surface') || lower.includes('calculate')) {
    return 'predict';
  } else if (lower.includes('optimize') || lower.includes('improve') || lower.includes('enhance') || lower.includes('tuning')) {
    return 'optimize';
  } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('help')) {
    return 'greeting';
  } else {
    return 'general';
  }
}

function generateAIResponse(intent, message) {
  const selectedElementsText = state.selectedElements.size > 0 
    ? `<br><br>📋 <strong>Selected Elements:</strong> ${Array.from(state.selectedElements).join(', ')}`
    : '';

  const responses = {
    literature: `
      **Literature Analysis Initiated** ✨${selectedElementsText}
      
      I'll help you analyze the latest research! Based on your query, I can:
      
      **Search** through millions of research papers
      **Extract** key findings and methodologies
      **Identify** knowledge gaps and opportunities
      **Summarize** critical insights
      
      For a complete analysis, please specify:
      - **Chemical elements** or compounds of interest ${state.selectedElements.size > 0 ? '(you\'ve selected some!)' : ''}
      - **Property focus** (catalysis, conductivity, stability, etc.)
      - **Time range** (recent papers, historical overview, etc.)
      
      *Traditional approach: Weeks of manual review*
      *Our AI: Seconds with comprehensive insights*
      
      What specific materials or properties would you like me to analyze?`,

    design: `
      **Inverse Design Module Activated** 🔬${selectedElementsText}
      
      Excellent! I can help you design novel materials with targeted properties.
      
      Here's how we'll proceed:
      
      **Step 1: Define Your Target**
      - Chemical composition ${state.selectedElements.size > 0 ? '(✓ Elements selected!)' : '(which elements?)'}
      - Target properties (stability, bandgap, catalytic activity, etc.)
      - Constraints (synthesis conditions, cost, toxicity, etc.)
      
      **Step 2: AI Generation**
      - Our generative model will create candidate structures
      - Optimization for thermodynamic stability
      - Screening for desired properties
      
      **Step 3: Validation**
      - Structure visualization
      - Property predictions
      - Synthesizability assessment
      
      *Example: "Design a stable perovskite with Sr, Ti, O having energy above hull < 0.05 eV"*
      
      Please specify your target material composition and desired properties!`,

    predict: `
      **Predictive Analysis Ready** ⚡${selectedElementsText}
      
      I can predict material properties with unprecedented speed!
      
      Available analyses:
      
      **Surface Properties:**
      • Adsorption energies (H₂O, CO, CO₂, NH₃, O₂, etc.)
      • Surface stability across different Miller indices
      • Work function and electronic properties
      
      **Bulk Properties:**
      • Formation energy and thermodynamic stability
      • Electronic band structure and bandgap
      • Mechanical properties (elastic constants)
      • Phonon dispersion and thermal properties
      
      **Process Parameters:**
      • Reaction pathways and activation barriers
      • Dopant effects and defect chemistry
      
      **To get started, please provide:**
      - Material composition ${state.selectedElements.size > 0 ? '(✓ Elements selected!)' : '(e.g., SrTiO₃)'}
      - Property of interest
      - Specific conditions (surface orientation, adsorbate, etc.)
      
      What would you like to predict?`,

    optimize: `
      **Optimization Engine Online** 🎯${selectedElementsText}
      
      Perfect! I can help optimize your material or process parameters using AI-guided decision-making.
      
      **Optimization Capabilities:**
      
      **1. Composition Optimization**
      - Dopant selection and concentration
      - Elemental substitution for enhanced properties
      - Multi-component systems ${state.selectedElements.size > 0 ? '(working with your selected elements)' : ''}
      
      **2. Structure Optimization**
      - Crystal structure prediction
      - Defect engineering
      - Surface facet control
      
      **3. Process Optimization**
      - Synthesis temperature and pressure
      - Reaction time and atmosphere
      - Post-treatment conditions
      
      **4. Multi-objective Optimization**
      - Balance multiple competing properties
      - Pareto frontier exploration
      - Trade-off analysis
      
      **Benefits:**
      - Significant cost reduction
      - Faster convergence
      - Global optimum discovery
      
      What parameters would you like to optimize?`,

    greeting: `
      Hello! 👋 I'm your AI research assistant for materials discovery.${selectedElementsText}
      
      I'm here to help accelerate your research with:
      
      **Quick Actions:**
      1. **📚 Literature Analysis** - Search & analyze research papers
      2. **🔬 Materials Design** - Generate novel materials with target properties
      3. **⚡ Property Prediction** - Ultra-fast predictive simulations
      4. **🎯 Optimization** - AI-guided parameter tuning
      
      **You can ask me things like:**
      - "Analyze recent literature on Li-ion cathode materials"
      - "Design a stable oxide containing La, Sr, and Co"
      - "Predict CO₂ adsorption energy on CeO₂ (111) surface"
      - "Optimize dopant concentration for maximum conductivity"
      
      💡 **Pro Tip:** Use the 🧪 button to select elements from the periodic table!
      
      What would you like to work on today?`,

    general: `I understand you're interested in materials research!${selectedElementsText}
    
    To provide the most helpful response, could you clarify:
    
    **Are you looking to:**
    1. **Research** existing literature on a topic?
    2. **Design** new materials with specific properties?
    3. **Predict** properties of known or new materials?
    4. **Optimize** material composition or synthesis parameters?
    
    Please let me know, or feel free to describe your research goal in more detail!
    
    *Tip: Try clicking one of the quick action buttons below for common tasks.*`
  };

  return responses[intent] || responses.general;
}

// ===================================
// Quick Actions
// ===================================
function handleQuickAction(action) {
  const actionMessages = {
    literature: "I'd like to search and analyze literature on materials",
    design: "Help me design a new material with specific properties",
    predict: "I want to predict material properties",
    optimize: "I need to optimize material parameters"
  };

  const message = actionMessages[action];
  elements.messageInput.value = message;
  handleSendMessage();
}

// ===================================
// Welcome Message
// ===================================
function showWelcomeMessage() {
  // Welcome message is already in HTML, so we just need to scroll to it
  scrollToBottom();
}

// ===================================
// Contact Form
// ===================================
async function handleContactSubmit(e) {
  e.preventDefault();

  const formData = {
    email: document.getElementById('emailInput').value,
    company: document.getElementById('companyInput').value,
    message: document.getElementById('messageTextarea').value
  };

  // Here you would typically send to your backend
  // For now, we'll simulate submission
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    showToast('Message sent successfully! We\'ll get back to you within 24 hours.');
    elements.contactForm.reset();
  } catch (error) {
    showToast('Error sending message. Please try again.', 'error');
  }
}

// ===================================
// UI Utilities
// ===================================
function showToast(message, type = 'success') {
  elements.toastMessage.textContent = message;
  elements.toast.classList.add('show');
  
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 3000);
}

function autoResizeInput() {
  elements.messageInput.style.height = 'auto';
  elements.messageInput.style.height = elements.messageInput.scrollHeight + 'px';
}

function toggleMobileMenu() {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// ===================================
// Scroll Effects
// ===================================
function initializeScrollEffects() {
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Header background on scroll
    if (currentScroll > 50) {
      elements.header.classList.add('scrolled');
    } else {
      elements.header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
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
// Chatbot Minimize/Maximize
// ===================================
document.getElementById('minimizeBtn').addEventListener('click', function() {
  const chatbot = document.querySelector('.chatbot-container');
  const btn = this;
  
  if (chatbot.style.height === '60px' || chatbot.style.height === '') {
    // Restore
    chatbot.style.height = '600px';
    btn.textContent = '−';
  } else {
    // Minimize
    chatbot.style.height = '60px';
    btn.textContent = '+';
  }
});

// ===================================
// Export for potential backend integration
// ===================================
window.AethorionAI = {
  state,
  addMessage,
  processUserMessage,
  showToast,
  selectedElements: () => Array.from(state.selectedElements)
};

console.log('🚀 Aethorion AI Chatbot Interface Loaded');
console.log('✨ Ready for backend integration');
console.log('🧪 Periodic Table Feature Enabled');

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observe all sections with fade-in-section class
  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });

  // Observe individual animated elements
  document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-down, .slide-in-up').forEach(element => {
    observer.observe(element);
  });
}

// Initialize scroll animations when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}

