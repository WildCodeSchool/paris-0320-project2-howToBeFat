import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBeer,
  faHamburger,
  faBalanceScaleRight,
} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import {browserRouter as Router,Link,Route} from 'react-router-dom'


function Navbar(){
    return (
      <Router>
        <div className ="navbar-mobile">
          <Link to="#home"className="active"><FontAwesomeIcon icon={faHome} /></Link>
          <Link to="#recipes"><FontAwesomeIcon icon={faHamburger} /></Link>
          <Link to="#beer"><FontAwesomeIcon icon={faBeer} /></Link>
          <Link to="#calculator"><FontAwesomeIcon icon={faBalanceScaleRight} /></Link>
        </div>
      </Router>   
    )
}

export default Navbar

