import React from 'react'
import { CardSkill } from '../../UI/cardSkill/CardSkill'
import reactlog from '../../../assets/images/reactlog.png'
import java from '../../../assets/images/javalog.png'
import c from '../../../assets/images/Csharp_Logo.png'
import sql from '../../../assets/images/sqllog.png'
import './Skills.css'
export const Skills = () => {
  return (
    <section>
            <div className='box-toolin-big'>
            <div className='title-skill'>
                <h2>Habilidades</h2>
            </div>
           
            <div className='box-toolin'>
                    <CardSkill src= {reactlog}  nameImg='React' />
                    <CardSkill src= {java}  nameImg='Java' />
                    <CardSkill src= {c}  nameImg='C#'/>
                    <CardSkill src= {sql}  nameImg='sql' />
                </div>
            </div>

    </section>
  )
}
