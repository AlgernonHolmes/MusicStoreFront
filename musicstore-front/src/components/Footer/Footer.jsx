import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FaTwitterSquare, FaMusic} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3><Link to="/" className="logo">SoundHouse <FaMusic/></Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="links">
                <li><AiFillInstagram/></li>
                <li><BsFacebook/></li>
                <li><FaTwitterSquare/></li>
            </ul>
            </div>
            <div className="background">
                <p>copyright &copy;2023. designed by <span></span>AlgernonHolmes</p>
                <ul className="links-mob">
                    <li><AiFillInstagram/></li>
                    <li><BsFacebook/></li>
                    <li><FaTwitterSquare/></li>
            </ul>
            </div>
        </footer>
    )
}


export default Footer