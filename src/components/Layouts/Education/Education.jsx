import React, { Children } from 'react'
import './education.css'
import { ItemEducation } from '../../UI/ItemEducation/ItemEducation'
export const Education = ({estudy,children,title_E = 'tittle-education', box_education= 'box-education'}) => {
  return (
    <div className={box_education}>
        <div>
            <h2 className={title_E}>Educacion</h2>
            <h3>{estudy}</h3>
        </div>
        <div className='box-itemEducation'>
            <ul>
               {children}
            </ul>
        </div>
    </div>
  )
}
