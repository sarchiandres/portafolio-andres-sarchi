import React from 'react';
import { NavLink } from 'react-router-dom';

export const ItemNav = ({ lazzy, link = '',classLI }) => {
  // Si link es vacío, asigna un valor predeterminado
  const to = link ? `/${link}` : '/';
  
  return (
    <li >
      <NavLink className={classLI} to={to}>{lazzy}</NavLink>
    </li>
  );
};
