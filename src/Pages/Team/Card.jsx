import React from 'react'
import styles from "./Team.module.css";

const card = (props) => {
  const img = require(`../../Assets/Images/img/${props.img}`);

  function stringToCssClassname(s)
  {
    var css = "";
    s.split(" ").forEach(element => { css += " "+styles[element] });
    return css;
  }

  return (
    <a className={styles.grid__item} href={props.href}>
        <div className={styles.box}>
            <div className={styles.box__shadow}></div>
            <img className={styles.box__img} src={img} alt=""/>
            <h3 className={`${styles.box__title} ${styles.box__title__straight} ${styles.box__title__bottom}`}><span className={styles.box__title_inner} data-hover={props.box_title}>{props.box_title}</span></h3>
            <h4 className={styles.box__text}><span className={styles.box__text_inner}>{props.box_text}</span></h4>
            {/* <div className={stringToCssClassname(props.box_deco_css)}>{props.box_deco}</div> */}
            {/* <p className="box__content">{props.box_tagline}</p> */}
        </div>
    </a>
  )
}

export default card