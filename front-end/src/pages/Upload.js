// frontend/src/pages/Upload.js
import React, { useState, useContext } from 'react';
import { uploadVideo } from '../api';
import { AuthContext } from '../context/AuthContext';

function Upload() {
  const { token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    videoFile: null,
  });

  const handleFileChange = (e) => setFormData({ ...formData, videoFile: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('video', formData.videoFile);

    try {
      await uploadVideo(data, token);
      alert('Video uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error.response?.data);
    }
  };

  return (
    <div className="upload">
      <h1>Upload a New Video</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Video Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          placeholder="Video Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        ></textarea>
        <input
          type="file"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
