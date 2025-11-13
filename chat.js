// ============================================================================
// Aethorion AI - Unified Chat Module
// Combines:
//  - Original ChatModule (modes, history, intro, element selection, copy button)
//  - File upload integration (PDF/CIF/image for AI response)
//  - Backend health check
// ============================================================================

const API_BASE_URL = 'http://54.156.173.153:5000';

// ============================================================================
// Chat Module
// ============================================================================

window.ChatModule = {
  // State management
  conversationHistory: [],
  currentChatId: null,
  currentMode: null, // 'literature', 'design', 'predict', 'optimize', or null for general
  selectedElements: [], // Track selected elements globally
  isProcessing: false,  // Prevent double sends while waiting for backend

  // Mode configurations
  modes: {
    literature: {
      name: 'Literature Analysis',
      icon: '📚',
      systemPrompt: 'You are an expert materials science researcher specializing in literature analysis and identifying research gaps. Analyze scientific papers, trends, and opportunities in materials science.',
      examplePrompt: 'Analyze research gaps in SrTiO₃ perovskite catalysts'
    },
    design: {
      name: 'Materials Design',
      icon: '⚗️',
      systemPrompt: 'You are an expert in computational materials design and inverse design methods. Help design novel materials with specific properties and compositions.',
      examplePrompt: 'Design a stable material containing Sr, Ti, and O'
    },
    predict: {
      name: 'Property Prediction',
      icon: '🔬',
      systemPrompt: 'You are an expert in predicting materials properties using computational methods. Provide insights on adsorption, catalytic activity, and other physicochemical properties.',
      examplePrompt: 'Predict adsorption properties of CO on SrTiO₃ at 500K'
    },
    optimize: {
      name: 'Parameter Optimization',
      icon: '⚙️',
      systemPrompt: 'You are an expert in process optimization and operational parameter tuning for materials synthesis and manufacturing. Help optimize conditions for better yield and efficiency.',
      examplePrompt: 'Help me optimize our operational parameters for catalyst synthesis'
    }
  },

  // Initialize chat module
  init() {
    console.log('💬 Initializing Chat Module (Unified Version)...');

    // Clean up invalid chat history
    this.cleanChatHistory();

    // Pre-load history object (used for modal)
    this.loadChatHistory();

    // Set up event listeners
    this.setupEventListeners();

    // Watch element selection integration with periodic table
    this.watchElementSelection();

    // Setup file upload integration (for AI response only)
    this.setupFileUploadIntegration();

    // Check backend health
    this.checkBackendHealth();

    // Start a new chat session (shows welcome message)
    this.startNewChat();

    console.log('✅ Chat Module Initialized');
  },

  // --------------------------------------------------------------------------
  // Backend Health Check
  // --------------------------------------------------------------------------
  async checkBackendHealth() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      if (response.ok) {
        const data = await response.json();
        console.log('✅ Backend healthy:', data);
      } else {
        console.warn('⚠️ Backend health check failed');
        showNotification('Backend connection issue', 'warning');
      }
    } catch (error) {
      console.error('❌ Backend unreachable:', error);
      showNotification('Cannot connect to backend. Please check if it is running.', 'error');
    }
  },

  // --------------------------------------------------------------------------
  // File Upload Integration (For AI Response Only)
  // --------------------------------------------------------------------------
  setupFileUploadIntegration() {
    // Watch the uploaded files panel for changes to detect active file
    const filesPanel = document.getElementById('uploadedFilesPanel');
    if (!filesPanel || typeof MutationObserver === 'undefined') {
      return;
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'childList' ||
          mutation.type === 'attributes'
        ) {
          this.checkForActiveFile();
        }
      });
    });

    observer.observe(filesPanel, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
  },

  checkForActiveFile() {
    if (!window.fileUploadManager) return;

    const mgr = window.fileUploadManager;
    const currentFileId = typeof mgr.getCurrentFileId === 'function'
      ? mgr.getCurrentFileId()
      : mgr.currentFileId;

    if (currentFileId) {
      console.log('📁 Active file detected:', currentFileId);
      // We don't show suggestions, but we'll use this file for AI responses
    }
  },

  // Get current file ID for backend (without showing suggestions)
  getCurrentFileId() {
    if (!window.fileUploadManager) return null;

    const mgr = window.fileUploadManager;
    return typeof mgr.getCurrentFileId === 'function'
      ? mgr.getCurrentFileId()
      : mgr.currentFileId || null;
  },

  // Add file context indicator to show which file is being used
  addFileContextIndicator(fileId, messageDiv) {
    if (!window.fileUploadManager) return;

    const mgr = window.fileUploadManager;
    const files = mgr.uploadedFiles || [];
    const currentFile = files.find(f => f.file_id === fileId);
    if (!currentFile) return;

    const targetMessage =
      messageDiv ||
      (document.getElementById('chatMessages') || {}).lastElementChild;

    if (!targetMessage) return;

    const indicator = document.createElement('div');
    indicator.className = 'message-file-context';
    indicator.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
      <span>Using: ${currentFile.filename}</span>
    `;

    const messageContent = targetMessage.querySelector('.message-content');
    if (messageContent) {
      messageContent.insertBefore(indicator, messageContent.firstChild);
    }
  },

  // --------------------------------------------------------------------------
  // Element Selection (Periodic table integration)
  // --------------------------------------------------------------------------
  // Watch for element selection changes from external sources
  watchElementSelection() {
    // Listen for custom events from periodic table or other element selectors
    window.addEventListener('elementsSelected', (e) => {
      if (e.detail && Array.isArray(e.detail.elements)) {
        this.selectedElements = [...e.detail.elements];
        console.log('🧪 Elements selected (event):', this.selectedElements);
        // UI for selected elements is handled outside (e.g., main.js)
      }
    });

    // Optional polling of global window.selectedElements (backup path)
    setInterval(() => {
      if (window.selectedElements && Array.isArray(window.selectedElements)) {
        const now = JSON.stringify(window.selectedElements);
        const prev = JSON.stringify(this.selectedElements);
        if (now !== prev) {
          this.selectedElements = [...window.selectedElements];
          console.log('🧪 Elements updated from global:', this.selectedElements);
        }
      }
    }, 500);
  },

  // Get selected elements (for external access)
  getSelectedElements() {
    return [...this.selectedElements];
  },

  // Set selected elements (for external access)
  setSelectedElements(elements) {
    if (Array.isArray(elements)) {
      this.selectedElements = [...elements];
      console.log('🧪 Elements set via ChatModule:', this.selectedElements);
      // Optionally broadcast change
      window.dispatchEvent(new CustomEvent('elementsSelected', {
        detail: { elements: this.selectedElements }
      }));
    }
  },

  // --------------------------------------------------------------------------
  // Chat History Maintenance
  // --------------------------------------------------------------------------
  // Clean up invalid chat history entries
  cleanChatHistory() {
    try {
      const historyStr = localStorage.getItem('chatHistory');
      if (!historyStr) return;

      const history = JSON.parse(historyStr);
      const cleanedHistory = {};

      // Filter out invalid entries
      Object.keys(history).forEach(key => {
        const chat = history[key];
        if (
          chat &&
          chat.id &&
          chat.timestamp &&
          !isNaN(chat.timestamp) &&
          chat.messages &&
          Array.isArray(chat.messages) &&
          chat.messages.length > 0
        ) {
          cleanedHistory[key] = chat;
        }
      });

      localStorage.setItem('chatHistory', JSON.stringify(cleanedHistory));
      console.log('🧹 Chat history cleaned');
    } catch (error) {
      console.error('Error cleaning chat history:', error);
      localStorage.removeItem('chatHistory');
    }
  },

  // Load chat history from localStorage
  loadChatHistory() {
    try {
      const history = localStorage.getItem('chatHistory');
      return history ? JSON.parse(history) : {};
    } catch (error) {
      console.error('Error loading chat history:', error);
      return {};
    }
  },

  // Get chat history
  getChatHistory() {
    return this.loadChatHistory();
  },

  // --------------------------------------------------------------------------
  // Event Listeners
  // --------------------------------------------------------------------------
  setupEventListeners() {
    // Send button click
    const sendBtn = document.getElementById('sendBtn');
    if (sendBtn) {
      sendBtn.addEventListener('click', () => this.handleSendMessage());
    }

    // Message input - Enter key
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
      messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleSendMessage();
        }
      });
    }

    // New chat button
    const newChatBtn = document.getElementById('newChatBtn');
    if (newChatBtn) {
      newChatBtn.addEventListener('click', () => this.startNewChat());
    }

    // History button
    const historyBtn = document.getElementById('historyBtn');
    if (historyBtn) {
      historyBtn.addEventListener('click', () => this.openHistoryModal());
    }

    // History modal close buttons
    const historyModalClose = document.getElementById('historyModalClose');
    const historyModalOverlay = document.getElementById('historyModalOverlay');
    const closeHistoryBtn = document.getElementById('closeHistoryBtn');

    if (historyModalClose) {
      historyModalClose.addEventListener('click', () => this.closeHistoryModal());
    }
    if (historyModalOverlay) {
      historyModalOverlay.addEventListener('click', () => this.closeHistoryModal());
    }
    if (closeHistoryBtn) {
      closeHistoryBtn.addEventListener('click', () => this.closeHistoryModal());
    }

    // Clear history button
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', () => this.clearAllHistory());
    }

    // Clear elements selection button (Chat side)
    const clearSelectionBtn = document.getElementById('clearSelectionBtn');
    if (clearSelectionBtn) {
      clearSelectionBtn.addEventListener('click', () => {
        this.selectedElements = [];
        console.log('🧪 Elements cleared via chat button');
        window.dispatchEvent(new CustomEvent('elementsSelected', {
          detail: { elements: [] }
        }));
      });
    }

    // Clickable capability tags - MODE SELECTION
    const tags = document.querySelectorAll('.clickable-tag');
    tags.forEach(tag => {
      tag.addEventListener('click', () => {
        const action = tag.getAttribute('data-action');
        this.enterMode(action);
      });
    });

    console.log('✅ Chat event listeners attached');
  },

  // --------------------------------------------------------------------------
  // Modes
  // --------------------------------------------------------------------------
  // Enter a specific mode
  enterMode(mode) {
    if (!this.modes[mode]) {
      console.error('Invalid mode:', mode);
      return;
    }

    this.currentMode = mode;
    const modeConfig = this.modes[mode];

    console.log(`🎯 Entering ${modeConfig.name} mode`);

    // Add mode notification message
    this.addModeMessage(modeConfig);

    // Update UI to show active mode
    this.updateModeUI(mode);
  },

  // Exit mode (return to general chat)
  exitMode() {
    this.currentMode = null;
    console.log('↩️ Exiting mode - General chat');
    this.updateModeUI(null);
  },

  // Add mode entry message
  addModeMessage(modeConfig) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    const modeDiv = document.createElement('div');
    modeDiv.className = 'message ai-message mode-message';
    modeDiv.innerHTML = `
      <div class="message-avatar">
        <img src="images/logo.png" alt="AI" style="width: 100%; height: 100%; object-fit: contain; padding: 4px;">
      </div>
      <div class="message-content">
        <div class="message-text">
          <div class="mode-badge">${modeConfig.icon} ${modeConfig.name} Mode</div>
          <p>I'm now specialized in <strong>${modeConfig.name.toLowerCase()}</strong>.</p>
          <p>Try asking me something like: <em>"${modeConfig.examplePrompt}"</em></p>
          <p>You may use 🧪 icon to select elements in your system!</p>
        </div>
      </div>
    `;

    chatMessages.appendChild(modeDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  },

  // Update UI to reflect current mode
  updateModeUI(mode) {
    const chatbotTitle = document.querySelector('.chatbot-title');

    if (mode && this.modes[mode]) {
      const modeConfig = this.modes[mode];
      if (chatbotTitle) {
        chatbotTitle.textContent = `${modeConfig.icon} ${modeConfig.name}`;
      }
    } else {
      if (chatbotTitle) {
        chatbotTitle.textContent = 'AI Innovation Assistant';
      }
    }
  },

  // --------------------------------------------------------------------------
  // Sending Messages
  // --------------------------------------------------------------------------
  // Handle sending a message
  async handleSendMessage() {
    const messageInput = document.getElementById('messageInput');
    if (!messageInput) return;

    const message = messageInput.value.trim();
    if (!message || this.isProcessing) {
      return;
    }

    console.log('📤 Sending message:', message);
    console.log('🧪 Selected elements (on send):', this.selectedElements);

    // Build enhanced message with element context if elements are selected
    let enhancedMessage = message;
    if (this.selectedElements.length > 0) {
      enhancedMessage = `[Selected elements: ${this.selectedElements.join(', ')}]\n\n${message}`;
    }

    // Add user message to chat (show original message)
    this.addMessage(message, 'user');

    // Clear input
    messageInput.value = '';

    // Add to conversation history (use enhanced message)
    this.conversationHistory.push({
      role: 'user',
      content: enhancedMessage
    });

    // Show typing indicator
    const typingIndicator = this.addTypingIndicator();

    // Get uploaded file context (if any)
    const uploadedFileId = this.getCurrentFileId();

    this.isProcessing = true;

    try {
      const response = await this.sendToBackend(enhancedMessage, uploadedFileId);
      typingIndicator.remove();

      const aiDiv = this.addMessage(response, 'ai');

      // Add AI message to history
      this.conversationHistory.push({
        role: 'assistant',
        content: response
      });

      // Attach file context indicator if file was used
      if (uploadedFileId) {
        this.addFileContextIndicator(uploadedFileId, aiDiv);
      }

      // Save chat
      this.saveCurrentChat();
    } catch (error) {
      console.error('❌ Error:', error);
      typingIndicator.remove();
      this.addMessage('Sorry, I encountered an error. Please try again.', 'ai');
      showNotification('Failed to send message', 'error');
    } finally {
      this.isProcessing = false;
    }
  },

  // Send message to backend
  async sendToBackend(message, uploadedFileId = null) {
    try {
      // Build system prompt based on mode (kept for future extension)
      let systemPrompt = 'You are Aethorion AI, an expert materials science assistant with deep technical knowledge.';

      if (this.currentMode && this.modes[this.currentMode]) {
        systemPrompt = this.modes[this.currentMode].systemPrompt;
      }

      const payload = {
        message: message,
        conversation_history: this.conversationHistory.slice(-10),
        mode: this.currentMode,
        selected_elements: this.selectedElements,
        uploaded_file_id: uploadedFileId  // This is crucial for file processing
      };

      console.log('📦 Sending payload to backend:', {
        message: message.substring(0, 100) + '...',
        mode: this.currentMode,
        selected_elements: this.selectedElements,
        uploaded_file_id: uploadedFileId
      });

      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        return data.response;
      } else {
        throw new Error('Backend returned unsuccessful response');
      }
    } catch (error) {
      console.error('Backend error:', error);
      throw error;
    }
  },

  // --------------------------------------------------------------------------
  // UI Rendering Helpers
  // --------------------------------------------------------------------------
  // Add a message to the chat
  addMessage(content, type) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return null;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;

    // Add avatar for AI messages
    if (type === 'ai') {
      const avatar = document.createElement('div');
      avatar.className = 'message-avatar';
      avatar.innerHTML = '<img src="images/logo.png" alt="AI" style="width: 100%; height: 100%; object-fit: contain; padding: 4px;">';
      messageDiv.appendChild(avatar);
    }

    // Message content wrapper with relative positioning for copy button
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';

    const messageText = document.createElement('div');
    messageText.className = 'message-text';

    // Format message content (preserve line breaks)
    messageText.innerHTML = this.formatMessage(content);

    messageContent.appendChild(messageText);

    // Add copy button for AI messages (top-right position)
    if (type === 'ai') {
      const copyBtn = this.createCopyButton(content);
      messageContent.appendChild(copyBtn);
    }

    messageDiv.appendChild(messageContent);

    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return messageDiv;
  },

  // Create copy button for AI responses (clean icon, top-right)
  createCopyButton(content) {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn-topright';
    copyBtn.title = 'Copy response';
    copyBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    `;

    copyBtn.addEventListener('click', async () => {
      try {
        const plainText = content
          .replace(/<br\s*\/?>/gi, '\n')
          .replace(/<[^>]*>/g, '')
          .replace(/&nbsp;/g, ' ')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&');

        await navigator.clipboard.writeText(plainText);

        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;

        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          `;
        }, 2000);

        console.log('✅ Copied to clipboard');
      } catch (error) {
        console.error('❌ Failed to copy:', error);

        const textArea = document.createElement('textarea');
        textArea.value = content.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();

        try {
          document.execCommand('copy');
          copyBtn.classList.add('copied');
          setTimeout(() => copyBtn.classList.remove('copied'), 2000);
        } catch (err) {
          console.error('Fallback copy failed:', err);
        }

        document.body.removeChild(textArea);
      }
    });

    return copyBtn;
  },

  // Format message content
  formatMessage(content) {
    let formatted = content.replace(/\n/g, '<br>');

    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

    return formatted;
  },

  // Add typing indicator
  addTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return null;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai-message typing-indicator';
    typingDiv.innerHTML = `
      <div class="message-avatar">
        <img src="images/logo.png" alt="AI" style="width: 100%; height: 100%; object-fit: contain; padding: 4px;">
      </div>
      <div class="message-content">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;

    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return typingDiv;
  },

  // --------------------------------------------------------------------------
  // New Chat & History
  // --------------------------------------------------------------------------
  // Start a new chat
  startNewChat() {
    console.log('🆕 Starting new chat...');

    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) {
      console.error('chatMessages element not found');
      return;
    }

    // Save current chat if exists
    if (this.currentChatId && this.conversationHistory.length > 0) {
      this.saveCurrentChat();
    }

    // Generate new chat ID
    this.currentChatId = 'chat_' + Date.now();

    // Clear conversation history
    this.conversationHistory = [];

    // Exit any active mode
    this.exitMode();

    // Try to preserve existing welcome message from HTML
    const existingWelcome = chatMessages.querySelector('.message.ai-message');
    chatMessages.innerHTML = '';

    if (existingWelcome) {
      const clonedWelcome = existingWelcome.cloneNode(true);
      chatMessages.appendChild(clonedWelcome);

      const tags = clonedWelcome.querySelectorAll('.clickable-tag');
      tags.forEach(tag => {
        tag.addEventListener('click', () => {
          const action = tag.getAttribute('data-action');
          this.enterMode(action);
        });
      });
    } else {
      const welcome = document.createElement('div');
      welcome.className = 'message ai-message';
      welcome.innerHTML = `
        <div class="message-avatar">
          <img src="images/logo.png" alt="AI" style="width: 100%; height: 100%; object-fit: contain; padding: 4px;">
        </div>
        <div class="message-content">
          <div class="message-text">
            <p>Hi, I'm <strong>Aethorion AI</strong> 🧪 Your materials innovation assistant.</p>
            <p>Select elements with the periodic table icon, then ask me anything about design, prediction, or optimization.</p>
          </div>
        </div>
      `;
      chatMessages.appendChild(welcome);
    }

    console.log('✅ New chat started:', this.currentChatId);
  },

  // Save current chat to localStorage
  saveCurrentChat() {
    if (!this.currentChatId || this.conversationHistory.length === 0) {
      return;
    }

    const chatHistory = this.getChatHistory();

    const firstUserMsg = this.conversationHistory.find(msg => msg.role === 'user');
    if (!firstUserMsg) return;

    const summary = firstUserMsg.content.substring(0, 60) +
      (firstUserMsg.content.length > 60 ? '...' : '');

    chatHistory[this.currentChatId] = {
      id: this.currentChatId,
      timestamp: Date.now(),
      summary: summary,
      mode: this.currentMode,
      messages: [...this.conversationHistory]
    };

    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    console.log('💾 Chat saved:', this.currentChatId);
  },

  // Open history modal
  openHistoryModal() {
    const modal = document.getElementById('chatHistoryModal');
    const historyList = document.getElementById('historyList');
    if (!modal || !historyList) {
      console.error('History modal elements not found');
      return;
    }

    const chatHistory = this.getChatHistory();
    const chats = Object.values(chatHistory)
      .filter(chat => chat && chat.timestamp && !isNaN(chat.timestamp))
      .sort((a, b) => b.timestamp - a.timestamp);

    historyList.innerHTML = '';

    if (chats.length === 0) {
      historyList.innerHTML = '<div class="empty-history">No chat history yet</div>';
    } else {
      chats.forEach(chat => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        const date = new Date(chat.timestamp).toLocaleString();
        const modeIcon = chat.mode && this.modes[chat.mode] ? this.modes[chat.mode].icon : '💬';

        historyItem.innerHTML = `
          <div class="history-item-content">
            <div class="history-item-header">
              <span class="history-mode-icon">${modeIcon}</span>
              <div class="history-item-title">${chat.summary}</div>
            </div>
            <div class="history-item-date">${date}</div>
          </div>
          <button class="history-item-delete" data-chat-id="${chat.id}" title="Delete this chat">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        `;

        const contentArea = historyItem.querySelector('.history-item-content');
        contentArea.addEventListener('click', () => {
          this.loadChat(chat.id);
          this.closeHistoryModal();
        });

        const deleteBtn = historyItem.querySelector('.history-item-delete');
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.deleteChat(chat.id);
          historyItem.remove();

          if (historyList.children.length === 0) {
            historyList.innerHTML = '<div class="empty-history">No chat history yet</div>';
          }
        });

        historyList.appendChild(historyItem);
      });
    }

    modal.classList.add('active');
  },

  // Close history modal
  closeHistoryModal() {
    const modal = document.getElementById('chatHistoryModal');
    if (modal) {
      modal.classList.remove('active');
    }
  },

  // Load a specific chat
  loadChat(chatId) {
    const chatHistory = this.getChatHistory();
    const chat = chatHistory[chatId];

    if (!chat) {
      console.error('Chat not found:', chatId);
      return;
    }

    if (this.currentChatId && this.conversationHistory.length > 0) {
      this.saveCurrentChat();
    }

    this.currentChatId = chat.id;
    this.conversationHistory = [...chat.messages];
    this.currentMode = chat.mode || null;

    this.updateModeUI(this.currentMode);

    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    chatMessages.innerHTML = '';

    this.conversationHistory.forEach(msg => {
      const type = msg.role === 'user' ? 'user' : 'ai';
      const displayContent = msg.content.replace(/^\[Selected elements:.*?\]\n\n/, '');
      this.addMessage(displayContent, type);
    });

    console.log('✅ Chat loaded:', chatId);
  },

  // Delete a specific chat
  deleteChat(chatId) {
    const chatHistory = this.getChatHistory();
    delete chatHistory[chatId];
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    console.log('🗑️ Chat deleted:', chatId);
  },

  // Clear all history
  clearAllHistory() {
    if (confirm('Are you sure you want to clear all chat history? This cannot be undone.')) {
      localStorage.removeItem('chatHistory');
      this.closeHistoryModal();
      console.log('🗑️ All chat history cleared');
    }
  }
};

