const textToSpeechClient = require('../config/textToSpeech');

/**
 * Converts text to speech using Google Cloud TTS.
 * @param {string} text - The text you want to convert to audio.
 * @param {Object} config - Additional TTS configuration (voice, languageCode, etc.).
 * @returns {Promise<Buffer>} - Audio file content as a Buffer.
 */
async function synthesizeSpeech(text, config = {}) {
  const request = {
    input: { text },
    voice: {
      languageCode: 'en-US',
      ssmlGender: 'NEUTRAL',
      ...config.voice,
    },
    audioConfig: {
      audioEncoding: 'MP3',
      ...config.audioConfig,
    },
  };

  const [response] = await textToSpeechClient.synthesizeSpeech(request);
  // response.audioContent is a Buffer in Node.js
  return response.audioContent;
}

module.exports = { synthesizeSpeech };
