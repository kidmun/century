import React from 'react'
import {Link, NavLink} from "react-router-dom"
import "../navbar.css"
import Logo from "../../assets/logo.png"
import {FaBars} from "react-icons/fa"

const AdminNavbar = () => {
  return (
    <nav>
        <div className="Navbar__container">
                <Link to ="/" className="Navbar__container-logo">
                <img src={Logo} alt="logo"/> 
                </Link>
                <ul className="Navbar__container-links">
                    
               
                            <li>
                                <NavLink to={"/admin"} className={({isActive}) => isActive ? 'active-nav' : '' }>Features</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/movies" className={({isActive}) => isActive ? 'active-nav' : '' }>Movies</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/rooms"} className={({isActive}) => isActive ? 'active-nav' : '' }>Rooms</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/create_user"} className={({isActive}) => isActive ? 'active-nav' : '' }>Create Account</NavLink>
                            </li>
                           
                   
                   
                    
                </ul>

            <button className="Navbar__container-button">
           <FaBars />
        </button>
        </div>
    </nav>
  )
}

export default AdminNavbar
