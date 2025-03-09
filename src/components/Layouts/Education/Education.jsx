import React from 'react'
import './education.css'
import { ItemEducation } from '../../UI/ItemEducation/ItemEducation'
export const Education = () => {
  return (
    <div>
        <div>
            <h2>Education</h2>
        </div>
        <div className='box-itemEducation'>
            <ul>
                <ItemEducation cla='li' titleE='Tecnico en programacin de software' age='2021-2022 Marcelino Champagnat' />
                <ItemEducation cla='li' titleE='Tecnico en programacin de software' age='2021-2022 Marcelino Champagnat' />
                <ItemEducation cla='li' titleE='Tecnico en programacin de software' age='2021-2022 Marcelino Champagnat' />
                <ItemEducation cla='li' titleE='Tecnico en programacin de software' age='2021-2022 Marcelino Champagnat' />
            </ul>
        </div>
    </div>
  )
}
