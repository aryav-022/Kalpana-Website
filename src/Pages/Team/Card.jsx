import React from 'react'

const card = (props) => {
  return (
    <a className="grid__item" href={props.href}>
        <div className="box">
            <div className="box__shadow"></div>
            <img className="box__img" src={props.img} alt=""/>
            <h3 className={props.box_title_css}><span className="box__title-inner" data-hover={props.box_title}>{props.box_title}</span></h3>
            <h4 className={props.box_text_css}><span className={props.box_text_inner_css}>{props.box_text}</span></h4>
            <div className={props.box_deco_css}>{props.box_deco}</div>
            {/* <p className="box__content">{props.box_tagline}</p> */}
        </div>
    </a>
  )
}

export default card