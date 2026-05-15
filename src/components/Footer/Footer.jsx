import React from "react";
import "./Footer.css";

const remove_hash_from_url = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  window.history.replaceState(null, "", window.location.pathname);
}
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Abhishek</h2>
          <p>Backend • Wordpress • Plugin • Frontend • React Developer</p>
        </div>

        <ul className="footer-links">
          <li><a href="#root" onClick={(e) => remove_hash_from_url(e,'root')}>Home</a></li>
          <li><a href="#project-section" onClick={(e) => remove_hash_from_url(e,'project-section')}>Projects</a></li>
          <li><a href="#skills-section" onClick={(e) => remove_hash_from_url(e,'skills-section')}>Skills</a></li>
          <li><a href="#experience" onClick={(e) => remove_hash_from_url(e,'experience')}>Experience</a></li>
          <li><a href="#contact" onClick={(e) => remove_hash_from_url(e,'contact')}>Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/AbhishekTewari" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/abhishek-tiwari-b09021169/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Abhishek. All Rights Reserved.</p>
      </div>
    </footer>
  );
}       

export default Footer;