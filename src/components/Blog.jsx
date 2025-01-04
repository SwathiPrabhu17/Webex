import React from 'react'
import BlogHero from './BlogHero';
import './Blog.css'

function Blog() {
  return (
    <>
    <BlogHero/>

    <section className="bg">

    <div 
    
      className="blog-card">
      <img className="blog-img" src="/Images/Blog1.jpeg" />
      <div className="text-overlay">
        <h2>Removing Warts: A user-friendly approach</h2>
        <span>Last updated on March 31 2024</span>
        <p>Warts caused by the (HPV), would be harmful.. &nbsp;&nbsp;<a href="#" className="read-more">Read More</a></p>
     </div>
    </div>

    <div  className="blog-card">
      <img className="blog-img" src="/Images/Blog1.jpeg" />
      <div className="text-overlay">
        <h2>Removing Warts: A user-friendly approach</h2>
        <span>Last updated on March 31 2024</span>
        <p>Warts caused by the (HPV), would be harmful.. &nbsp;&nbsp;<a href="#" className="read-more">Read More</a></p>
     </div>
    </div>

    <div  className="blog-card">
      <img className="blog-img" src="/Images/Blog1.jpeg" />
      <div className="text-overlay">
        <h2>Removing Warts: A user-friendly approach</h2>
        <span>Last updated on March 31 2024</span>
        <p>Warts caused by the (HPV), would be harmful.. &nbsp;&nbsp;<a href="#" className="read-more">Read More</a></p>
     </div>
    </div>
    
  </section>
    
    </>
  )
}

export default Blog