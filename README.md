Voice-AI Conversation Project
A Node.js/Express application that lets you talk with an AI. It performs:

Speech-to-Text (using Google Cloud Speech-to-Text)
AI Conversation (using OpenAI’s Chat models)
Text-to-Speech (using Google Cloud Text-to-Speech)
The server receives audio from a client, converts it to text, sends it to OpenAI for a response, then synthesizes the AI’s text back into spoken audio.

Table of Contents
Features
Technologies Used
Project Structure
Prerequisites
Installation
Configuration
Usage
Testing
Next Steps
License
Features
Upload Audio: Receives an audio file (e.g., WAV) via a form upload.
Speech-to-Text: Transcribes the audio into text using Google Cloud.
AI Conversation: Sends the transcribed text to an OpenAI Chat model, receives a response.
Text-to-Speech: Converts the AI’s text response back into an MP3 audio file.
Returns MP3: Sends the MP3 file to the client for playback or download.
Technologies Used
Node.js & Express: Web server framework
Multer: To handle file uploads in Express
OpenAI Node.js Client: For GPT-3.5 / GPT-4 Chat API
Google Cloud Speech-to-Text: For audio transcription
Google Cloud Text-to-Speech: For synthesizing text back to audio
dotenv: To manage environment variables
Project Structure
graphql
Copy
voice-ai-project/
├─ .env.example              # Example environment variables
├─ package.json
├─ app.js                    # Main Express application setup
├─ server.js                 # Starts the server
│
├─ config/
│  ├─ openai.js             # OpenAI API configuration
│  ├─ speechToText.js       # Google Cloud Speech client
│  └─ textToSpeech.js       # Google Cloud TTS client
│
├─ controllers/
│  └─ conversationController.js  # Handles the conversation logic flow
│
├─ middleware/
│  └─ fileUpload.js         # Multer config for handling file uploads
│
├─ routes/
│  ├─ index.js              # Root router
│  └─ conversationRoute.js  # Defines /api/converse endpoint
│
├─ services/
│  ├─ aiService.js          # Interacts with OpenAI Chat models
│  ├─ transcriptionService.js # Interacts with Google Cloud Speech-to-Text
│  └─ ttsService.js         # Interacts with Google Cloud Text-to-Speech
│
└─ utils/
   └─ logger.js             # Example utility (optional)
config/: External service configurations (OpenAI, Google Cloud, etc.).
controllers/: Orchestrates logic per route (conversation flow, error handling).
middleware/: Express middlewares, e.g. Multer for file uploads.
routes/: Express routers for various endpoints.
services/: Reusable modules for speech-to-text, text-to-speech, AI calls, etc.
utils/: Helper functions and utilities.
Prerequisites
Node.js (>= 14.x recommended)
npm or yarn for package management.
Google Cloud Account (with Speech-to-Text and Text-to-Speech enabled)
OpenAI API Key
Installation
Clone this repository or download the project folder.
Install dependencies:
bash
Copy
npm install
or
bash
Copy
yarn
Configuration
Copy the example environment file:

bash
Copy
cp .env.example .env
In your new .env file, set:

OPENAI_API_KEY to your OpenAI API key.
GOOGLE_APPLICATION_CREDENTIALS to the path of your Google Cloud service account JSON key.
PORT (optional) for the Express server port (defaults to 3000).
Google Cloud Credentials:

Obtain your service account key (JSON) from Google Cloud Console.
Save it somewhere in your project or on your server (e.g. ./keys/google-credentials.json).
Point GOOGLE_APPLICATION_CREDENTIALS to that path.
Usage
Start the server:
bash
Copy
npm run start
or (for development with auto-restart):
bash
Copy
npm run dev
Server will run on http://localhost:3000 (unless you changed the port in .env).
Testing
You can test the endpoint using curl or a tool like Postman. Here’s a curl example:

bash
Copy
curl -X POST -F "audio=@path/to/your/audio.wav" \
  http://localhost:3000/api/converse \
  --output response.mp3
-F "audio=@path/to/your/audio.wav" uploads the audio file via a form field named audio.
--output response.mp3 saves the response (in MP3 format) to a local file named response.mp3.
Play response.mp3 to hear the AI’s voice response.
Tip: Make sure your audio is in a format compatible with your Google Cloud Speech-to-Text config (e.g., PCM WAV, FLAC, etc.). You can change the settings in services/transcriptionService.js.

Next Steps
Conversation Context: Store conversation history so the AI can maintain context across multiple requests.
Streaming: Use streaming endpoints (WebSocket or gRPC) for real-time interactions.
Authentication: Secure your endpoint with API keys, OAuth, or other auth mechanisms.
Error Handling: Enhance logging, handle edge cases (no speech, poor audio quality, etc.).
Custom Voices: Use Google Cloud TTS voices or other TTS services to get different accents, genders, or styles.
