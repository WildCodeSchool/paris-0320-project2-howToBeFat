import React from 'react'
import './Navbar.css'
import home from '../home.png'
import recipe from '../recipe.png'
import beer from '../beer.png'
import balance from '../balance.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div class="navbar-mobile">
      <Link to='/'><img class="icons" src={home} alt='home' /></Link>
      <Link to='/Recipes'><img class="icons" src={recipe} alt='fork, knife and spoon' /></Link>
      <Link to='/Beers'><img class="icons" src={beer} alt='glass of beer' /></Link>
      <Link to='/Calculator'><img class="icons" src={balance} alt='weight balance' /></Link>
    </div>
  )
}

export default Navbar

