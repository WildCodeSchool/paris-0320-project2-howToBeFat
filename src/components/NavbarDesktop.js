import React from 'react'
import './NavbarDesktop.css'
import {Link} from 'react-router-dom'

function NavbarDesktop (){
    return (
        <div className ="topnav">
          <div>
            <Link className ="active" to="/">Home</Link>
            <Link to="./components/RecipeSearch">Recipes</Link>
          </div>
          <div>
            <Link to="#beers">Beers</Link>
            <Link to="/Calculator">Tips</Link>
          </div>
      </div>
    )
}

export default NavbarDesktop