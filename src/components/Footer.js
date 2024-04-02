import { Box, Typography } from '@mui/material'
import React from 'react'

// Social midea icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center', bgcolor:'#bcaaa4', color:'black', p:3}}>
        {/* Social Midea icons */}
        <Box sx={{my: 3, "& svg": {fontSize: "60px", cursor: "pointer", mr: 2,}, "& svg:hover": {color: "white", transform: "translateX(5px)", transition: "all 400ms",}, }}>
          <FacebookIcon/>
          <InstagramIcon/>
          <LinkedInIcon/>
        </Box>
        <Typography variant='h5' sx={{"@media (max-width:600px)": {fontSize: "1rem",},}}>
          All Rights Reserved &copy; QScript Coffee
        </Typography>
      </Box>
    </>
  )
}

export default Footer