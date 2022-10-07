import React from 'react'
import logo from '../assets/logo.png'
import { Nav, NavLink, Bars, NavMenu /*NavBtn,NavBtnLink*/ } from './NavbarElements'
import '../styles/navbar.css'
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" className="logo1"></img>
                </NavLink>
                <Bars onClick={toggle} />
                <NavMenu>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-search" label="Search field" type="search" color="primary" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}/>
                    </Box>
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
