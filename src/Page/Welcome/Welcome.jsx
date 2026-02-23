import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome-container">
      <div className="welcome-content">
        <h2 className="welcome-title">Welcome to Kabita Fashion</h2>
        <p className="welcome-subtitle">Where Tradition Meets Elegance</p>
        <div className="welcome-grid">
          <div className="welcome-card">
            <i className="fas fa-award"></i>
            <h3>Premium Quality</h3>
            <p>Handpicked fabrics with authentic craftsmanship</p>
          </div>
          <div className="welcome-card">
            <i className="fas fa-shipping-fast"></i>
            <h3>Free Shipping</h3>
            <p>On all orders above ₹1999 across India</p>
          </div>
          <div className="welcome-card">
            <i className="fas fa-undo"></i>
            <h3>Easy Returns</h3>
            <p>30-day return policy for all products</p>
          </div>
          <div className="welcome-card">
            <i className="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>Dedicated customer care team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;