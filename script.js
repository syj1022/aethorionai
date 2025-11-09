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

// Store welcome message HTML for reuse
const WELCOME_MESSAGE_HTML = `
<div class="message ai-message" id="welcome-message">
  <div class="message-avatar">
    <img src="images/logo.png" alt="AI" style="width: 100%; height: 100%; object-fit: contain; padding: 4px;">
  </div>
  <div class="message-content">
    <div class="message-text">
       Welcome to Aethorion AI! I'm your innovation assistant.
      <br><br>
      I can help you with:
      <br>
      <div class="capability-tags">
        <span class="tag clickable-tag" data-action="literature">📚 Literature Analysis</span>
        <span class="tag clickable-tag" data-action="design">⚗️ Materials Design</span>
        <span class="tag clickable-tag" data-action="predict">🔬 Property Prediction</span>
        <span class="tag clickable-tag" data-action="optimize">⚙️ Parameter Optimization</span>
      </div>
      <br>
      Try asking me something like:
      <br>
      <em>"Analyze research gaps in SrTiO perovskite catalysts"</em>
      <br>
      <em>"Design a stable material containing Sr, Ti, and O"</em>
      <br>
      <em>"Predict adsorption properties of CO on SrTiO at 500K"</em>
      <br>
      <em>"Help me optimize our operational parameters"</em>
    </div>
  </div>
</div>
`;

// ===================================
// Global State & Configuration
// ===================================
const state = {
  conversationHistory: [],
  isTyping: false,
  currentSessionId: null,
  selectedElements: new Set(),
  chatHistory: [] // Store all chat sessions
};

// ===================================
// DOM Elements
// ===================================
const elements = {
  chatMessages: document.getElementById('chatMessages'),
  messageInput: document.getElementById('messageInput'),
  sendBtn: document.getElementById('sendBtn'),
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
  periodicHint: document.getElementById('periodicHint'),
  historyBtn: document.getElementById('historyBtn'),
  newChatBtn: document.getElementById('newChatBtn'),
  chatHistoryModal: document.getElementById('chatHistoryModal'),
  historyModalOverlay: document.getElementById('historyModalOverlay'),
  historyModalClose: document.getElementById('historyModalClose'),
  historyList: document.getElementById('historyList'),
  clearHistoryBtn: document.getElementById('clearHistoryBtn'),
  closeHistoryBtn: document.getElementById('closeHistoryBtn')
};

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
  initializeScrollEffects();
  initializeSmoothScroll();
  initializeParticles();
  initializePeriodicTable();
  initializePeriodicHint();
  loadChatHistory();
  // Don't call showWelcomeMessage() here - it's already in HTML
});

// ===================================
// Chat History Functions
// ===================================
function saveChatSession() {
  if (state.conversationHistory.length === 0) return;
  
  var session = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    messages: state.conversationHistory.slice() // Use slice() for Safari compatibility
  };
  
  state.chatHistory.push(session);
  
  // Safari-safe localStorage
  try {
    localStorage.setItem('chatHistory', JSON.stringify(state.chatHistory));
  } catch (e) {
    console.error('localStorage not available:', e);
  }
}

function loadChatHistory() {
  try {
    var saved = localStorage.getItem('chatHistory');
    if (saved) {
      state.chatHistory = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading chat history:', e);
  }
}

function displayChatHistory() {
  elements.historyList.innerHTML = '';
  
  if (state.chatHistory.length === 0) {
    elements.historyList.innerHTML = '<div style="text-align: center; padding: 2rem; color: rgba(255,255,255,0.5);">No chat history yet</div>';
    return;
  }
  
  var reversedHistory = state.chatHistory.slice().reverse(); // Safari-safe reverse
  
  reversedHistory.forEach(function(session) {
    var date = new Date(session.timestamp);
    var dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    var firstMessage = null;
    
    // Safari-safe find alternative
    for (var i = 0; i < session.messages.length; i++) {
      if (session.messages[i].role === 'user') {
        firstMessage = session.messages[i].content;
        break;
      }
    }
    
    var preview = firstMessage ? firstMessage.substring(0, 50) + (firstMessage.length > 50 ? '...' : '') : 'New Chat';
    
    var historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = '<div class="history-item-header">' +
      '<div class="history-item-title">' + escapeHtml(preview) + '</div>' +
      '<div class="history-item-date">' + dateStr + '</div>' +
      '</div>' +
      '<div class="history-item-actions">' +
      '<button class="history-load-btn" data-session-id="' + session.id + '">Load</button>' +
      '<button class="history-delete-btn" data-session-id="' + session.id + '">Delete</button>' +
      '</div>';
    
    elements.historyList.appendChild(historyItem);
  });
  
  // Add event listeners
  var loadBtns = document.querySelectorAll('.history-load-btn');
  for (var i = 0; i < loadBtns.length; i++) {
    loadBtns[i].addEventListener('click', function(e) {
      var sessionId = parseInt(e.target.getAttribute('data-session-id'));
      loadChatSession(sessionId);
      closeChatHistoryModal();
    });
  }
  
  var deleteBtns = document.querySelectorAll('.history-delete-btn');
  for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', function(e) {
      var sessionId = parseInt(e.target.getAttribute('data-session-id'));
      deleteChatSession(sessionId);
    });
  }
}

