import React from 'react'
import { CardSkill } from '../../UI/cardSkill/CardSkill'
import reactlog from '../../../assets/images/reactlog.png'
import java from '../../../assets/images/javalog.png'
import c from '../../../assets/images/Csharp_Logo.png'
import sql from '../../../assets/images/sqllog.png'
import git from '../../../assets/images/github.png'
import mongo from '../../../assets/images/mongo.png'
import types from '../../../assets/images/typescript.png'
import js from '../../../assets/images/jslog.webp'
import './Cards.css'
export const Cards = () => {
  return (
     <div className='box-toolin-big'>
                    <div className='title-skill'>
                        <h2>Tecnologias</h2>
                    </div>
               
                    <div className='box-toolin'>
                            <CardSkill src= {reactlog}  nameImg='React' />
                            <CardSkill src= {java}  nameImg='Java' />
                            <CardSkill src= {c}  nameImg='C#'/>
                            <CardSkill src= {sql}  nameImg='sql' />
                            <CardSkill src= {git}  nameImg='sql' />
                            <CardSkill src= {mongo}  nameImg='sql' />
                            <CardSkill src= {types}  nameImg='sql' />
                            <CardSkill src= {js}  nameImg='js' />
                        </div>
                </div>
    
  )
}
