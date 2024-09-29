import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '/Images/light-blue-background.jpg';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div
        className="contact-header"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width:'100%',
        }}
      >
        <h1>Contact Us</h1>
      </div>
      <div className="contact-card">
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>

        <div className="contact-page">
          <div className="contact-info">
            <div className="contact-item">
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main Street, City, Country</p>
              <p><FontAwesomeIcon icon={faPhone} /> +1234567890</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
            </div>
            <div className="contact-item">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.941867922918!2d144.95543131538125!3d-37.817209579751716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb66c44f38ffbdf37!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1574289282900!5m2!1sen!2sau"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <form action="https://formspree.io/f/moqzryyn" className="contact-form">
            <input type="text" className="textb" placeholder="Your Name" />
            <input type="email" className="textb" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <input type="submit" className="btn" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
