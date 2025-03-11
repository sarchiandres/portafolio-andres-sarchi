import React from 'react'
import './Dowload.css'

export const Dowload = () => {
  return (
    <div className='DW'>
      <h1 className='h1D'>Mira mi currículum</h1>
      
  
      <a href="/src/assets/Documents/HojaDeVidaAndresSarchi.pdf" download>
        <button>Descargar PDF</button>
      </a>

    </div>
  );
};
