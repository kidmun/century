import React from 'react'
import "./contact.css"
import ContactsHeader from '../../components/Contacts/ContactsHeader'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Contactss from "../../components/Contacts/Contactss"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ContactsHeader />
      <Contactss />
      <Footer/>
    </div>
  )
}

export default Contact
