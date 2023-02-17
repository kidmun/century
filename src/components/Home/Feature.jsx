import React from 'react'
import Cheap  from "../../assets/Cheap.png"
import  Location from "../../assets/Location.png"
import  Options from "../../assets/Options.png"


const Feature = () => {
  return (
    <div className="Feature__Header" id="features">
        
        <div className="Feature__header-container">
            <div className="Feature__header-content">
                <img src={Location} alt="Location"/>
                <h1>Best Location</h1>
                <p>The platform gives you access to essential features from a  single location
                   and offers game-changing advantagesthat other rental managementsoftware cannot match.</p>
                   <div className="feature__cta-btn">
                       <button type="button">Read More</button>
                   </div>
            </div>
            <div className="Feature__header-content">
                <img src={Cheap} alt="Location"/>
                <h1>Cheap Prices</h1>
                <p>The platform gives you access to essential features from a  single location
                   and offers game-changing advantagesthat other rental managementsoftware cannot match.</p>
                   <div className="feature__cta-btn">
                       <button type="button">Read More</button>
                   </div>
            </div>
            <div className="Feature__header-content">
                <img src={Options} alt="Location"/>
                <h1>Best Options</h1>
                <p>The platform gives you access to essential features from a  single location
                   and offers game-changing advantagesthat other rental managementsoftware cannot match.</p>
                   <div className="feature__cta-btn">
                       <button type="button">Read More</button>
                   </div>
                   
            </div>
        </div>      
    </div>
  )
}

export default Feature
