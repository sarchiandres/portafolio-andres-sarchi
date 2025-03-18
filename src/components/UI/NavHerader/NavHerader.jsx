import React from 'react';
import { ItemNav } from '../ItemNav/ItemNav';
import './Nav.css';


export const NavHerader = ({ classn = 'nav', navLink = 'navLink' }) => {
  return (
    <nav className={classn}>
      <ul className={navLink}>
      <ItemNav classLI="linkItem" lazzy="Inicio" />
      <ItemNav classLI="linkItem" link='Skills' lazzy="Habilidades " />
      <ItemNav classLI="linkItem" link='Projects' lazzy=" Proyectos " />
      </ul>
    </nav>
  );
};
