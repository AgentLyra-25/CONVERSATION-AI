const { transcribeAudio } = require('../services/transcriptionService');
const { getAIResponse } = require('../services/aiService');
const { synthesizeSpeech } = require('../services/ttsService');

/**
 * Handles the /api/converse route:
 *  1. Receives audio file
 *  2. Transcribes to text
 *  3. Gets AI response
 *  4. Converts AI response to speech
 *  5. Returns audio to the client
 */
async function converse(req, res) {
  try {
    // 1. Check if file exists
    if (!req.file) {
      return res.status(400).send('No audio file uploaded');
    }

    // 2. Transcribe audio -> text
    const transcription = await transcribeAudio(req.file.buffer, {
      // Optionally pass config overrides
    });

    if (!transcription) {
      return res.status(400).send('Failed to transcribe audio');
    }

    console.log('User said:', transcription);

    // 3. Get AI response
    const aiText = await getAIResponse(transcription);
    console.log('AI responded:', aiText);

    // 4. Convert AI response to speech
    const audioContent = await synthesizeSpeech(aiText);

    if (!audioContent) {
      return res.status(500).send('Failed to synthesize speech');
    }

    // 5. Return audio
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Disposition': 'attachment; filename="response.mp3"',
    });
    res.send(audioContent);

  } catch (error) {
    console.error('Error in conversationController:', error.message);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  converse,
};
