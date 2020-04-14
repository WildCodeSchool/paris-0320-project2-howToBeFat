import React from 'react'
import './FooterMobile.css'
import Facebook from '../logo-link/facebook.png'
import twitter from '../logo-link/twitter.jpg'
import instagram from '../logo-link/instagram.jpg'
import github from '../logo-link/github.jpg'
import wcs from '../logo-link/wcs.png'

function Footer () {
    return(
        <div className="footer">
            <div className="logosLink">
                <ul>
                    <li><a href="https://fr-fr.facebook.com/WildCodeSchool/" target="blank"><img src={Facebook} alt="facebook link"></img></a></li>
                    <li><a href="https://twitter.com/WildCodeSchool?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={twitter} alt="twitter link"></img></a></li>
                    <li><a href="https://www.instagram.com/wildcodeschool/?hl=fr"><img src={instagram} alt="instagram link"></img></a></li>
                    <li><a href="https://github.com/WildCodeSchool"><img src={github} alt="github link"></img></a></li>
                    <li><a href="https://www.wildcodeschool.com/fr-FR"><img src={wcs} alt="wild code school link"></img></a></li>
                </ul>
            </div>
            <h3>Design by: Nico, Tada, Clem, Jerome, Helder</h3>
        </div>
    )
}

export default Footer