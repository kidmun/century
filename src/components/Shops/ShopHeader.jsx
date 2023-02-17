import React from 'react'
import {Link} from "react-router-dom"

const ShopHeader = () => {
  return (
    <div>
       <div className="Shop__mainheader-container">
        <div className="Shop__mainheader-container_header">
        <div className="Shop__mainheader-container_text">
                <h3>Explore our</h3>
                <h1>Shops</h1>
               <p>Located at Addis Ababa, Ethiopia , Century mall  features the best in luxury, contemporary.
                
        
               </p>
               <Link to= "/About" className="Shop__header-content-button">Explore more</Link>
           </div>
        </div>
    </div>
    </div>
  )
}

export default ShopHeader