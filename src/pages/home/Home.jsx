import React from 'react'
import MainHeader from '../../components/Home/MainHeader'
import Store from '../../components/Home/Store'
import Feature from '../../components/Home/Feature'
import Banner from "../../components/Home/Banner"
import Promotion from '../../components/Home/Promotion'
import Places from '../../components/Home/Places'
import Contact from '../../components/Home/Contact'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MainHeader />
      <Store />
      <Feature />
      <Banner />
      <Promotion />
      <Places />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home
