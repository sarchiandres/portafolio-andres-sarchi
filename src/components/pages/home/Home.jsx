import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import "./Home.css"
import sarchiEmoji from '../../../assets/images/programador.png';

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
        <img className='sarchiEmoji' src={sarchiEmoji} alt='DinoProgramer'/>
     </div>

    </section>
    <Dowload/>
    
    <Footer/>
    </main>
  )
}
