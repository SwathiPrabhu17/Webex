import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
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
        <button className="close-button" onClick={toggleMenu}>
          &times; {/* Close icon */}
        </button>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/journey">JOURNEY</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>
      <div className="navbar-toggle">
        <button className="navbar-button" onClick={toggleMenu}>
          &#9776; {/* Bar (hamburger) icon */}
        </button>
      </div>
    </div>
  );
}
