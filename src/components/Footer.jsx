import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/bd-logo.png";
import darkModeLogo from "../assets/bd-logo-dark.png";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={!darkMode ? logo : darkModeLogo} alt="BD News Logo" />
        </div>
        <p className="footer-text">
          BD News delivers essential stories, deep insights, and emerging trends
          across technology, business, science, politics, and more.
        </p>
        <p className="footer-text">Stay informed. Stay ahead.</p>
        <div className="footer-links">
          <a
            href="https://brycedebilzan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGlobe} /> Portfolio
          </a>
          <a
            href="https://github.com/bdebilzan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/bdebilzan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
        <p className="footer-rights">© 2025 BD News. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
