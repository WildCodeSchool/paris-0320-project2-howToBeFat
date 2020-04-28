import React from 'react'
import './NavbarDesktop.css'
import {Link} from 'react-router-dom'

function NavbarDesktop() {
  return (
    <div class="topnav">
      <Link to="/acceuil">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/beers">Beers</Link>
      <Link to="/calculator">Tips</Link>
    </div>
  )
}

export default NavbarDesktop