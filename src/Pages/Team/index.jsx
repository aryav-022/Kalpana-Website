import React from 'react';
import styles from "./Team.module.css";
import Card from './Card'
import Banner from '../Achievements/Banner';
import Members_Lead from './Members-Lead.json'
import Members_UAS from './Members_UAS.json'

export default function index() {
  return (
    <>
      <Banner/>
      <div className={styles.content}>
          <div className={styles.team_head}><h1 >TEAM LEADS</h1></div>
          <div className={styles.grid}>
            {Members_Lead.map(member => {
              return(
                <Card
                  key={member.id}
                  href={member.href}
                  img={member.img}
                  box_title={member.por}
                  box_text={member.name}
                  box_deco={member.box_deco}
                  box_tagline={member.box_tagline}

                  box_title_css={`${styles.box__title} ${styles.box__title__straight} ${styles.box__title__bottom}`}
                  box_text_css={`${styles.box__text} ${styles.box__text__topcloser}`}
                  box_deco_css={`${styles.box__deco} ${styles.box__deco__top}`}
                  box_text_inner_css={styles.box__text_inner}
                />
              )
            })}
            </div>
      </div>

      <div className={styles.content}>
          <div className={styles.team_head}><h1 >TEAM LEADS</h1></div>
            <div className={styles.grid}>
            {Members_UAS.map(member => {
              return(
                <Card
                  key={member.id}
                  href={member.href}
                  img={member.img}
                  box_title={member.por}
                  box_text={member.name}
                  box_deco={member.box_deco}
                  box_tagline={member.box_tagline}

                  box_title_css={`${styles.box__title} ${styles.box__title__straight} ${styles.box__title__bottom}`}
                  box_text_css={`${styles.box__text} ${styles.box__text__topcloser}`}
                  box_deco_css={`${styles.box__deco} ${styles.box__deco__top}`}
                  box_text_inner_css={styles.box__text_inner}
                />
              )
            })}   
            </div>
      </div>
    </>
  )
}
