import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import "./Home.css"
import dinoImage from '../../../assets/images/dinoProgramer.png';
export const Home = () => {
  return (
    <main>
    <section className='homeSection'>
    <div className='info'>
        <h1>Soy <span>Andres Felipe sarchi,</span> me considero un  programador junior <span>Fullstack</span>

        </h1>
    </div>
     <div className='imgDino'>
        <img className='dino' src={dinoImage} alt='DinoProgramer'/>
     </div>

    </section>
    </main>
  )
}
