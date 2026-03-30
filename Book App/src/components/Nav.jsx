import React from 'react'
import './nav.css'
function Nav() {
  return (
   <div >
    <nav class="navbar">
    <div class="logo">MyWebsite</div>
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
    </div>
  )
}

export default Nav
