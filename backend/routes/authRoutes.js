// backend/routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);    // Register new user
router.post('/login', loginUser);          // Login user
router.get('/profile', protect, getUserProfile); // Get profile of logged-in user

module.exports = router;
