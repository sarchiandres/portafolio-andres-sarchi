
// ItemProjects.jsx
import React from 'react';
// import './ItemProjects.css';

export const ItemProjects = ({ img, linkProject, title }) => {
  return (
    <div className="project-card">
      <div className="project-image" style={{ backgroundImage: `url(${img})` }}>
        <div className="project-overlay">
          <h3>{title}</h3>
          <a href={linkProject} target="_blank" rel="noopener noreferrer">
            <button className="project-button">Ir al proyecto</button>
          </a>
        </div>
      </div>
    </div>
  );
};