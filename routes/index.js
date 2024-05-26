const express = require('express');
const router = express.Router();
const multer = require('multer');

const homeController = require('../controllers/home_controller');
const fileController = require('../controllers/file_controller');

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/files' });

// Route for home page
router.get('/', homeController.home);

// Route for file upload
router.post('/upload', upload.single('file'), fileController.upload);

// Route for viewing a specific file by ID
router.get('/view/:id', fileController.view);

// Route for deleting a specific file by ID
router.get('/delete/:id', fileController.delete);

module.exports = router;
