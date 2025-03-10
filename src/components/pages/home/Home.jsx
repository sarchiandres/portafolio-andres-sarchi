import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import "./Home.css"
import dinoImage from '../../../assets/images/dinoProgramer.png';
import { Skills } from '../skills/Skills';
import { Dowload } from '../../Layouts/DowloadCurriculum/Dowload';
import { Footer } from '../../Layouts/Footer/Footer';
export const Home = () => {
  return (
    <main>
    <section className='homeSection'>
    <div className='info'>
        <h1>Soy <span>Andres Felipe Sarchi,</span>  programador junior <span>Fullstack</span>

        </h1>
    </div>
     <div className='imgDino'>
        <img className='dino' src={dinoImage} alt='DinoProgramer'/>
     </div>

    </section>
    <Dowload/>
    <Footer/>
    </main>
  )
}
