import React from 'react'
import {Link, NavLink} from "react-router-dom"
import "./navbar.css"
import Logo from "../assets/logo.png"
import {links} from '../data'
import {FaBars} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav>
        <div className="Navbar__container">
                <Link to ="/" className="Navbar__container-logo">
                <img src={Logo} alt="logo"/> 
                </Link>
                <ul className="Navbar__container-links">
                    {
                    links.map(({name,path},index)  =>{
                        return(
                            <li>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : '' }>{name}</NavLink>
                            </li>
                        )
                    })
                    }
                </ul>
                <Link to= "/signup" className="Nav__header-content-sign">SignUp</Link>  
                <Link to= "/login" className="Nav__header-content-log">Login</Link>     
            <button className="Navbar__container-button">
           <FaBars />
        </button>
        </div>
    </nav>
  )
}

export default Navbar
