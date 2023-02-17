import React from 'react'
import {Link} from "react-router-dom"


const Banner = () => {
  return (
    <div className="Banner__header">
      <div className="Banner__header-content">
          <div className="Banner__header-content-text">
              <h3>The best known mall</h3>
               <h1>in Addis Ababa</h1>
               <Link to= "/Contact" className="Banner__header-button">Contact Us</Link>
               
           </div>
        </div>
    </div>
  )
}

export default Banner
