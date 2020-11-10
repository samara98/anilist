import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="menu-container">
        <a href="/" className="logo">
          <span className="logo-first">ANI</span>
          <span className="logo-second">LIST</span>
        </a>
        <div className="menu">
          <a href="/" className="menu-link">
            Home
          </a>
          <a href="/about" className="menu-link">
            About
          </a>
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
