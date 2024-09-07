import React from 'react';
import backgroundImage from '/Images/widepen.jpg';
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
      <div className="about-content">
        <p>
        We are Solukarft Pharmaceutical Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis eveniet nesciunt amet voluptatum! Ipsam, cumque mollitia? Maiores perspiciatis, quisquam recusandae eius est deserunt! Consectetur eos a recusandae omnis quasi tenetur repellendus enim velit vero! Facilis vero illo laboriosam. Ullam?
        </p>
        <div className="explore-btn">
            <a href="">Explore</a>
        </div>
      </div>
    </div>
  );
}

export default About;
