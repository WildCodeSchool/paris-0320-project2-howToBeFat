import React from 'react'
import './NavbarDesktop.css'
import {Link} from 'react-router-dom'

function NavbarDesktop (){
    return (
        <div className ="topnav">
          <div>
            <Link className ="active" to="/">Home</Link>
            <Link to="/RecipeSearch">Recipes</Link>
          </div>
          <div>
            <Link to="/BeerCard">Beers</Link>
            <Link to="/calculator">Tips</Link>
          </div>
      </div>
    )
}

export default NavbarDesktop