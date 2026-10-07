import React from 'react'
import "./About.css"
import pix from "../../assets/semion.jpg"

const About = () => {
  return (
    <div>
      {/* <!-- ABOUT SECTION --> */}
          <section className="about">
              <div className="about-text">
                  <h3>Meet The Owner</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Temporibus sed, pariatur non, voluptatem ipsa quos accusamus 
                      quasi molestias consectetur enim officia veniam quam 
                      laudantium totam assumenda possimus accusantium ullam quod.
                  </p>
                  <button>Know More</button>
              </div>
              <div className="img">
                  <img src= {pix} alt='image'/>
              </div>
          </section>
    </div>
  )
}

export default About
