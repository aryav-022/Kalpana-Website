import React from 'react';
import styles from "./Team.module.css";
import Card from './Card'
import Banner from '../Achievements/Banner';
import Members from './Members-Lead.json'

import img1 from '../../Assets/Images/img/1.jpg'
import img2 from '../../Assets/Images/img/2.jpg'
import img3 from '../../Assets/Images/img/3.jpg'
import img4 from '../../Assets/Images/img/4.jpg'
import img5 from '../../Assets/Images/img/5.jpg'
import img6 from '../../Assets/Images/img/6.jpg'

export default function index() {
  return (
    <>
      <Banner/>
      <div className={styles.content}>
          <div className={styles.team_head}><h1 >TEAM LEADS</h1></div>
          <div className={styles.grid}>
            {Members.map(member => {
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
                  box_text_css={`${styles.box__text} ${styles.box__text__closer}`}
                  box_deco_css={styles.box__deco}
                  box_text_inner_css={styles.box__text_inner}
                />
              )
            })}

              {/* <Card
                  href="#preview-1"
                  img={img2}
                  box_title="Vice Pres."
                  box_text="Vandit"
                  box_deco="&#10115;"
                  box_tagline=""

                  box_title_css={styles.box__title}
                  box_text_css={`${styles.box__text} ${styles.box__text__closer}`}
                  box_deco_css={styles.box__deco}
                  box_text_inner_css={styles.box__text_inner}

              />

              <Card
                href="#preview-2"
                img={img1}
                box_title="President"
                box_text="Alankriti"
                box_deco="&#10014;"
                box_tagline=""

                box_title_css={`${styles.box__title} ${styles.box__title__straight} ${styles.box__title__bottom}`}
                box_text_css={styles.box__text}
                box_deco_css={`${styles.box__deco} ${styles.box__deco__top}`}
                box_text_inner_css={styles.box__text_inner}
              />

              <Card
                  href="#preview-3"
                  img={img3}
                  box_title="Vice Pres."
                  box_text="Tushar"
                  box_deco="&#10032;"
                  box_tagline="Call it a hurricane or call it freedom, Frank"

                  box_title_css={styles.box__title}
                  box_text_css={styles.box__text}
                  box_deco_css={styles.box__deco}
                  box_text_inner_css={styles.box__text_inner}
              /> */}
            </div>
      </div>

      {/* <div className={styles.content}>
          <div className={styles.team_head}><h1 >TEAM LEADS</h1></div>
          <div className={styles.grid}>
                <Card
                    href="#preview-4"
                    img={img4}
                    box_title="V. Chair"
                    box_text="Udhay"
                    box_deco="&#10014;"
                    box_tagline="Sometimes we go surfing when it's stormy weather"

                    box_title_css={styles.box__title}
                    box_text_css={styles.box__text}
                    box_deco_css={styles.box__deco}
                    box_text_inner_css={styles.box__text_inner}
                />

                <Card
                    href="#preview-5"
                    img={img5}
                    box_title="Chairman"
                    box_text="Rohan"
                    box_deco="&#10115;"
                    box_tagline=""

                    box_title_css={`${styles.box__title} ${styles.box__title__straight} ${styles.box__title__bottom}`}
                    box_text_css={styles.box__text}
                    box_deco_css={`${styles.box__deco} ${styles.box__deco__top}`}
                    box_text_inner_css={styles.box__text_inner}

                />

                <Card
                    href="#preview-6"
                    img={img6}
                    box_title="V. Chair"
                    box_text="Dhruv"
                    box_deco="&#10032;"
                    box_tagline="Call it a hurricane or call it freedom, Frank"

                    box_title_css={styles.box__title}
                    box_text_css={`${styles.box__text} ${styles.box__text__topcloser}`}
                    box_deco_css={styles.box__deco}
                    box_text_inner_css={styles.box__text_inner}
                />
            </div>
      </div> */}
    </>
  )
}
