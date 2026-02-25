import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome-container">
      <div className="welcome-content">
        <h2 className="welcome-title">Welcome to Kabita Fashion</h2>
        <p className="welcome-subtitle">
          Trusted Wholesale Saree Supplier • Direct from Barabazar, Kolkata
        </p>

        <div className="welcome-grid">
          <div className="welcome-card">
            <i className="fas fa-boxes"></i>
            <h3>Bulk Ready Stock</h3>
            <p>Thousands of sarees available for immediate dispatch</p>
          </div>

          <div className="welcome-card">
            <i className="fas fa-rupee-sign"></i>
            <h3>Best Wholesale Prices</h3>
            <p>Competitive rates with excellent profit margins for retailers</p>
          </div>

          <div className="welcome-card">
            <i className="fas fa-sync-alt"></i>
            <h3>Daily New Arrivals</h3>
            <p>100+ fresh designs added every week</p>
          </div>

          <div className="welcome-card">
            <i className="fas fa-truck"></i>
            <h3>Pan-India & Export Shipping</h3>
            <p>Fast & reliable logistics for bulk orders</p>
          </div>
        </div>

        <div className="welcome-cta">
          <p className="cta-text">
            Looking for the latest collections at wholesale rates?
          </p>
          <a
            href="https://wa.me/918420005363?text=Hello%20Kabita%20Fashion%2C%20please%20send%20latest%20wholesale%20catalogue%20and%20rates"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Get Latest Catalogue on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;