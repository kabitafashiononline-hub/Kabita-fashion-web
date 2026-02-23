import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav2.css';

const Nav2 = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/new-arrivals', label: 'New Arrivals' },
    { path: '/collections', label: 'Collections' },
    { path: '/meet-the-team', label: 'Meet The Team' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <nav className="nav2-container">
      <div className="nav2-content">
        <div className="nav2-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav2-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="nav2-offer">
          <span className="offer-text">🎉 Free Shipping on orders above ₹1999</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;