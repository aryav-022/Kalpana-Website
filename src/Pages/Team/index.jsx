import React from 'react';
import "./Team.css";
import Card from './Card'
import Banner from '../Achievements/Banner';

import img1 from '../../Assets/img/1.jpg'
import img2 from '../../Assets/img/2.jpg'
import img3 from '../../Assets/img/3.jpg'
import img4 from '../../Assets/img/4.jpg'
import img5 from '../../Assets/img/5.jpg'
import img6 from '../../Assets/img/6.jpg'

export default function index() {
  return (
    <>
      <Banner/>
      <div className='content'>
          <div className='team-head'><h1 >TEAM LEADS</h1></div>
          <div className='grid'>
              <Card
                  href="#preview-1"
                  img={img2}
                  box_title="Vice Pres."
                  box_text="Vandit"
                  box_deco="&#10115;"
                  box_tagline=""

                  box_title_css="box__title"
                  box_text_css="box__text box__text--topcloser"
                  box_deco_css="box__deco "
                  box_text_inner_css="box__text-inner"

              />

              <Card
                href="#preview-2"
                img={img1}
                box_title="President"
                box_text="Alankriti"
                box_deco="&#10014;"
                box_tagline=""

                box_title_css="box__title box__title--straight box__title--bottom"
                box_text_css="box__text"
                box_deco_css="box__deco box__deco--top"
                box_text_inner_css="box__text-inner"
              />

              <Card
                  href="#preview-3"
                    img={img3}
                    box_title="Vice Pres."
                    box_text="Tushar"
                    box_deco="&#10032;"
                    box_tagline="Call it a hurricane or call it freedom, Frank"

                    box_title_css="box__title"
                    box_text_css="box__text"
                    box_deco_css="box__deco"
                    box_text_inner_css="box__text-inner"
              />
            </div>
      </div>

      <div className='content'>
            <div className='team-head'><h1 >UAS CHAPTER</h1></div>
            <div className='grid'>
                <Card
                    href="#preview-4"
                    img={img4}
                    box_title="V. Chair"
                    box_text="Udhay"
                    box_deco="&#10014;"
                    box_tagline="Sometimes we go surfing when it's stormy weather"

                    box_title_css="box__title"
                    box_text_css="box__text"
                    box_deco_css="box__deco"
                    box_text_inner_css="box__text-inner"
                />

                <Card
                    href="#preview-5"
                    img={img5}
                    box_title="Chairman"
                    box_text="Rohan"
                    box_deco="&#10115;"
                    box_tagline=""

                    box_title_css="box__title box__title--straight box__title--bottom"
                    box_text_css="box__text"
                    box_deco_css="box__deco box__deco--top"
                    box_text_inner_css="box__text-inner"

                />

                <Card
                    href="#preview-6"
                    img={img6}
                    box_title="V. Chair"
                    box_text="Dhruv"
                    box_deco="&#10032;"
                    box_tagline="Call it a hurricane or call it freedom, Frank"

                    box_title_css="box__title"
                    box_text_css="box__text box__text--topcloser"
                    box_deco_css="box__deco"
                    box_text_inner_css="box__text-inner"
                />
            </div>
      </div>
    </>
  )
}
