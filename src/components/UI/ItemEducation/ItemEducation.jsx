import React from 'react'

export const ItemEducation = ({titleE,age,cla}) => {
  return (
    <li className={cla}><div>{titleE}</div><div>{age}</div></li>
  )
}
