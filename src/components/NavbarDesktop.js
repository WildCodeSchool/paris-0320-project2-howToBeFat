import React from 'react'
import './NavbarDesktop.css'
import { Link } from 'react-router-dom'

function NavbarDesktop (){
    return (
        <div className ="topnav">
          <div>
            <a className ="active" href="#home">Home</a>
            <a href="#recipes">Recipes</a>
          </div>
          <div>
            <Link to="/SearchBeer">Beers</Link>
            {/* <a href="#beers">Beers</a> */}
            <a href="#calculator">Tips</a>
          </div>
      </div>
    )
}

export default NavbarDesktop