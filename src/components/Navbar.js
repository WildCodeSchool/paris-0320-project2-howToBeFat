import React from 'react'
import './Navbar.css'

function Navbar(){
    return (
        <div class="navbar">
  <a href="#home"><img src='../icons-navbar/home.png.' alt='home'/></a>
  <a href="#recipes">Recipes</a>
  <a href="#beer">Beer</a>
  <a href="#calculator">Calculator</a>
        </div>
    )
}

export default Navbar

