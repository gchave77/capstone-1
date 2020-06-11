import React from "react";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

// Functional components don’t have its own state. Uses plain JavaScript function which accepts props as an argument and returns a React element.
const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-center">
          <div className="first-nav">
            <div className="navbar-header">
              <Link to="/" className="logo">
                <img src={logo} alt="Tiare Travel" width="40%" />
              </Link>
            </div>
            <ul className="navbar-links">
              <li className="navbar-item">
                <Link to="/">home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/products">products</Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <div className="navbar-header">
              <Link to="/" className="logo">
                <img src={logo} alt="Tiare Travel" width="40%" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Category />
    </React.Fragment>
  );
};

export default Navbar;
