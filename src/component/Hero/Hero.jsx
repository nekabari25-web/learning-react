import React from 'react'
import "./Hero.css";
import {Link}  from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="overlay">
            <div className="text">
                <h1>Welcome To My Web Page</h1>
                <p>learn fullstact development, UI/UX, Graphics</p>
                <div>
                  <Link to="/Login"><button>Get started</button></Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
