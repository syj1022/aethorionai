// ===================================
// Literature Analysis Module
// Handles scientific literature analysis requests
// ===================================

window.LiteratureModule = {
  async handleMessage(message, selectedElements) {
    console.log('📚 Literature Module: Processing request');
    
    // Add user message
    if (window.ChatModule) {
      window.ChatModule.addMessage(message, 'user');
    }
    
    // Show typing indicator
    const typingIndicator = window.ChatModule ? 
      window.ChatModule.addTypingIndicator() : null;
    
    try {
      const response = await fetch('http://54.156.173.153:5000/chat/literature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          elements: selectedElements
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Remove typing indicator
      if (typingIndicator) {
        typingIndicator.remove();
      }
      
      // Add AI response with literature-specific formatting
      if (window.ChatModule) {
        window.ChatModule.addMessage(data.response, 'ai');
      }
      
      console.log('✅ Literature analysis completed');
      
    } catch (error) {
      console.error('❌ Literature analysis error:', error);
      
      if (typingIndicator) {
        typingIndicator.remove();
      }
      
      if (window.ChatModule) {
        window.ChatModule.addMessage(
          '❌ Sorry, I encountered an error analyzing the literature. Please make sure the backend server is running on http://localhost:8000',
          'ai'
        );
      }
    }
  }
};

console.log('📚 Literature Analysis Module Loaded');
