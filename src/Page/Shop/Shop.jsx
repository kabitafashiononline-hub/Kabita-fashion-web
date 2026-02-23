import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [filter, setFilter] = useState('all');
  
  const sareeCollections = [
    {
      id: 1,
      name: 'Silk Banarasi',
      price: '₹4,999 - ₹14,999',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      category: 'traditional',
      description: 'Pure silk with intricate zari work'
    },
    {
      id: 2,
      name: 'Georgette Floral',
      price: '₹2,999 - ₹5,999',
      image: 'https://images.unsplash.com/photo-1568121293041-d6fe4dcec8b4?w=400',
      category: 'party',
      description: 'Lightweight with beautiful floral prints'
    },
    {
      id: 3,
      name: 'Cotton Printed',
      price: '₹1,799 - ₹3,999',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
      category: 'casual',
      description: 'Comfortable daily wear sarees'
    },
    {
      id: 4,
      name: 'Designer Saree',
      price: '₹6,999 - ₹24,999',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
      category: 'designer',
      description: 'Exclusive designer collection'
    },
    {
      id: 5,
      name: 'Kanjivaram Silk',
      price: '₹8,999 - ₹19,999',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      category: 'traditional',
      description: 'South Indian temple sarees'
    },
    {
      id: 6,
      name: 'Chiffon Evening',
      price: '₹3,499 - ₹7,999',
      image: 'https://images.unsplash.com/photo-1527613505591-6f7f7ecb8d1d?w=400',
      category: 'party',
      description: 'Elegant evening wear'
    },
    {
      id: 7,
      name: 'Linen Saree',
      price: '₹2,499 - ₹4,999',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      category: 'casual',
      description: 'Breathable and comfortable'
    },
    {
      id: 8,
      name: 'Bridal Collection',
      price: '₹15,999 - ₹49,999',
      image: 'https://images.unsplash.com/photo-1572804013427-4d7d726d32c1?w=400',
      category: 'bridal',
      description: 'Premium bridal sarees'
    },
    {
      id: 9,
      name: 'Net Saree',
      price: '₹4,999 - ₹9,999',
      image: 'https://images.unsplash.com/photo-1527613505591-6f7f7ecb8d1d?w=400',
      category: 'party',
      description: 'Stylish net sarees'
    },
    {
      id: 10,
      name: 'Tussar Silk',
      price: '₹5,999 - ₹12,999',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      category: 'traditional',
      description: 'Wild silk with natural texture'
    },
    {
      id: 11,
      name: 'Printed Chanderi',
      price: '₹3,999 - ₹7,999',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
      category: 'casual',
      description: 'Lightweight with beautiful prints'
    },
    {
      id: 12,
      name: 'Embroidered Saree',
      price: '₹7,999 - ₹16,999',
      image: 'https://images.unsplash.com/photo-1572804013427-4d7d726d32c1?w=400',
      category: 'designer',
      description: 'Hand-embroidered sarees'
    }
  ];

  const filteredSarees = filter === 'all' 
    ? sareeCollections 
    : sareeCollections.filter(saree => saree.category === filter);

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Our Saree Collection</h1>
        <p>Discover our wide range of traditional and modern sarees</p>
      </div>
      
      <div className="shop-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Collections
        </button>
        <button 
          className={`filter-btn ${filter === 'traditional' ? 'active' : ''}`}
          onClick={() => setFilter('traditional')}
        >
          Traditional
        </button>
        <button 
          className={`filter-btn ${filter === 'party' ? 'active' : ''}`}
          onClick={() => setFilter('party')}
        >
          Party Wear
        </button>
        <button 
          className={`filter-btn ${filter === 'casual' ? 'active' : ''}`}
          onClick={() => setFilter('casual')}
        >
          Casual Wear
        </button>
        <button 
          className={`filter-btn ${filter === 'designer' ? 'active' : ''}`}
          onClick={() => setFilter('designer')}
        >
          Designer
        </button>
        <button 
          className={`filter-btn ${filter === 'bridal' ? 'active' : ''}`}
          onClick={() => setFilter('bridal')}
        >
          Bridal
        </button>
      </div>
      
      <div className="collections-grid">
        {filteredSarees.map((saree) => (
          <div key={saree.id} className="collection-card">
            <div className="collection-image-container">
              <img src={saree.image} alt={saree.name} className="collection-image" />
              <div className="collection-overlay">
                <button className="quick-view-btn">
                  <i className="fas fa-eye"></i> Quick View
                </button>
              </div>
            </div>
            <div className="collection-info">
              <span className="collection-category">
                {saree.category.charAt(0).toUpperCase() + saree.category.slice(1)}
              </span>
              <h3 className="collection-name">{saree.name}</h3>
              <p className="collection-description">{saree.description}</p>
              <p className="collection-price">{saree.price}</p>
              <div className="collection-actions">
                <button className="wishlist-btn">
                  <i className="far fa-heart"></i>
                </button>
                <button className="add-to-cart-btn">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="shop-features">
        <div className="feature-card">
          <i className="fas fa-shield-alt"></i>
          <h3>Authentic Products</h3>
          <p>100% genuine sarees with quality assurance</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-truck"></i>
          <h3>Free Shipping</h3>
          <p>Free delivery on orders above ₹1999</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-exchange-alt"></i>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;