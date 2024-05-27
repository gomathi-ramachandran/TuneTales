import React from "react";
import Logo from "../img/logo.png";
import TwitterIcon from "../img/twitter-icon.png";
import LinkedinIcon from "../img/linkedin-icon.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img className="footer-logo" src={Logo} alt="Logo" />
        <span>
          Made with ♥️ towards web development.
        </span>
        <div className="social-links">
          <a href="https://twitter.com/Gomathi_07" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" /> Twitter
          </a>
          <a href="https://www.linkedin.com/in/gomathi-ramachandran-srg/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" /> LinkedIn
          </a>
        </div>
        <div className="contact-info">
          <p>Contact us at: <a href="mailto:gomathiramachandran07@gmail.com">info@example.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;