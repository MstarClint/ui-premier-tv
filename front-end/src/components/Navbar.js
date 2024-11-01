// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="UI Premier TV Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
