import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header class="header">
      <div class="menu-container">
        <a href="/" class="logo">
          <span class="logo-first">ANI</span>
          <span class="logo-second">LIST</span>
        </a>
        <div class="menu">
          <a href="/" class="menu-link">
            Home
          </a>
          <a href="/about" class="menu-link">
            About
          </a>
        </div>
      </div>
      <div class="searchbar">
        <input type="text" class="searchbar--input" placeholder="Search for animes..." />
        <span class="material-icons searchbar--icon">search</span>
      </div>
      <div class="actions">
        <div class="user-avatar"></div>
      </div>
    </header>
  );
}

export default Header;
