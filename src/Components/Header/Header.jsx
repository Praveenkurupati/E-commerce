import React from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/path/to/logo.png" alt="Company Logo" />
      </div>

      {/* Name of the company */}
      <h1 className="company-name">Company Name</h1>

      {/* Social Media Links */}
      <div className="social-media">
        <a href="/facebook" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="/twitter" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Menu */}
      <nav className="menu">
        <ul>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/best-selling">Best Selling</a>
          </li>
          <li>
            <a href="/new-launch">New Launch</a>
          </li>
          <li>
            <a href="/popular-products">Popular Products</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
