import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBeer,
  faHamburger,
  faBalanceScaleRight,
} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar(props){

  return (
    <div className ="navbar-mobile">
      <NavLink exact to="/" activeClassName = " active"><FontAwesomeIcon icon={faHome} /></NavLink>
      <NavLink to="/RecipeSearch" activeClassName = " active"><FontAwesomeIcon icon={faHamburger} /></NavLink>
      <NavLink to="/beer" activeClassName = " active"><FontAwesomeIcon icon={faBeer} /></NavLink>
      <NavLink to="/Calculator" activeClassName = " active"><FontAwesomeIcon icon={faBalanceScaleRight} /></NavLink>
    </div>
      )
}

export default Navbar

