import React from 'react'
import './Footer.css'
import Facebook from '../images/facebook.png'
import twitter from '../images/twitter.jpg'
import instagram from '../images/instagram.jpg'
import github from '../images/github.jpg'
import wcs from '../images/wcs.png'

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
            <h3 className="authors">Design by: Nico, Tada, Clem, Jerome, Helder</h3>
        </div>
    )
}

export default Footer