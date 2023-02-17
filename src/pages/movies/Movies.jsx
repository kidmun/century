import React from 'react'
import MoviesHeader from "../../components//Movies/MoviesHeader"
import Feature from '../../components/Movies/Feature'
import Movie from '../../components/Movies/Movie'
import Banner from '../../components/Movies/Banner'
import "./movies.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'





const Movies = () => {
  return (
    <div>
      <Navbar/>
      <MoviesHeader />
      <Feature />
      <Banner />
      <Movie />
      <Footer/>
    </div>
  )
}

export default Movies
