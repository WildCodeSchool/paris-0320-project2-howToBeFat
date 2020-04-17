import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBeer,
  faHamburger,
  faBalanceScaleRight,
} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'



function Navbar(){
    return (
        <div className ="navbar-mobile">
          <a className="active" href="#home"><FontAwesomeIcon icon={faHome} /></a>
          <a href="#recipes"><FontAwesomeIcon icon={faHamburger} /></a>
          <a href="#beer"><FontAwesomeIcon icon={faBeer} /></a>
          <a href="#calculator"><FontAwesomeIcon icon={faBalanceScaleRight} /></a>
        </div>
           )
}

export default Navbar

