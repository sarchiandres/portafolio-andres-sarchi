import React from 'react'
import './Dowload.css'

export const Dowload = () => {
  return (
    <div className='DW'>
      <h1 className='h1D'>Mira mi currículum</h1>
      <a className='pdfC' href="/assets/documets/hoja de vida Andres sarchi.pdf" download="hoja de vida Andres sarchi.pdf">
        <button>Descargar PDF</button>
      </a>
    </div>
  )
}
