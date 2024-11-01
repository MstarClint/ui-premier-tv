// backend/routes/videoRoutes.js
const express = require('express');
const { uploadVideo, getVideosByCategory, getAllVideos } = require('../controllers/videoController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', protect, uploadVideo);           // Upload a video
router.get('/category/:category', getVideosByCategory); // Get videos by category
router.get('/', getAllVideos);                          // Get all videos

module.exports = router;
