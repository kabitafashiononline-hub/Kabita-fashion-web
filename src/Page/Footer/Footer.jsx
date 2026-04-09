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
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer-content">

        <div className="footer-section brand-section">
          <img
            src="./kabita.png"
            alt="Kabita Fashion"
            className="footer-logo"
          />

          <p className="footer-description">
            Premium wholesale sarees from Burrabazar, Kolkata.
            Tradition, quality, and best margins for retailers since 2010.
          </p>

          <div className="footer-social">

            <a href="https://www.facebook.com/share/1CGiqxnLp1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/kabitafashion_os?igsh=bnFlM3U0amk2emZn" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://wa.me/918420005363" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>
        </div>


        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/collections">Collections</Link>
            </li>

            <li>
              <Link to="/about-us">About Us</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

        </div>


        <div className="footer-section">

          <h3>Contact Info</h3>

          <ul className="footer-contact">

            <li>
              <FaMapMarkerAlt />
              44A, Kali Krishna Tagore Street,1st Floor,Kolkata - 700007,West Bengal,India.
              Landmark - Near MalaPara More
            </li>


            <li className="footer-phone-item">
              <FaPhoneAlt />

              <div className="footer-phone">

                <span>
                  Retail Customers : +91 8420005363
                </span>

                <span>
                  Wholesale Customers : +91 8981223025/ +91 9433843097
                </span>

              </div>

            </li>


            <li>
              <FaEnvelope />
              kabitafashion.online@gmail.com
            </li>

          </ul>

        </div>


        <div className="footer-section map-section">

          <h3>Find Us</h3>

          <div className="footer-map">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5115645434707!2d88.35168447507817!3d22.587254279481293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c2fd9431ed%3A0xb83043d96a2e2876!2sKabita%20Fashion!5e1!3m2!1sen!2sin!4v1772809386502!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              title="Kabita Fashion Location"
            ></iframe>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Kabita Fashion. All rights reserved.
          | Wholesale Sarees from Kolkata
        </p>

      </div>

    </footer>
  );
};

export default Footer;