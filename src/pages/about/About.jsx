import React from 'react'
import AboutHeader from "../../components/About/AboutHeader"
import AboutUs from "../../components/About/AboutUs"
import "./about.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutHeader />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default About
