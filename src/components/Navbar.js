import React from 'react'
import logo from '../assets/logo.png'
import { Nav, NavLink, Bars, NavMenu /*NavBtn,NavBtnLink*/ } from './NavbarElements'
import '../styles/navbar.css'
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" className="logo1"></img>
                </NavLink>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink to='services' activeStyle>
                        <FaShoppingCart /> Cart
                    </NavLink>
                    <NavLink to='footer' activeStyle>
                        <FaUserCircle /> User
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}
export default Navbar
