import React, { useState } from "react";
import "../Header/Header.css";
import { useTheme } from "../../ThemeContect";

const remove_hash_from_url = (e, id, closeMenu) => {
  e.preventDefault();

  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  window.history.replaceState(null, "", window.location.pathname);

  if (closeMenu) {
    closeMenu(false);
  }
};

const Navbar = () => {
  const { toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-brand">
        <div className="nav-avatar">AT</div>
        <span className="nav-name">Abhishek Tiwari</span>
      </div>

      {/* Desktop + Mobile Menu */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#root"
            onClick={(e) => remove_hash_from_url(e, "root", setMenuOpen)}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#skills-section"
            onClick={(e) =>
              remove_hash_from_url(e, "skills-section", setMenuOpen)
            }
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#experience"
            onClick={(e) =>
              remove_hash_from_url(e, "experience", setMenuOpen)
            }
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#project-section"
            onClick={(e) =>
              remove_hash_from_url(e, "project-section", setMenuOpen)
            }
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={(e) => remove_hash_from_url(e, "contact", setMenuOpen)}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <button className="btn-theme" onClick={toggleTheme}>
          ☀
        </button>

        <a
          href="https://github.com/AbhishekTewari"
          target="_blank"
          rel="noreferrer"
          className="btn-github"
        >
          GitHub
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;