// Safari-safe HTML escaping
function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function loadChatSession(sessionId) {
  var session = null;
  for (var i = 0; i < state.chatHistory.length; i++) {
    if (state.chatHistory[i].id === sessionId) {
      session = state.chatHistory[i];
      break;
    }
  }
  
  if (!session) return;
  
  // Clear current chat (but keep welcome message)
  clearChat(false);
  
  // Restore messages
  state.conversationHistory = session.messages.slice();
  
  for (var i = 0; i < session.messages.length; i++) {
    var msg = session.messages[i];
    if (msg.role === 'user') {
      addMessage(msg.content, 'user');
    } else {
      addMessage(msg.content, 'ai');
    }
  }
  
  showToast('💬 Chat session loaded');
}

function deleteChatSession(sessionId) {
  state.chatHistory = state.chatHistory.filter(function(s) {
    return s.id !== sessionId;
  });
  
  try {
    localStorage.setItem('chatHistory', JSON.stringify(state.chatHistory));
  } catch (e) {
    console.error('Error saving history:', e);
  }
  
  displayChatHistory();
  showToast('🗑️ Chat session deleted');
}

function clearAllHistory() {
  if (confirm('Are you sure you want to clear all chat history?')) {
    state.chatHistory = [];
    try {
      localStorage.removeItem('chatHistory');
    } catch (e) {
      console.error('Error clearing history:', e);
    }
    displayChatHistory();
    showToast('🗑️ All chat history cleared');
  }
}

function startNewChat() {
  if (state.conversationHistory.length > 0) {
    saveChatSession();
  }
  clearChat(true); // Keep welcome message
  showToast('✨ New chat started');
}

function clearChat(keepWelcome) {
  // Clear conversation history
  state.conversationHistory = [];
  
  // Clear chat display
  elements.chatMessages.innerHTML = '';
  
  // Always keep welcome message
  if (keepWelcome !== false) { // Default to true
    showWelcomeMessage();
  }
}

