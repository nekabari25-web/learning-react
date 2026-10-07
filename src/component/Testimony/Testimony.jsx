import React from 'react'
import "./Testimony.css"
import pixes from "../../assets/dapper.jpg"
import pixe from "../../assets/1000342110.jpg"
import efeeloo from "../../assets/efeeloo.jpg"

const Testimony = () => {
  return (
    <div>
      {/* <!-- Testimonails --> */}
    <section className="testimonials">
        <h4>TESTIMONIAL</h4>
        <h2>What our students Says</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src= {efeeloo} alt=''/>
                <h3>Geteera Nekabari</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam blanditiis distinctio aspernatur fugiat unde autem in aut consequatur, 
                    ducimus inventore saepe, temporibus possimus!
                </p>
            </div>
            <div className="card">
                <img src= {pixes} alt=''/>
                <h3>Geteera Nekabari</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam blanditiis distinctio aspernatur fugiat unde autem in aut consequatur, 
                    ducimus inventore saepe, temporibus possimus!
                </p>
            </div>
            <div className="card">
                <img src= {pixe} alt=''/>
                <h3>Geteera Nekabari</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam blanditiis distinctio aspernatur fugiat unde autem in aut consequatur, 
                    ducimus inventore saepe, temporibus possimus!
                </p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Testimony
