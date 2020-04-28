import React from 'react'
import logo2 from './images/onlyCat.png'
import NavbarDesktop from './NavbarDesktop'
import './Header.css'
import {Link} from 'react-router-dom'


class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/" className='textHead'>
                    <div className="siteName">HowToBeFat</div>
                    <div className="slogan">Eat, keep home and pet your cat !</div>
                </Link>
                <NavbarDesktop />
                <img className='logo' src={logo2} alt='Logo' />
            </header>
        )
    }
}

export default Header