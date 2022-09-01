import React, { useEffect, useRef } from 'react';
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import {BsFillMenuButtonWideFill} from 'react-icons/bs';
import logo from '../../Assets/Logo/kalpanacaps.png';

export default function index() {
  
  const Checking = useRef(null);

  useEffect(() => {
    const uncheck = () => {
      Checking.current.checked = false;
  };
  })
  
  return (
    <div className={styles.navb}>
      <nav className={styles.navbar}>
         <div className={styles.logo} style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" style={{width:'100px'}} />
            <p className={styles.nav_title}>Team Kalpana</p>
         </div>
         <input ref={Checking} type="checkbox" id="click" className={styles.click} />
         <label for="click" className={styles.menu_btn}>
         {/* <i class="fas fa-bars"></i> */}
          <BsFillMenuButtonWideFill className={styles.fas}/>
         </label>
         <ul>
            <li><Link to="/" onClick={uncheck}>Home</Link></li>
            <li><Link to="/team" onClick={uncheck}>Team</Link></li>
            <li><Link to="/achievements" onClick={uncheck}>Achievements</Link></li>
            <li><Link to="/sponsors" onClick={uncheck}>Sponsors</Link></li>
            <li><Link to="/blogs" onClick={uncheck}>Blogs</Link></li>
         </ul>
      </nav>
    </div>
  )
}