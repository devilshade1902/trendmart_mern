import React, { useEffect } from "react";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Categories_bar from "../categories_bar/Categories_bar";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../../authSlice";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(()=>{
    const fetchUser = async ()=>{
      const token = localStorage.getItem('accessToken')
      if(!token) return;

      try {
        const response = await fetch('http://localhost:3000/api/auth/me',{
          headers:{Authorization: `Bearer ${token}`},
          credentials:'include'
        })
        if(response.ok){
          const data = await response.json()
          dispatch(setUser(data))
        }else{
          console.log("token is expired or invalid ")
        }
      } catch (error) {
        console.error('error fetching user:',error)
      }
    }
    fetchUser()
  },[dispatch])
  // console.log(user.nam)

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
          <Link to="/" className="navbar-brand">
            TrendMart
          </Link>
          <div className="navbar-search mx-auto">
            <div className="input-group">
              <span className="input-group-text">
                <IoMdSearch />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className="cart me-3">
                <FaShoppingCart />
                <span className="ms-1">Cart</span>
              </div>
            </Link>
            {user && user.name && (
              <span className="text-white me-2">{`Welcome, ${user.name}`}</span>
            )}

            {isAuthenticated ? (
              <button onClick={() => dispatch(logout())} className="btn btn-danger">
                Logout
              </button>
            ) : (
              <>
                <button className="btn btn-primary me-2">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </button>
                <button className="btn btn-secondary">
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Sign Up
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <Categories_bar />
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`} id="sidebar">
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
  );
};

export default Navbar;
