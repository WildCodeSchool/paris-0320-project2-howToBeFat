import React,{ useState } from 'react'
import './NavbarDesktop.css'
import {Link} from 'react-router-dom'

function NavbarDesktop (props){

  const [active,setActive] = useState("home")

    return (
      <div className ="topnav">
      
          <div>
            <Link className ={active === "home" ? "active" : ""} onClick={()=>setActive("home")} to="/" >Home</Link>
            <Link className ={active === "recipe" ? "active" : ""} onClick={()=>setActive("recipe")} to="/RecipeSearch">Recipes</Link>
          </div>
          <div>
            <Link className ={active === "beer" ? "active" : ""} onClick={()=>setActive("beer")} to="/BeerCard" >Beers</Link>
            <Link className ={active === "calculator" ? "active" : ""} onClick={()=>setActive("calculator")} to="/Calculator">Calculator</Link>
          </div>
      </div>
    )
}

export default NavbarDesktop