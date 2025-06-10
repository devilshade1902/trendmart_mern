import React from 'react'
import './Navbar.css'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Categories_bar from '../categories_bar/Categories_bar'
import { Link } from 'react-router';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler me-2"
            type="button"
            onClick={toggleSidebar}
            aria-controls="sidebar"
            aria-expanded={isSidebarOpen}
            aria-label="Toggle sidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className='navbar-brand'>TrendMart</Link>
          <div className="navbar-search mx-auto">
            <div className="input-group">
              <span className="input-group-text">
                <IoMdSearch />
              </span>
              <input type="text" className="form-control" placeholder="Search" />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Link to='/cart' style={{textDecoration:'none'}}>
              <div className="cart me-3">
                <FaShoppingCart />
                <span className="ms-1">Cart</span>
              </div>
            </Link>
            <button className="btn btn-primary me-2">Login</button>
            <button className="btn btn-secondary">Sign Up</button>
          </div>
        </div>
      </nav>
      <Categories_bar />
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`} id="sidebar">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Menu</h3>
          <button
            className="button"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
