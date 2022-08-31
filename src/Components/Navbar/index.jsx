import React from 'react';
import "./Navbar.css";
import {BsFillMenuButtonWideFill} from 'react-icons/bs';
import logo from '../../Assets/Logo/kalpanacaps.png';

export default function index() {
  return (
    // <div>
    //   Navbar
    // </div>
    <div class="navb">
      <nav>
         <div class="logo" style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" style={{width:'100px'}} />
            <p class="nav-title">Team Kalpana</p>
         </div>
         <input type="checkbox" id="click" />
         <label for="click" class="menu-btn">
         {/* <i class="fas fa-bars"></i> */}
         <BsFillMenuButtonWideFill class="fas fa-bars"/>
         </label>
         <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Achievements</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Blogs</a></li>
         </ul>
      </nav>
    </div>
  )
}
