import React from 'react'
import ProImg from '../../assets/Pro Img.png'
import ProImage from '../../assets/Pro Image.jpg'


const Promotion = () => {
  return (
    <div className= "Promotion__Header">
        <div className="Promotion__Header-container">
             <div className="Promotion__Header-container-text">
                <h2>Go beyond your imagination</h2>
             </div>
             <div className="Promotion__Header-container-img">
                <img src={ProImg} alt="Burger"></img>
                <img src={ProImage} alt="Burger"></img>
             </div>
        </div>
    </div>
  )
}

export default Promotion
