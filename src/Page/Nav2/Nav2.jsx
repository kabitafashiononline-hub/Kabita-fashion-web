import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav2.css';

const Nav2 = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/collections', label: 'Collections' },
    { path: '/about-us', label: 'About Us' },
    { path: '/meet-the-team', label: 'Meet The Team' },
    { path: '/contact', label: 'Contact' }
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
      </div>
    </nav>
  );
};

export default Nav2;