function openChatHistoryModal() {
  displayChatHistory();
  elements.chatHistoryModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeChatHistoryModal() {
  elements.chatHistoryModal.classList.remove('active');
  document.body.style.overflow = '';
}

// ===================================
// Welcome Message Function
// ===================================
function showWelcomeMessage() {
  // Insert welcome message HTML
  elements.chatMessages.innerHTML = WELCOME_MESSAGE_HTML;
  scrollToBottom();
}

// Continuation of script_safari_fixed.js (Part 2)

// ===================================
// Periodic Table Initialization
// ===================================
function initializePeriodicTable() {
  var table = elements.periodicTable;
  
  // Create 9 rows x 18 columns grid (includes f-block rows 8-9)
  var totalCells = 9 * 18;
  var elementMap = new Map();
  
  // Map elements to their grid positions
  for (var i = 0; i < periodicTableData.length; i++) {
    var el = periodicTableData[i];
    var index = (el.row - 1) * 18 + (el.col - 1);
    elementMap.set(index, el);
  }
  
  // Create all cells
  for (var i = 0; i < totalCells; i++) {
    var cell = document.createElement('div');
    
    if (elementMap.has(i)) {
      var el = elementMap.get(i);
      cell.className = 'element ' + el.category;
      cell.setAttribute('data-symbol', el.symbol);
      cell.innerHTML = '<div class="element-number">' + el.number + '</div>' +
        '<div class="element-symbol">' + el.symbol + '</div>' +
        '<div class="element-name">' + el.name + '</div>' +
        '<div class="element-weight">' + el.weight + '</div>';
      
      // Safari-safe event listener
      (function(symbol, cellElem) {
        cellElem.addEventListener('click', function() {
          toggleElement(symbol, cellElem);
        });
      })(el.symbol, cell);
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
  elements.selectionCount.textContent = state.selectedElements.size.toString();
}

function clearAllSelections() {
  state.selectedElements.clear();
  var selectedEls = document.querySelectorAll('.element.selected');
  for (var i = 0; i < selectedEls.length; i++) {
    selectedEls[i].classList.remove('selected');
  }
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
  var elementsList = Array.from(state.selectedElements).join(', ');
  var currentText = elements.messageInput.value;
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
  
  var elementsArray = Array.from(state.selectedElements);
  for (var i = 0; i < elementsArray.length; i++) {
    var symbol = elementsArray[i];
    var chip = document.createElement('div');
    chip.className = 'element-chip';
    chip.innerHTML = '<span>' + symbol + '</span>' +
      '<span class="element-chip-remove">×</span>';
    
    // Safari-safe closure
    (function(sym) {
      chip.querySelector('.element-chip-remove').addEventListener('click', function(e) {
        e.stopPropagation();
        removeSelectedElement(sym);
      });
    })(symbol);
    
    elements.selectedElementsList.appendChild(chip);
  }
}

function removeSelectedElement(symbol) {
  state.selectedElements.delete(symbol);
  
  // Update modal if open
  var elementCell = document.querySelector('.element[data-symbol="' + symbol + '"]');
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
  setTimeout(function() {
    try {
      var used = localStorage.getItem('periodicTableUsed');
      if (elements.periodicHint && !used) {
        elements.periodicHint.style.display = 'block';
        
        // Hide hint after 10 seconds
        setTimeout(function() {
          if (elements.periodicHint) {
            elements.periodicHint.style.opacity = '0';
            setTimeout(function() {
              if (elements.periodicHint) {
                elements.periodicHint.style.display = 'none';
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
  if (elements.periodicHint) {
    elements.periodicHint.classList.add('hidden');
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
  var canvas = document.getElementById('particles');
  if (!canvas) return;
  
  var ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  var particles = [];
  var particleCount = 50;
  
  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.2;
  }
  
  Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  };
  
  Particle.prototype.draw = function() {
    ctx.fillStyle = 'rgba(111, 158, 255, ' + this.opacity + ')';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };
  
  // Create particles
  for (var i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    // Connect nearby particles
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          ctx.strokeStyle = 'rgba(111, 158, 255, ' + (0.15 * (1 - distance / 120)) + ')';
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
  window.addEventListener('resize', function() {
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
  elements.messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  });
  
  // Clickable capability tags in welcome message
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('clickable-tag')) {
      var action = e.target.getAttribute('data-action');
      handleQuickAction(action);
    }
  });
  
  // Periodic table modal
  elements.periodicTableBtn.addEventListener('click', function() {
    hidePeriodicHint();
    openPeriodicTableModal();
  });
  elements.modalClose.addEventListener('click', closePeriodicTableModal);
  elements.modalOverlay.addEventListener('click', closePeriodicTableModal);
  elements.modalClearAll.addEventListener('click', clearAllSelections);
  elements.modalApply.addEventListener('click', applySelection);
  
  // Clear selection button
  elements.clearSelectionBtn.addEventListener('click', function() {
    clearAllSelections();
    updateSelectedElementsDisplay();
  });
  
  // Chat history and new chat buttons
  elements.historyBtn.addEventListener('click', openChatHistoryModal);
  elements.newChatBtn.addEventListener('click', startNewChat);
  elements.historyModalClose.addEventListener('click', closeChatHistoryModal);
  elements.historyModalOverlay.addEventListener('click', closeChatHistoryModal);
  elements.clearHistoryBtn.addEventListener('click', clearAllHistory);
  elements.closeHistoryBtn.addEventListener('click', closeChatHistoryModal);
  
  // Hide periodic hint when user starts typing
  elements.messageInput.addEventListener('input', function() {
    if (elements.messageInput.value.length > 0) {
      hidePeriodicHint();
    }
  });
  
  // Contact form
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', handleContactSubmit);
  }
  
  // Mobile menu toggle
  elements.menuToggle.addEventListener('click', toggleMobileMenu);
  
  // Auto-resize textarea
  elements.messageInput.addEventListener('input', autoResizeInput);
  
  // ESC key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (elements.periodicTableModal.classList.contains('active')) {
        closePeriodicTableModal();
      }
      if (elements.chatHistoryModal.classList.contains('active')) {
        closeChatHistoryModal();
      }
    }
  });
}

// ===================================
// Chat Functions
// ===================================
function handleSendMessage() {
  var message = elements.messageInput.value.trim();
  if (!message || state.isTyping) return;
  
  // Clear input FIRST to prevent double display
  elements.messageInput.value = '';
  elements.messageInput.style.height = 'auto';
  
  // Add user message
  addMessage(message, 'user');
  
  // Save to conversation history
  state.conversationHistory.push({
    role: 'user',
    content: message,
    elements: Array.from(state.selectedElements),
    timestamp: new Date().toISOString()
  });
  
  // Process message and generate response
  processUserMessage(message);
}

function addMessage(text, sender) {
  var messageDiv = document.createElement('div');
  messageDiv.className = 'message ' + sender + '-message';
  
  // Create avatar
  var avatarDiv = document.createElement('div');
  avatarDiv.className = 'message-avatar';
  
  if (sender === 'ai') {
    avatarDiv.innerHTML = '<img src="images/logo.png" alt="AI" style="width: 100%; height: 100%; object-fit: contain; padding: 4px;">';
  } else {
    avatarDiv.innerHTML = '<span style="font-size: 0.9rem;">👤</span>';
  }
  
  // Create message content
  var contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  
  var textDiv = document.createElement('div');
  textDiv.className = 'message-text';
  
  // Format message if it's from AI
  if (sender === 'ai') {
    textDiv.innerHTML = formatMessage(text);
  } else {
    textDiv.textContent = text;
  }
  
  contentDiv.appendChild(textDiv);
  messageDiv.appendChild(avatarDiv);
  messageDiv.appendChild(contentDiv);
  
  elements.chatMessages.appendChild(messageDiv);
  scrollToBottom();
  
  return messageDiv;
}

function formatMessage(text) {
  // Safari-safe regex replacements
  var formatted = text;
  
  // Bold text: **text** -> <strong>text</strong>
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Italic text: *text* -> <em>text</em>
  formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Line breaks
  formatted = formatted.replace(/\n/g, '<br>');
  
  return formatted;
}

function scrollToBottom() {
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function showTypingIndicator() {
  var typingDiv = document.createElement('div');
  typingDiv.className = 'message ai-message';
  typingDiv.id = 'typing-indicator';
  
  var avatarDiv = document.createElement('div');
  avatarDiv.className = 'message-avatar';
  avatarDiv.innerHTML = '<img src="images/logo.png" alt="AI" style="width: 100%; height: 100%; object-fit: contain; padding: 4px;">';
  
  var contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  
  var typingContent = document.createElement('div');
  typingContent.className = 'typing-indicator';
  typingContent.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  
  contentDiv.appendChild(typingContent);
  typingDiv.appendChild(avatarDiv);
  typingDiv.appendChild(contentDiv);
  
  elements.chatMessages.appendChild(typingDiv);
  scrollToBottom();
  
  return typingDiv;
}

function removeTypingIndicator() {
  var indicator = document.getElementById('typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// ===================================
// Message Processing & AI Responses
// ===================================
function processUserMessage(message) {
  state.isTyping = true;
  
  // Show typing indicator
  var typingIndicator = showTypingIndicator();
  
  // Determine action based on message content
  var action = analyzeMessageIntent(message);
  
  // Call backend API
  fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message,
      action: action,
      conversationHistory: state.conversationHistory.slice(-5)
    })
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Backend error: ' + response.status);
    }
    return response.json();
  })
  .then(function(data) {
    // Remove typing indicator
    removeTypingIndicator();
    
    // Add AI response
    addMessage(data.response, 'ai');
    
    // Save to conversation history
    state.conversationHistory.push({
      role: 'assistant',
      content: data.response,
      model: data.model,
      timestamp: new Date().toISOString()
    });
    
    console.log('Query routed to: ' + data.model);
    state.isTyping = false;
  })
  .catch(function(error) {
    console.error('Error:', error);
    
    // Remove typing indicator
    removeTypingIndicator();
    
    // Show error message
    addMessage(
      'Sorry, I encountered an error. Please make sure the backend server is running on http://localhost:3000',
      'ai'
    );
    
    state.isTyping = false;
  });
}

function analyzeMessageIntent(message) {
  var lower = message.toLowerCase();
  
  if (lower.indexOf('literature') !== -1 || lower.indexOf('research') !== -1 || 
      lower.indexOf('paper') !== -1 || lower.indexOf('analyze') !== -1) {
    return 'literature';
  } else if (lower.indexOf('design') !== -1 || lower.indexOf('generate') !== -1 || 
             lower.indexOf('create') !== -1 || lower.indexOf('material') !== -1) {
    return 'design';
  } else if (lower.indexOf('predict') !== -1 || lower.indexOf('property') !== -1 || 
             lower.indexOf('surface') !== -1 || lower.indexOf('calculate') !== -1) {
    return 'predict';
  } else if (lower.indexOf('optimize') !== -1 || lower.indexOf('improve') !== -1 || 
             lower.indexOf('enhance') !== -1 || lower.indexOf('tuning') !== -1) {
    return 'optimize';
  } else {
    return 'general';
  }
}

// ===================================
// Quick Actions
// ===================================
function handleQuickAction(action) {
  var actionMessages = {
    literature: "📚 Literature Analysis",
    design: "⚗️ Materials Design",
    predict: "🔬 Property Prediction",
    optimize: "⚙️ Parameter Optimization"
  };
  
  var message = actionMessages[action] || '';
  
  // Add text to input field instead of auto-sending
  var currentText = elements.messageInput.value.trim();
  if (currentText && currentText.charAt(currentText.length - 1) !== ' ') {
    elements.messageInput.value = currentText + ' ' + message;
  } else {
    elements.messageInput.value = message;
  }
  
  // Focus the input
  elements.messageInput.focus();
}

// ===================================
// Contact Form Handler
// ===================================
function handleContactSubmit(e) {
  e.preventDefault();
  
  var form = elements.contactForm;
  var formData = new FormData(form);
  var submitBtn = form.querySelector('.submit-btn');
  var formStatus = document.getElementById('form-status');
  
  // Disable submit button and show loading state
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.6';
  submitBtn.style.cursor = 'not-allowed';
  
  if (formStatus) {
    formStatus.textContent = '📤 Sending your message...';
    formStatus.style.color = '#6F9EFF';
  }
  
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    if (result.success) {
      showToast('✅ Message sent successfully!', 'success');
      if (formStatus) {
        formStatus.textContent = '✅ Message sent! We\'ll get back to you soon.';
        formStatus.style.color = '#10B981';
      }
      form.reset();
      
      setTimeout(function() {
        if (formStatus) formStatus.textContent = '';
      }, 5000);
    } else {
      showToast('❌ ' + (result.message || 'Failed to send message'), 'error');
      if (formStatus) {
        formStatus.textContent = '❌ ' + (result.message || 'Failed to send. Please try again.');
        formStatus.style.color = '#EF4444';
      }
      console.error('Web3Forms error:', result);
    }
    
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.style.cursor = 'pointer';
  })
  .catch(function(error) {
    console.error('Submission failed:', error);
    showToast('❌ Network error. Please try again.', 'error');
    if (formStatus) {
      formStatus.textContent = '❌ Network error. Please check your connection and try again.';
      formStatus.style.color = '#EF4444';
    }
    
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.style.cursor = 'pointer';
  });
}

// ===================================
// UI Utilities
// ===================================
function showToast(message, type) {
  elements.toastMessage.textContent = message;
  elements.toast.classList.add('show');
  
  setTimeout(function() {
    elements.toast.classList.remove('show');
  }, 3000);
}

function autoResizeInput() {
  elements.messageInput.style.height = 'auto';
  elements.messageInput.style.height = elements.messageInput.scrollHeight + 'px';
}

function toggleMobileMenu() {
  var nav = document.querySelector('.nav');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
}

// ===================================
// Scroll Effects
// ===================================
function initializeScrollEffects() {
  var lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      elements.header.classList.add('scrolled');
    } else {
      elements.header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

function initializeSmoothScroll() {
  var anchors = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
}

// ===================================
// Export for potential backend integration
// ===================================
window.AethorionAI = {
  state: state,
  addMessage: addMessage,
  processUserMessage: processUserMessage,
  showToast: showToast,
  selectedElements: function() {
    return Array.from(state.selectedElements);
  },
  startNewChat: startNewChat,
  saveChatSession: saveChatSession
};

console.log('✅ Aethorion AI Chatbot Interface Loaded');
console.log('✅ Ready for backend integration');
console.log('✅ Periodic Table Feature Enabled');
console.log('✅ Chat History Feature Enabled');
console.log('✅ Safari Compatibility Enabled');
