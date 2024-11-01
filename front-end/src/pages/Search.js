// src/pages/Search.js
import React from 'react';

function Search() {
  return (
    <div className="search">
      <h1>Search Videos</h1>
      <input type="text" placeholder="Search for videos..." />
      {/* Placeholder for search results */}
      <div className="search-results">
        <div className="video-card">Search Result 1</div>
        <div className="video-card">Search Result 2</div>
      </div>
    </div>
  );
}

export default Search;
