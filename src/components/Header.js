import React from 'react'
import logo2 from './images/onlyCat.png'
import NavbarDesktop from './NavbarDesktop'
import './Header.css'


class Header extends React.Component {
    render() {
        return (
            <header>
                <a href="../App.js" className='textHead'>
                    <div className="siteName">HowToBeFat</div>
                    <div className="slogan">Eat, keep home and pet your cat !</div>
                </a>
                <NavbarDesktop />
                <img className='logo' src={logo2} alt='Logo' />
            </header>
        )
    }
}

export default Header