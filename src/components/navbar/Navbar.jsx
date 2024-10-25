import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo-leya.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-menu">
          <Link to="/" className="nav-menu-item">
            <p>Security</p>
          </Link>
          <Link to="/about" className="nav-menu-item">
            {" "}
            <p>Carriers</p>
          </Link>
          <Link to="/contact-us" className="nav-menu-item">
            <p>Customer</p>
          </Link>
          <Link to="/contact-us" className="nav-menu-item">
            <p>Blog</p>
          </Link>

          <button className="nav-cta">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
