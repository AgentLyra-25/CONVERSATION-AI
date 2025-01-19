const express = require('express');
const router = express.Router();

const { upload } = require('../middleware/fileUpload');
const { converse } = require('../controllers/conversationController');

// POST /api/converse
router.post('/converse', upload.single('audio'), converse);

module.exports = router;
