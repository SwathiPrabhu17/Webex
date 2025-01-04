import React from 'react';
import './ProductHero.css';

function ProductHero() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
    console.log("Product scroll clicked");
  };

  return (
    <>
      <div className="product-background">
        <img src="/Images/image.jpg" alt="Product Background" className="product-background-image" />
      </div>
      <div className="product-background-overlay"></div>


      <header data-aos="fade-up" data-aos-duration="1500" className="product-header">
        <div className="product-content">
          <p className="product-welcome">Explore Our</p>
          <h1>Stories of Innovation</h1>
          <p className="product-para">
          Delve into the world of healthcare advancements through our blogs. From the latest trends in medical technology to the design and development of innovative solutions, discover how we’re shaping the future of healthcare.
          </p>
          <button className="product-button">Read Our Blogs</button>
        </div>
      </header>


      <div onClick={handleScroll} className="product-step">
        <i className="fa-solid fa-angles-down"></i>
      </div>
    </>
  );
}

export default ProductHero;
