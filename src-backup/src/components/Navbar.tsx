import React from 'react';
import './Navbar.css'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* <a href="/" className="logo-link">
        <img src={rocketImage} alt="Logo" className="navbar-logo" />
      </a> */}
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;