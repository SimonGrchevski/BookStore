import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <header className="flex">
    <h1>BookStore</h1>
    <ul className="nav-bar flex">
      <li><Link to="/">Books</Link></li>
      <li><Link to="/Categories">Categories</Link></li>
    </ul>
  </header>
);

export default Header;
