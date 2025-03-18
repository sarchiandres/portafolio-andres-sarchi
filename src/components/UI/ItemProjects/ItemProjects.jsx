
// ItemProjects.jsx
import React from 'react';
// import './ItemProjects.css';

export const ItemProjects = ({ img, linkProject, title, description }) => {
  return (
    <div className="project-card">
      <div className="project-image" style={{ backgroundImage: `url(${img})` }}>
        <div className="project-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={linkProject} target="_blank" rel="noopener noreferrer">
            <button className="project-button">Ir al proyecto</button>
          </a>
        </div>
      </div>
    </div>
  );
};