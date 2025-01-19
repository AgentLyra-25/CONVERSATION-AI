const { Configuration, OpenAIApi } = require('openai');

const openaiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(openaiConfig);

module.exports = openai;
