import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const active = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <Link to="/">E-<span>Gadgets</span></Link>
      </div>

      {/* SEARCH */}
      <div className="search">
        <input type="text" placeholder="Search products..." />
        <button className="search-btn" aria-label="Search">
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      {/* NAV LINKS */}
      <div className="nav-links">
        <Link to="/"         className={active("/")}>Home</Link>
        <Link to="/products" className={active("/products")}>Products</Link>
        <Link to="/about"    className={active("/about")}>About</Link>
        {/* <Link to="/contact"  className={active("/contact")}>Contact</Link> */}
        <Link to="/cart"     className={`cart-link ${active("/cart")}`}>Cart</Link>
         <Link to="/reviews"    className={`login-link ${active("/reviews")}`}>Reviews</Link>
        <Link to="/login"    className={`login-link ${active("/login")}`}>Login</Link>
        <Link to="/signup"   className={`signup-link ${active("/signup")}`}>Signup</Link>
      </div>

    </nav>
  );
};

export default Navbar;