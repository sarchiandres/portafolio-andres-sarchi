
import React, { useState, useEffect } from 'react';
import { ItemProjects } from '../../UI/ItemProjects/ItemProjects';
import lazzy  from '../../../assets/images/lazzy.png';
import paises from '../../../assets/images/paises.png'; 
import sarchphone from '../../../assets/images/sarchphone.png'
// Añade tus propias imágenes
import './Projects.css';

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      img: lazzy ,
      title: "Lazzy Letters",
      description: "Aplicaccion de entretenimiento sobre palabras ingresadas spbre una letra ",
      linkProject: "https://lazzy-letters.vercel.app/"
    },
    {
      img: paises ,
      title: "Paises",
      description: "Un proyecto sobre los paises de latino america",
      linkProject: "countries-six-eta.vercel.app"
    },
    {
      img: sarchphone ,
      title: "SarchPhone",
      description: "Un marketplace sobre iphones ",
      linkProject: "https://marketpplace.vercel.app/"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Auto-avance cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Mis Proyectos</h2>
      
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &lt;
        </button>
        
        <div className="carousel-content">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <ItemProjects
                img={project.img}
                title={project.title}
                description={project.description}
                linkProject={project.linkProject}
              />
            </div>
          ))}
        </div>
        
        <button className="carousel-button next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};