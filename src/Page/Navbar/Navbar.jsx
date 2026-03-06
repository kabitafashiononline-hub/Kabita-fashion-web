import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">

        <div className="nav-logo">
          <img src="./kabita.png" alt="Kabita Fashion" />
        </div>

        <div className="nav-social">

          <a href="https://www.instagram.com/kabitafashion_os?igsh=bnFlM3U0amk2emZn" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/share/1CGiqxnLp1/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>

          <a href="https://wa.me/+918420005363" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Nav;