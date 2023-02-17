import React from 'react'
import Banners from "../../assets/Banners.png"

const Banner = () => {
  return (
    <div className="Movies__Banner">
      <img src={Banners} alt="MovieBanner" />
    </div>
  )
}

export default Banner