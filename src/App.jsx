import React from 'react'

const App = () => {
  return (
    <div>
    <header>
        <div className="nav-link"><a href="../../HTMLTUTOR/public/index.html">Home</a></div>
        <div className="nav-link"><a href="">About</a></div>
        <div className="nav-link"><a href="">Contact</a></div>
        <div className="nav-link"><a href="">Services</a></div>
    </header>
    <div className="hero-section">
        <div className="overlay">
            <div className="text">
                <h1>Welcome To My Web Page</h1>
                <p>learn fullstact development, UI/UX, Graphics</p>
                <div><button>Get started</button></div>
            </div>
        </div>
    </div>
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
            <img src="./assts/media/brand.jpg" alt=""/>
        </div>
    </section>
    {/* <!-- Testimonails --> */}
    <section className="testimonials">
        <h4>TESTIMONIAL</h4>
        <h2>What our students Says</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src="../../logo/logo.jpg" alt=""/>
                <h3>Geteera Nekabari</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam blanditiis distinctio aspernatur fugiat unde autem in aut consequatur, 
                    ducimus inventore saepe, temporibus possimus!
                </p>
            </div>
            <div className="card">
                <img src="../../logo/logo.jpg" alt=""/>
                <h3>Geteera Nekabari</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam blanditiis distinctio aspernatur fugiat unde autem in aut consequatur, 
                    ducimus inventore saepe, temporibus possimus!
                </p>
            </div>
            <div className="card">
                <img src="../../logo/logo.jpg" alt=""/>
                <h3>Geteera Nekabari</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam blanditiis distinctio aspernatur fugiat unde autem in aut consequatur, 
                    ducimus inventore saepe, temporibus possimus!
                </p>
            </div>
        </div>
    </section>
    {/* <!-------- CALL TO ACTION SECTION --------> */}
    <section className="cta">
        <div className="cta-content">
            <h2>Ready To Start Your Learning Journey?</h2>
            <p>Join us today and start learning practical digital skills to transform your future</p>
            <a href="" className="cta-botton">Get Started</a>
        </div>
    </section>

    {/* <!-------- footer --------> */}
     
    <footer className="footer">
        <div className="footer-container">
            {/* <!---- About ----> */}
            <div className="footer-box">
                <h2>Our Digital Skills Academy</h2>
                <p>Empowering students with practical digital skills for a better future</p>
            </div>

            {/* <!---- Quick links ----> */}
            <div className="footer-box">
                <h3>Quick Links</h3>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Courses</a>
                <a href="#">Contact</a>
            </div>

            {/* <!---- Contact ----> */}
            <div className="footer-box">
                <h3>Contact Us</h3>
                <p>Email: info@example.com</p>
                <p>Phone: +234 000 000 0000</p>
                <p>Owerri, Imo State</p>
            </div>
        </div>

        {/* <!---- Copyright ----> */}
        <div className="copyright">
            <p>&copy; 2026 Our Digital Skills Academy. All Right Reserved</p>
        </div>
    </footer>
    </div>
  )
}

export default App
