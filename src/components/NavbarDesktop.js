import React from 'react'
import './NavbarDesktop.css'

function NavbarDesktop (){
    return (
        <div class="topnav">
          <div>
            <a class="active" href="#home">Home</a>
            <a href="#recipes">Recipes</a>
          </div>
          <div>
            <a href="#beers">Beers</a>
            <a href="#calculator">Tips</a>
          </div>
      </div>
    )
}

export default NavbarDesktop