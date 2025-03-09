import React from 'react'
import { NavHerader } from '../../UI/NavHerader/NavHerader'
import "./header.css"
const logo = new URL('/src/assets/images/logomarca.jpeg', import.meta.url).href;

export const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo" />
        <NavHerader className="nav" />
    </header>
  );
};
