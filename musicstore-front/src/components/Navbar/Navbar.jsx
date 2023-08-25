import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import {links} from '../../data'
import {FaBars, FaMusic} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {FiShoppingCart} from 'react-icons/fi'
import { useState } from 'react'


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="logo">
                    SoundHouse <FaMusic className='img-logo'/>
                </Link>
                <ul className={click ? "nav__links active": "nav__links"}>
                    {
                        links.map(({name,path}, index) =>{
                            return (
                                <li>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        }
                        )
                    }
                    <Link className = "shop" to = "/cart">
                        <FiShoppingCart size={25}/>
                    </Link>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    {click ? <ImCross /> : <FaBars />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar