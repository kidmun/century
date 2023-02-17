import React from 'react'
import {Link} from "react-router-dom"

const AboutHeader = () => {
  return (
    
    <div>
        <div className="About__mainheader-container">
        <div className="About__mainheader-container_header">
        <div className="About__mainheader-container_text">
               
                <h1>About Us</h1>
               <p>Located at Addis Ababa, Ethiopia , Century mall  features the best in luxury, contemporary.
                
        
               </p>
               <Link to= "/About" className="About__header-content-button">Explore more</Link>
               
           </div>
        </div>
    </div>
      
    </div>
  )
}

export default AboutHeader
