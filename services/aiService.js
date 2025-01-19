const openai = require('../config/openai');

/**
 * Sends a user message to OpenAI's Chat API and returns AI response.
 * @param {string} userMessage - The text to send to the AI.
 * @param {Array} conversationHistory - Optional array of previous conversation messages.
 * @returns {Promise<string>} - AI response text.
 */
async function getAIResponse(userMessage, conversationHistory = []) {
  const messages = [
    { role: 'system', content: 'You are a helpful voice assistant.' },
    ...conversationHistory,  // e.g., previous messages if maintaining a conversation
    { role: 'user', content: userMessage },
  ];

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
  });

  const aiText = response.data.choices[0].message.content;
  return aiText;
}

module.exports = { getAIResponse };
