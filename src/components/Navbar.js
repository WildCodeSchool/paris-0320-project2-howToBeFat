import React,{ useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBeer,
  faHamburger,
  faBalanceScaleRight,
} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(props){

  const [active,setActive] = useState("home")
  return (
    <div className ="navbar-mobile">
      <Link className ={active === "home" ? "active" : ""} onClick={()=>setActive("home")}><FontAwesomeIcon icon={faHome} /></Link>
      <Link to="/RecipeSearch" className ={active === "recipe" ? "active" : ""} onClick={()=>setActive("recipe")}><FontAwesomeIcon icon={faHamburger} /></Link>
      <Link to="/beer" className ={active === "beer" ? "active" : ""} onClick={()=>setActive("beer")}><FontAwesomeIcon icon={faBeer} /></Link>
      <Link to="/Calculator" className ={active === "calculator" ? "active" : ""} onClick={()=>setActive("calculator")}><FontAwesomeIcon icon={faBalanceScaleRight} /></Link>
    </div>
      )
}

export default Navbar

