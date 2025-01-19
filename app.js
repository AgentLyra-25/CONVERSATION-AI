require('dotenv').config(); // Load environment variables
const express = require('express');
const routes = require('./routes');

const app = express();

// Optional: Parse JSON bodies if needed
app.use(express.json());

// Use your routes
app.use('/', routes);

// Simple health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
