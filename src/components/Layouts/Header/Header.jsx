import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { NavHerader } from '../../UI/NavHerader/NavHerader';
import logo from '../../../assets/images/logomarca.jpeg'
import './Header.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const location = useLocation(); 
  // Detecta el cambio de ruta y cierra el menú
  useEffect(() => {
    setMenuOpen(false); 
  }, [location]); 

  return (
    <header>
      <img src={logo} alt="Logo" />
      <button 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <NavHerader classn={`nav ${menuOpen ? 'open' : ''}`} />
    </header>
  );
};
