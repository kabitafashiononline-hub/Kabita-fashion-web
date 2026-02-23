import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src="./kabita.png"
            alt="Kabita Fashion"
            className="footer-logo"
          />
          <p className="footer-description">
            Bringing you the finest sarees since 2010. Tradition, quality, and elegance in every thread.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaPinterestP /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/collections">Collections</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> Mumbai, India</li>
            <li><FaPhoneAlt /> +91 9876543210</li>
            <li><FaEnvelope /> info@kabitafashion.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Kabita Fashion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
