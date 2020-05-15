import React from 'react'
import './NavbarDesktop.css'
import {NavLink} from 'react-router-dom'

function NavbarDesktop (props){

    return (
      <div className ="topnav">
      
          <div>
            <NavLink activeClassName = " active" exact to="/" >Home</NavLink>
            <NavLink activeClassName = " active " to="/RecipeSearch">Recipes</NavLink>
          </div>
          <div>
            <NavLink activeClassName = " active " to="/SearchBeer" >Beers</NavLink>
            <NavLink activeClassName = " active " to="/Calculator">Calculator</NavLink>
          </div>
      </div>
    )
}

export default NavbarDesktop