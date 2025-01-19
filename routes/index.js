const express = require('express');
const router = express.Router();

const conversationRoute = require('./conversationRoute');

// Combine all routes
router.use('/api', conversationRoute);

module.exports = router;
