import React from 'react';
import './Popup.css'; 

const Popup = ({ project, onClose }) => {
  return (
          <div class="popup-overlay">
            <div class="popup-box">
              
              <button class="popup-close" onClick={onClose}>&times;</button>

              <h2 class="popup-title">Project Details</h2>

              <p class="popup-text">{project.description}</p>

              <a href={project.url} class="popup-btn" target="_blank" rel="noopener noreferrer">Visit Project</a>

            </div>
          </div>
  );
}

export default Popup