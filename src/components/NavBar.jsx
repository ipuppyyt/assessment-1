import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Link } from '@mui/material';
import './navbar.css'

const NavBar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog App
          </Typography>
          <Button color="inherit" variant='contained'><Link className='linkstyle' to={"/"}>Home</Link></Button>&nbsp;&nbsp;
          <Button color="inherit" variant='contained'><Link className='linkstyle' to={"/addblogs"}>Add Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
