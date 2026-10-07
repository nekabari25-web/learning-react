import React from 'react'

import Testimony from '../component/Testimony/Testimony'
import CTA from '../component/CTA/CTA'
import Header from '../component/Header/Header'
import Hero from '../component/Hero/Hero'
import About from '../component/About/About'
import Footer from '../component/Footer/Footer'

const LandingPagesScreen = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Testimony />
        <CTA />
        <Footer />
    </div>
  )
}

export default LandingPagesScreen
