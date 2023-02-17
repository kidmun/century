import React from 'react'
import {Link} from "react-router-dom"

const ContactsHeader = () => {
  return (
    <div>
      <div className="Contacts__mainheader-container">
        <div className="Contacts__mainheader-container_header">
        <div className="Contacts__mainheader-container_text">
               
                <h1>Any questions?</h1>
                <h3>Contact us and visit us!</h3>
               <Link to= "/About" className="Contacts__header-content-button">Contact Us</Link>
           </div>
        </div>
    </div>
    </div>
  )
}

export default ContactsHeader
