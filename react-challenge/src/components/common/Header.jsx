import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="menu-container">
        <Link to="/" className="logo">
          <span className="logo-first">ANI</span>
          <span className="logo-second">LIST</span>
        </Link>
        <div className="menu">
          <Link to="/" className="menu-link">
            Home
          </Link>
          <Link to="/about" className="menu-link">
            About
          </Link>
        </div>
      </div>
      <div className="searchbar">
        <input type="text" className="searchbar--input" placeholder="Search for animes..." />
        <span className="material-icons searchbar--icon">search</span>
      </div>
      <div className="actions">
        <div className="user-avatar"></div>
      </div>
    </header>
  );
}

export default Header;
