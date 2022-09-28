import React from 'react'
import styles from './Team.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

const card = (props) => {
  const img = require(`../../Assets/Images/img/${props.img}`);

  // function stringToCssClassname(s)
  // {
  //   var css = "";
  //   s.split(" ").forEach(element => { css += " "+styles[element] });
  //   return css;
  // }

  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <img className={styles.profile} src='https://i.imgur.com/KykRUCV.jpeg' alt=''/>
      </div>
        
        <h3 className={styles.member_name}>James Carson</h3>
        <h2 className={styles.por}>President</h2>
        <div className={styles.socials}>
          <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin}/>
          <FontAwesomeIcon className={styles.insta} icon={faInstagram}/>
          <FontAwesomeIcon className={styles.facebook} icon={faFacebook}/>
          <FontAwesomeIcon className={styles.twitter} icon={faTwitter}/>
        </div>
    </div>
  )
}

export default card