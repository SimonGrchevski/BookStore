import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <header className="flex">
    <section className="flex header-section">
      <h1 id="logo">BookStore</h1>
      <ul className="nav-bar flex">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
      </ul>
    </section>
  </header>
);

export default Header;
