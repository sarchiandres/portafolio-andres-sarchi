import React from 'react';
import './Dowload.css';

export const Dowload = () => {
  return (
    <div className='DW'>
      <h1 className='h1D'>Mira mi currículum</h1>
      
      {/* Abre el PDF en una nueva pestaña */}
      <a href="/public/Documents/HojaDeVidaAndresSarchi.pdf" target="_blank" rel="noopener noreferrer">
        <button>Ver Currículum</button>
      </a>
    </div>
  );
};
