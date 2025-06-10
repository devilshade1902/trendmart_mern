import React from 'react';
import { Link } from 'react-router-dom';
import './Categories_bar.css';

const Categories_bar = () => {
  return (
    <nav className="categories-bar">
      <ul className="categories-list">
        <li className="category-item">
          <Link to="/products/mens" className="category-link">Men's Clothing</Link>
        </li>
        <li className="category-item">
          <Link to="/products/womens" className="category-link">Women's Clothing</Link>
        </li>
        <li className="category-item">
          <Link to="/products/kids" className="category-link">Kid's Clothing</Link>
        </li>
        <li className="category-item">
          <Link to="/products/electronics" className="category-link">Electronics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Categories_bar;