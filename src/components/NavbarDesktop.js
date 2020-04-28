import React from 'react'
import './NavbarDesktop.css'
import {Link} from 'react-router-dom'

function NavbarDesktop (){
    return (
        <div className ="topnav">
          <div>
            <Link className ="active" path="./components/Accueil">Home</Link>
            <Link path="./components/RecipeSearch">Recipes</Link>
          </div>
          <div>
            <Link path="#beers">Beers</Link>
            <Link path="#calculator">Tips</Link>
          </div>
      </div>
    )
}

export default NavbarDesktop