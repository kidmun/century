import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logoo.png"
import{FaFacebookF} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"


const Footer = () => {
  return (
//  <footer>
//     <div className="Footer__container">
//     <article>
//         <Link to="/" className="Footer__container-logo">
//             <img src={Logo} alt="Footer__logo"/>
//         </Link>
//         <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        
//         </p>
        
//         <div className="Footer__container-socials">        
//             <a href='https://facebook.com' target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
//             <a href='https://linkedin.com' target="_blank" rel="noreferrer noopener"><FaLinkedinIn/></a>
//             <a href='https://facebook.com' target="_blank" rel="noreferrer noopener"><FaTwitter/></a>
//             <a href='https://facebook.com' target="_blank" rel="noreferrer noopener"><RiInstagramFill/></a>
//         </div>
//         </article>
//         <article>
//             <h4>Permalinks</h4>
//             <Link to ="/">Home</Link>
//             <Link to ="/Shops">Shops</Link>
//             <Link to ="/Movies">Movies</Link>
//         </article>
//         <article>
//             <h4>Permalinks</h4>
//             <Link to ="/">Home</Link>
//             <Link to ="/Shops">Shops</Link>
//             <Link to ="/Movies">Movies</Link>
//         </article>
//         <article>
//             <h4>Permalinks</h4>
//             <Link to ="/">Home</Link>
//             <Link to ="/Shops">Shops</Link>
//             <Link to ="/Movies">Movies</Link>
//         </article>
    
//     </div>
//     <div className="Footer__container-copyright">
//        <h4>© 2022 RealPage, Inc. • All trademarks are the properties of their respective owners. Privacy Policy • Privacy Shield • DMCA Notice</h4>
//     </div>
//  </footer>

<>
  
   <div className="Footer__container">
   <div>

    <div className="Footer__container-footer">
        <div className="Footer__container-logo">
        <Link to="/" className="Footer__container-logo">
          <img src={Logo} alt="Footer__logo"/></Link>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
      <div className="Footer__container-socials">
             <a href='https://facebook.com' target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
             <a href='https://linkedin.com' target="_blank" rel="noreferrer noopener"><FaLinkedinIn/></a>
             <a href='https://facebook.com' target="_blank" rel="noreferrer noopener"><FaTwitter/></a>
             <a href='https://facebook.com' target="_blank" rel="noreferrer noopener"><RiInstagramFill/></a>
        </div>
        </div>
        
        <div className="Footer__permalinks">
            <h1>Permalinks</h1>
           <Link to ="/">Home</Link>
           <Link to ="/Shops">Shops</Link>
           <Link to ="/Movies">Movies</Link>
           <Link to ="/About">About</Link>
           <Link to ="/Contact">Contact</Link>

        </div>
        <div className="Footer__permalinks">
        <h1>Permalinks</h1>
           <Link to ="/">Home</Link>
           <Link to ="/Shops">Shops</Link>
           <Link to ="/Movies">Movies</Link>
           <Link to ="/About">About</Link>
           <Link to ="/Contact">Contact</Link>
        </div>
        <div className="Footer__permalinks">
        <h1>Permalinks</h1>
           <Link to ="/">Home</Link>
           <Link to ="/Shops">Shops</Link>
           <Link to ="/Movies">Movies</Link>
           <Link to ="/About">About</Link>
           <Link to ="/Contact">Contact</Link>
        </div>
        
    </div>
   <div>
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink ="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
</div>
   </div>

    {/* <div className="Footer__copyright">
    <p>© 2022 RealPage, Inc. • All trademarks are the properties of their respective owners. Privacy Policy • Privacy Shield • DMCA Notice</p>
 </div> */}
 </>
  )
 }

export default Footer
