import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class="nav">
        <h6 class="navtext">Blog App</h6>
        <div class="navbuttongrp">
        <Link to={"/"}><button class="navbutton">Dashboard</button></Link>&nbsp;&nbsp;
        <Link to={"/addblogs"}><button class="navbutton">Upload Blogs</button></Link>&nbsp;&nbsp;
        </div>
    </div>
  )
}

export default NavBar
