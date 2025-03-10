import React, { useState } from 'react';
import { NavHerader } from '../../UI/NavHerader/NavHerader';
import "./header.css";
import logo from '../../../assets/images/logomarca.jpeg';  


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo" />

            {/* Botón hamburguesa */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            <NavHerader classn={`nav ${menuOpen ? "open" : ""}`} navLink="navLink" />
        </header>
    );
};
