import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header class="header">
      <div class="menu-container">
        <Link href="/">
          <a class="logo">
            <span class="logo-first">ANI</span>
            <span class="logo-second">LIST</span>
          </a>
        </Link>
        <div class="menu">
          <Link href="/">
            <a class="menu-link">Home</a>
          </Link>
          <Link href="/about">
            <a class="menu-link">About</a>
          </Link>
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
