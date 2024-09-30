import React from 'react';
import backgroundImage from '/Images/light-blue-background.jpg';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div
        className="about-header"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '30vh',
         
        }}
      >
        <h1>About Us</h1>
      </div>
    <div className="about-section">
      <div className="about-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem ipsam officiis ab cupiditate recusandae veniam delectus dolore tenetur voluptate Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur sunt ut repudiandae eum id magni molestias perspiciatis minima sapiente, eaque, dignissimos saepe odit fugiat quis velit reiciendis ea excepturi!.....
        </p>
        <div className="explore-btn">
          <a href="">Explore</a>
        </div>
      </div>
      </div>
      
      <hr />

      <div className="card-container">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae possimus voluptatibus pariatur molestias repellendus nemo est id similique. Deleniti, aperiam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quaerat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, fugit!....
          </p>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae possimus voluptatibus pariatur molestias repellendus nemo est id similique. Deleniti, aperiam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quaerat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, fugit!....
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
