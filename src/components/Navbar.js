import React from 'react'
import logo from '../assets/logo.png'
import {Nav, NavLink, Bars, NavMenu /*NavBtn,NavBtnLink*/} from './NavbarElements'
import '../styles/navbar.css'
// import { fadeIn } from 'react-animations'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" className="logo1"></img>  
                </NavLink>
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLink to= 'services' activeStyle>
                        Services
                    </NavLink>
                    <NavLink to= 'testimonials' activeStyle>
                        Temoignages
                    </NavLink>
                    <NavLink to= 'footer' activeStyle>
                        Contacts
                    </NavLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to='/signin'>
                        Sign In
                    </NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    )
}

export default Navbar
