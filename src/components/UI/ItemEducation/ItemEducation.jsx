import React from 'react'

export const ItemEducation = ({titleE,age,cla,tittleH}) => {
  return (
    <li className={cla}><div className={tittleH}>{titleE} </div><div>{age}</div></li>
  )
}
