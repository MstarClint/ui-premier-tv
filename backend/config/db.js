// backend/config/db.js
const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // Connection options are no longer needed in recent Mongoose versions
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if there's an error
  }
};

module.exports = connectDB;
