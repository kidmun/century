import React from 'react'
import {Link} from "react-router-dom"

const MainHeader = () => {
  return (
    <div className="Home__mainheader-container">
        <div className="Home__mainheader-container_header">
        <div className="Home__mainheader-container_text">
                <h3>Welcome to</h3>
                <h1>Century Mall</h1>
               <p>Located at Addis Ababa, Ethiopia , Century mall  features the best in luxury, contemporary.
                
        
               </p>
               <Link to= "/About" className="Home__header-content-button">Explore more</Link>
           </div>
        </div>
    </div>
  )
}

export default MainHeader
