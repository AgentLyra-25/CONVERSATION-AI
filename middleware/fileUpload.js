const multer = require('multer');

// Configure Multer to store file in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = { upload };
