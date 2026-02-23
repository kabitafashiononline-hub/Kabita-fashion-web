import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Featured.css';

const Featured = () => {
  const navigate = useNavigate();
  const sarees = [
    { id: 1, name: 'Silk Banarasi', price: '₹4,999', image: 'https://images.unsplash.com/photo-1568121293041-d6fe4dcec8b4?w=400', category: 'Traditional' },
    { id: 2, name: 'Georgette Floral', price: '₹2,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', category: 'Party Wear' },
    { id: 3, name: 'Cotton Printed', price: '₹1,799', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400', category: 'Daily Wear' },
    { id: 4, name: 'Designer Saree', price: '₹6,999', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400', category: 'Designer' },
  ];

  return (
    <section className="featured-container">
      <div className="featured-header">
        <h2 className="featured-title">Featured Sarees</h2>
        <p className="featured-subtitle">Our handpicked collection for you</p>
      </div>
      <div className="featured-grid">
        {sarees.map((saree) => (
          <div key={saree.id} className="featured-card">
            <img src={saree.image} alt={saree.name} className="saree-image" />
            <div className="saree-info">
              <span className="saree-category">{saree.category}</span>
              <h3 className="saree-name">{saree.name}</h3>
              <p className="saree-price">{saree.price}</p>
              <button className="add-to-cart-btn">
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="explore-all-btn" onClick={() => navigate('/shop')}>
        Explore All Collections <i className="fas fa-arrow-right"></i>
      </button>
    </section>
  );
};

export default Featured;