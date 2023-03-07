import React from 'react'
import styles from './Team.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';

const card = (props) => {

  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <img className={styles.profile} src={props.img} alt=''/>
      </div>
        <h3 className={styles.member_name}>{props.name}</h3>
        <h2 className={styles.por}>{props.por}</h2>
        <div className={styles.socials}>
          <a href={props.linkedin}><FontAwesomeIcon className={styles.linkedin} icon={faLinkedin}/></a>
          <a href={props.insta}><FontAwesomeIcon className={styles.insta} icon={faInstagram}/></a>
          <a href={props.git}><FontAwesomeIcon className={styles.facebook} icon={faGithub}/></a>
        </div>
    </div>
  )
}

export default card