const textToSpeech = require('@google-cloud/text-to-speech');
const textToSpeechClient = new textToSpeech.TextToSpeechClient();

module.exports = textToSpeechClient;
