// backend/routes/favoritesRoutes.js
const express = require('express');
const { addFavorite, removeFavorite, getFavorites } = require('../controllers/favoritesController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', protect, addFavorite);         // Add video to favorites
router.delete('/remove/:videoId', protect, removeFavorite); // Remove video from favorites
router.get('/', protect, getFavorites);            // Get user's favorites

module.exports = router;
