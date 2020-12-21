import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
  const navStyle = {
      color: 'white'
  };
  return (
    <nav>
        <h3>Hi, I am Tridiv</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="./about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="./skills">
            <li>Skills</li>
          </Link>

          <Link style={navStyle} to="./projects">
            <li>Projects</li>
          </Link>
          <Link style={navStyle} to="./contact">
            <li>Contact</li>
          </Link>
        </ul>
    </nav>
  );
}
export default Nav;