import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import heart icon
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; 2024 Solukraft Pharmaceutical. All Rights Reserved.</p>
        <p>
          Made with <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} /> by Webex
        </p>
      </div>
    </footer>
  );
}

export default Footer;
