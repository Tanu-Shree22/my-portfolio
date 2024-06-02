// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
    <ul className="navbar">
    <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <a href="#portfolio" className="dropbtn">Portfolio</a>
          <div className="dropdown-content">
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
          </div>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
