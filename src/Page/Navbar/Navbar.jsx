import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './Navbar.css';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-logo">
          <img src="./kabita.png" alt="Kabita Fashion" />
        </div>

        <div className="nav-search">
          <input
            type="text"
            placeholder="Search sarees, collections, and more..."
          />
          <button className="nav-search-btn">
            <FiSearch className="nav-search-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