// ============================================================================
// Initialize when DOM is ready
// ============================================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.ChatModule.init();
  });
} else {
  window.ChatModule.init();
}

console.log('💬 Chat Module - Unified Version Loaded');

// ============================================================================
// Global Wrapper (optional)
// Allows other scripts to call chat functions easily
// ============================================================================

window.aethorionChat = {
  sendMessage: () => window.ChatModule.handleSendMessage(),
  setSelectedElements: (elements) => window.ChatModule.setSelectedElements(elements),
  getSelectedElements: () => window.ChatModule.getSelectedElements(),
  startNewChat: () => window.ChatModule.startNewChat()
};

// ============================================================================
// Utility: Toast Notification
// ============================================================================

function showNotification(message, type = 'info') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  if (!toast || !toastMessage) {
    console.log(`[${type.toUpperCase()}] ${message}`);
    return;
  }

  toastMessage.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ============================================================================
// Additional Styles for File Context & Typing Indicator
// ============================================================================

const additionalStyles = `
  .message-file-context {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 12px;
    font-size: 12px;
    color: #10B981;
    margin-bottom: 8px;
  }

  .message-file-context svg {
    width: 14px;
    height: 14px;
  }

  .typing-indicator {
    animation: fadeIn 0.3s ease;
  }

  .typing-dots {
    display: flex;
    gap: 4px;
    padding: 8px 16px;
  }

  .typing-dots span {
    width: 8px;
    height: 8px;
    background: var(--accent, #6f9eff);
    border-radius: 50%;
    animation: typingBounce 1.4s infinite;
  }

  .typing-dots span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing-dots span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes typingBounce {
    0%, 60%, 100% {
      transform: translateY(0);
      opacity: 0.7;
    }
    30% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);