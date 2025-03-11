import React from 'react'
import './Dowload.css'

export const Dowload = () => {
  return (
    <div className='DW'>
      <h1 className='h1D'>Mira mi currículum</h1>
      
      <a href={`${import.meta.env.BASE_URL}assets/documents/hojaDeVidaAndresSarchi.pdf`} download>
  <button>Descargar PDF</button>
</a>


    </div>
  );
};
