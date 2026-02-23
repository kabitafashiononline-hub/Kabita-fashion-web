import React, { useState, useEffect } from 'react';
import newArrivalsData from '../../data/newArrivals.json';
import './NewArrivals.css';

const NewArrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredArrivals, setFilteredArrivals] = useState([]);
  
  const { newArrivals, categories } = newArrivalsData;
  
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredArrivals(newArrivals);
    } else {
      const filtered = newArrivals.filter(
        item => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredArrivals(filtered);
    }
  }, [selectedCategory, newArrivals]);
  
  const formatPrice = (price) => {
    return price.replace('₹', '₹ ');
  };
  
  return (
    <div className="new-arrivals-container">
      {/* Header Section */}
      <div className="new-arrivals-header">
        <h1 className="main-title">New Arrivals</h1>
        <p className="subtitle">Discover our latest saree collection. Fresh styles added weekly!</p>
        
        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <i className="fas fa-bolt"></i>
            <span className="stat-count">{newArrivals.length}</span>
            <span className="stat-label">New Products</span>
          </div>
          <div className="stat-item">
            <i className="fas fa-tag"></i>
            <span className="stat-count">20-25%</span>
            <span className="stat-label">Discount</span>
          </div>
          <div className="stat-item">
            <i className="fas fa-truck"></i>
            <span className="stat-label">Free Shipping</span>
          </div>
          <div className="stat-item">
            <i className="fas fa-undo"></i>
            <span className="stat-label">Easy Returns</span>
          </div>
        </div>
      </div>
      
      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-container">
          <h2 className="filter-title">Filter by Category</h2>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <i className="fas fa-th-large"></i> All Items
            </button>
            
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.name.toLowerCase() ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name.toLowerCase())}
              >
                {category.name} <span className="item-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="products-grid-section">
        <div className="grid-header">
          <h2 className="grid-title">
            {selectedCategory === 'all' ? 'All New Arrivals' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            <span className="count-badge">{filteredArrivals.length} items</span>
          </h2>
          <div className="sort-options">
            <select className="sort-select">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Ratings</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
        
        {filteredArrivals.length === 0 ? (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No items found in this category</h3>
            <p>Try selecting a different category</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredArrivals.map(item => (
              <div key={item.id} className="product-card">
                {/* New Badge */}
                {item.isNew && (
                  <div className="new-badge">
                    <i className="fas fa-star"></i> NEW
                  </div>
                )}
                
                {/* Discount Badge */}
                <div className="discount-badge">
                  {item.discount}
                </div>
                
                {/* Product Image */}
                <div className="product-image-container">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <div className="image-overlay">
                    <button className="quick-view-btn">
                      <i className="fas fa-eye"></i> Quick View
                    </button>
                    <button className="wishlist-btn">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="product-info">
                  <span className="product-category">{item.category}</span>
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-description">{item.description}</p>
                  
                  <div className="color-info">
                    <span className="color-label">Color:</span>
                    <span className="color-value">{item.color}</span>
                  </div>
                  
                  <div className="rating-container">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`fas fa-star ${i < Math.floor(item.rating) ? 'filled' : ''}`}
                        ></i>
                      ))}
                    </div>
                    <span className="rating-value">{item.rating}</span>
                    <span className="reviews-count">({item.reviews} reviews)</span>
                  </div>
                  
                  <div className="price-container">
                    <span className="current-price">{formatPrice(item.price)}</span>
                    <span className="original-price">{formatPrice(item.originalPrice)}</span>
                  </div>
                  
                  <div className="product-actions">
                    <button className="add-to-cart-btn">
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button className="buy-now-btn">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <i className="fas fa-bell newsletter-icon"></i>
          <h2>Get Notified About New Arrivals!</h2>
          <p>Be the first to know about our latest collections and exclusive offers</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              Subscribe <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;