import React from 'react'
import {Link} from "react-router-dom"

const MoviesHeader = () => {
  return (
    <div>
      <div className="Movies__mainheader-container">
        <div className="Movies__mainheader-container_header">
        <div className="Movies__mainheader-container_text">
                <h3>Explore our</h3>
                <h1>New Movies</h1>
               <p>Located at Addis Ababa, Ethiopia , Century mall  features the best in luxury, contemporary.
                
        
               </p>
               <Link to= "/About" className="Movies__header-content-button">Explore more</Link>
           </div>
        </div>
    </div>
    </div>
  )
}

export default MoviesHeader
