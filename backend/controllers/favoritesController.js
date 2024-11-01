// backend/controllers/favoritesController.js
const Video = require('../models/Video');
const User = require('../models/User');

// Add a video to user's favorites
exports.addFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user.favorites.includes(req.body.videoId)) {
      user.favorites.push(req.body.videoId);
      await user.save();
      return res.status(200).json({ message: 'Video added to favorites' });
    }
    res.status(400).json({ message: 'Video already in favorites' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Remove a video from user's favorites
exports.removeFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.favorites = user.favorites.filter(
      (videoId) => videoId.toString() !== req.params.videoId
    );
    await user.save();
    res.status(200).json({ message: 'Video removed from favorites' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user's favorite videos
exports.getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('favorites');
    res.status(200).json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
