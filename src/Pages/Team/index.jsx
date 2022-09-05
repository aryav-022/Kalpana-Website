import React from 'react';
import styles from "./Team.module.css"
import Card from './Card'
import Banner from '../Achievements/Banner'

import css_data from './css_data.json'
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

                  box_title_css={css_data[member.id].title_css}
                  box_text_css={css_data[member.id].text_css}
                  box_deco_css={css_data[member.id].deco_css}
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

                  box_title_css={css_data[member.id].title_css}
                  box_text_css={css_data[member.id].text_css}
                  box_deco_css={css_data[member.id].deco_css}
                  box_text_inner_css={styles.box__text_inner}
                />
              )
            })}   
            </div>
      </div>
    </>
  )
}
