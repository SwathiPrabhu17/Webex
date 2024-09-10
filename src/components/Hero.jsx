import React from 'react'
import './Hero.css'

function Hero() {
  return (
   
   <>
    {/* Background Video */}
    <video autoPlay muted loop className="background-video">
        <source src="/vedios/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

   <div className="background"></div>
<div className="background-texture"></div>
<header

data-aos="zoom-in" data-aos-duration="1500" 
className="header">
  <div className="left-content">
    <p className="welcome">Welcome to</p>
    <h1>Solukraft Pharmaceutical.</h1>
    <p></p>
    <p className="para">
    Transforming healthcare with innovative drug delivery pens, we provide precise, user-friendly 
    solutions for effortless medication management, enhancing the patient experience with advanced, reliable technology..
    </p>
    <button>Explore</button>
  </div>
</header>
<div className="scroll">
      <a href="#scroll">
        <i className="fa-solid fa-chevron-down"></i>
      </a>
</div>
   </>
  )
}

export default Hero