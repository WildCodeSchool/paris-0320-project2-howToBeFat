import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBeer,
  faHamburger,
  faBalanceScaleRight,
} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom'



function Navbar(){
    return (
        <div className ="navbar-mobile">
          <a className="active" href="#home"><FontAwesomeIcon icon={faHome} /></a>
          <a href="#recipes"><FontAwesomeIcon icon={faHamburger} /></a>

          <Link to="/SearchBeer"><FontAwesomeIcon icon={faBeer} /></Link>
          {/* <a href="#beer"><FontAwesomeIcon icon={faBeer} /></a> */}
          <a href="#calculator"><FontAwesomeIcon icon={faBalanceScaleRight} /></a>
        </div>
           )
}

export default Navbar

