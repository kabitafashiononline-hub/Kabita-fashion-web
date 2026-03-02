import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand & Description */}
        <div className="footer-section brand-section">
          <img
            src="./kabita.png"  // replace with your actual logo path
            alt="Kabita Fashion"
            className="footer-logo"
          />
          <p className="footer-description">
            Premium wholesale sarees from Barabazar, Kolkata. 
            Tradition, quality, and best margins for retailers since 2010.
          </p>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/918420005363" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> 44A, Kali Krishna Tagore Street, Barabazar, Kolkata - 700007, West Bengal, India</li>
            <li><FaPhoneAlt /> +91 84200 05363</li>
            <li><FaEnvelope /> wholesale@kabitafashion.com</li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="footer-section map-section">
          <h3>Find Us</h3>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789012!2d88.36312345678901!3d22.57912345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275d5b5b5b5b5%3A0x1234567890abcdef!2sKali%20Krishna%20Tagore%20Street%2C%20Barabazar%2C%20Kolkata%2C%20West%20Bengal%20700007!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kabita Fashion Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Kabita Fashion. All rights reserved. | Wholesale Sarees from Kolkata</p>
      </div>
    </footer>
  );
};

export default Footer;