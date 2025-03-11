import React from 'react'
import './CardSkill.css'
export const CardSkill = ({src,nameImg,children}) => {
  return (
    <div className='box-skill'>
        <div className='box-img'>
            <img  className='img-skil' src={src} alt= {nameImg}/>
        </div>
      {children}
    </div>
  )
}
