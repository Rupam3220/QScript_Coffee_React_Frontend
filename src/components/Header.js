import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, } from '@mui/material'
import CoffeeIcon from '@mui/icons-material/Coffee';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import "../styles/Header.css"
import Logo from "../images/logo.svg"

const Header = () => {

    //App drawer small device useState
    const[mobileOpen, setMobileOpen] = useState(false)

    // Menu button click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    // Menu Drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography color={"black"} variant='h6' component="div" sx={{flexGrow: 1, my:2}}>
                {/* <CoffeeIcon/>
                QScript Coffee */}
                <img src={Logo} alt="logo" height={"70"} width="200" />
            </Typography>
            <Divider/>

            {/* Menu section for small device */}

            <ul className='mob-nav-menu'>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </Box>
    )

  return (
    <>
        {/* Navbar Box */}
        <Box>
            <AppBar component={"nav"} sx={{bgcolor: "#bcaaa4"}}>
                <Toolbar>
                    {/* App drawer icon for small screen */}
                    <IconButton color='black' aria-label='open drawer' edge='start' 
                    sx={{mr:2, display: {sm:'none'},}} onClick={handleDrawerToggle}>
                        <MenuIcon/>
                    </IconButton>
                    {/* Navbar Company name  */}
                    <Typography color={"black"} variant='h6' component="div" sx={{flexGrow: 1}}>
                        <CoffeeIcon/>
                        QScript Coffee
                        {/* <img src={Logo} alt="logo" height={"70"} width="200" /> */}
                    </Typography>

                    {/* Menu section start */}
                    <Box sx={{display: {xs:"none", sm:"block"}}}>
                        <ul className='nav-menu'>
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/menu'}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>
                        </ul>
                    </Box>
                    {/* Menu section end */}
                </Toolbar>
            </AppBar>
            {/* Mobile menu drawer open */}
            <Box component='nav'>
                <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} 
                sx={{display: { xs: "block", sm: "none" },"& .MuiDrawer-paper": {boxSizing: "border-box", width: "240px",},}}>
                    {drawer}
                </Drawer>
            </Box>
            <Box>
                <Toolbar/>
            </Box>
        </Box>
    </>
  )
}

export default Header