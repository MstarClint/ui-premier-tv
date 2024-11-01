// frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

// User Authentication
export const registerUser = async (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = async (userData) => axios.post(`${API_URL}/auth/login`, userData);
export const getUserProfile = async (token) =>
  axios.get(`${API_URL}/auth/profile`, { headers: { Authorization: `Bearer ${token}` } });

// Videos
export const getAllVideos = async () => axios.get(`${API_URL}/videos`);
export const getVideosByCategory = async (category) => axios.get(`${API_URL}/videos/category/${category}`);
export const uploadVideo = async (formData, token) =>
  axios.post(`${API_URL}/videos/upload`, formData, { headers: { Authorization: `Bearer ${token}` } });

// Favorites
export const addFavorite = async (videoId, token) =>
  axios.post(`${API_URL}/favorites/add`, { videoId }, { headers: { Authorization: `Bearer ${token}` } });
export const removeFavorite = async (videoId, token) =>
  axios.delete(`${API_URL}/favorites/remove/${videoId}`, { headers: { Authorization: `Bearer ${token}` } });
export const getFavorites = async (token) =>
  axios.get(`${API_URL}/favorites`, { headers: { Authorization: `Bearer ${token}` } });
