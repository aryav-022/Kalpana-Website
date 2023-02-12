import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import {FaAngleDoubleDown} from 'react-icons/fa'
import logo from '../../Assets/Logo/kalpanacaps.png'
import heroImage from "../../Assets/Images/hero_image.png"
import { motion } from 'framer-motion';
import Card from '../Team/Card';
import eventsImage from "../../Assets/Images/events.svg";


export default function index({memberData}) {
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  // const variants = {
  //   initial  : {opacity:0},
  //   animate : {opacity:1, transition:{duration:2.5}}
  // }
  const leadArr = [18,20,13]
  return (
    <div className='home'>
      <div className='hero-container'>
        <motion.div 
        className='hero'
        >
          <div className='hero-content'>
            <div className='hero-header'>
              <img src={logo} alt="" />
              <div className='container'>
                <h1>Team Kalpana</h1>
                <p>Aeronautical Society of NSUT</p>
              </div>
            </div>
            <div className='hero-description'>
              <p>A society for passionate ,hard-working and like-minded individuals who are enthusiastic about space-related stuff.</p>
              <a href='#about'>Know More</a>
            </div>
          </div>
          <div className='hero-image'>
            <img src={heroImage} alt="..." />
          </div>
        </motion.div>
        <div className='down-move'>
          <a className='down-link' href="#down"><FaAngleDoubleDown className='icon-down'/></a>
        </div>
      </div>

      <div id='about' className='about'>
        <h1 className='about-title'>Who are we</h1>
        <div className='about-description'>
          <p>Team Kalpana is a group of passionate, hard-working individuals who once put their mind to something rest only after achieving it. Our main Goal is to represent our nation and College at various International and national events like UAS, Cansat and SSC. This society is mainly focused on building drones for competing in the above mentioned competitions.</p>
        </div>
      </div>

      <div className='team'>
        <h1 className='team-title'>The Team</h1>
        <div className='team_grid'>
          {memberData.data ?
            leadArr.map((i) => {
            const temp=memberData.data[i]
            return(
              <Card
                    key={i}
                    img={temp.photo}
                    por={temp.por}
                    name={temp.name}
                    linkedin={temp.linkedin}
                    insta={temp.insta}
                    git={temp.github}
                  />
            )
          }):null}
        </div>
        <Link id='team_link' to="/team"><button className='team_button'>Know More</button></Link>
      </div>

      <div className='events'>
        <h1 className='events-title'>Events</h1>
        <div className="events-container">
          <div className="events-backgorund"></div>
          <div className="events-left-container">
            <div className="event-title">No Current Event</div>
            <div className='events-description'>Keep visiting to stay updated!</div>
          </div>
          <div className="right-container">
            <img src={eventsImage} alt="" className='events-image'/>
          </div>
        </div>
        </div>
      <div id="down"></div>
    </div>
  )
}
