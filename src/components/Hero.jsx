import React from 'react'
import './Hero.css'
import './Scroll.scss'

function Hero() {
 
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by 100vh
      left: 0,
      behavior: 'smooth' // Smooth scrolling
    });
    console.log("scroll clicked");
  };
  return (
   
   <>
    {/* Background Video */}
   


   <div className="background">

<img src="/Images/hero2.jpg" alt="" className='background-video' />
   </div>
<div className="background-texture">
</div>
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
    <button >Explore</button>
  </div>
</header>

<div >
  <div onClick={handleScroll} className='step'>
      <i className="fa-solid fa-angles-down"></i>      
</div>
</div>
   </>
  )
}

export default Hero