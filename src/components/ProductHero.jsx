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
        <img src="/Images/hero1.jpg" alt="Product Background" className="product-background-image" />
      </div>
      <div className="product-background-overlay"></div>


      <header data-aos="fade-up" data-aos-duration="1500" className="product-header">
        <div className="product-content">
          <p className="product-welcome">Explore Our</p>
          <h1>Innovative Product Range</h1>
          <p className="product-para">
            Discover cutting-edge healthcare products designed for precision, safety, and ease of use.
            From drug delivery pens to advanced medical solutions, our products are crafted to meet the highest standards.
          </p>
          <button className="product-button">View Products</button>
        </div>
      </header>


      <div onClick={handleScroll} className="product-step">
        <i className="fa-solid fa-angles-down"></i>
      </div>
    </>
  );
}

export default ProductHero;
