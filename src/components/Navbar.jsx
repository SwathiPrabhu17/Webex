import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Using prevState for clarity
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <h1>Solukraft Pharmaceutical</h1>
      </div>
      <div className={`navbar-items ${isOpen ? 'open' : ''}`}>
        {/* <button className="close-button" onClick={toggleMenu}>
          &times;
        </button> */}
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">PRODUCTS</a>
        <a href="#">BLOG</a>
        <a href="#">JOURNEY</a>
        <a href="#">CONTACT US</a>
        <button className="close-button" onClick={toggleMenu}>
          &times; {/* Close icon */}
        </button>
      </div>
      <div className="navbar-toggle">
        <button className="navbar-button" onClick={toggleMenu}>
          &#9776; {/* Bar (hamburger) icon */}
        </button>
      </div>
    </div>
  );
}
