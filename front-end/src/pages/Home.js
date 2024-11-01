// frontend/src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { getVideosByCategory } from '../api';

function Home() {
  const [categories, setCategories] = useState({
    popular: [],
    campusNews: [],
    lectures: [],
    sports: [],
  });

  useEffect(() => {
    const fetchVideos = async () => {
      const popular = await getVideosByCategory('popular');
      const campusNews = await getVideosByCategory('campus');
      const lectures = await getVideosByCategory('lecture');
      const sports = await getVideosByCategory('sports');
      setCategories({
        popular: popular.data,
        campusNews: campusNews.data,
        lectures: lectures.data,
        sports: sports.data,
      });
    };
    fetchVideos();
  }, []);

  return (
    <div className="home">
      <h1>UI Premier TV</h1>
      {Object.entries(categories).map(([category, videos]) => (
        <section key={category}>
          <h2>{category}</h2>
          <div className="video-grid">
            {videos.map((video) => (
              <div key={video._id} className="video-card">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
