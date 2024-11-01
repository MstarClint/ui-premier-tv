// backend/controllers/videoController.js
const Video = require('../models/Video');
const multer = require('multer');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

// Upload a new video
exports.uploadVideo = [upload.single('video'), async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const video = await Video.create({
      title,
      description,
      category,
      user: req.user.id,
      fileUrl: req.file.path
    });
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading video' });
  }
}];

// Retrieve all videos or by category
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos' });
  }
};

exports.getVideosByCategory = async (req, res) => {
  try {
    const videos = await Video.find({ category: req.params.category });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category videos' });
  }
};
