import linkedinIcon from "../images/linkedin.png";
import twitterIcon from "../images/twitter.jpg";
import githubIcon from "../images/github.png";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layout.css";
import logo from "../images/our_logo.png"; // Import the logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }) => {
  const [isCoffeeInfoDropdownOpen, setCoffeeInfoDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const toggleCoffeeInfoDropdown = () => {
    setCoffeeInfoDropdownOpen(!isCoffeeInfoDropdownOpen);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!isProductsDropdownOpen);
  };

  return (
    <div className="app-container">
      <header>
        <nav>
          <div className="logo-container">
            <img src={logo} alt="Your Logo" className="logo" />
          </div>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <div
            className="coffee-info-dropdown"
            onMouseEnter={toggleCoffeeInfoDropdown}
            onMouseLeave={toggleCoffeeInfoDropdown}
          >
            <span>Coffee Info</span>
            <div
              className={`dropdown-content ${
                isCoffeeInfoDropdownOpen ? "open" : ""
              }`}
            >
              <Link to="/marketprices">Market Prices</Link>
              <Link to="/soil">Soil</Link>
              <Link to="/farmingmethods">Farming Methods</Link>
            </div>
            {isCoffeeInfoDropdownOpen && (
              <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
            )}
          </div>
          <Link className="dashb" to="/dashboard">
            Dashbord
          </Link>
          <div className="auth">
            <button className="authl">
              <Link className="ll" to="/login">
                Login
              </Link>
            </button>
            <button className="auths">
              <Link className="ls" to="/signup">
                Signup
              </Link>
            </button>
          </div>
          {/* Add more navigation links as needed */}
        </nav>
      </header>
      <main className="content">{children}</main>
      <footer>
        <div className="foot">
          <div className="f1">
            <img src={logo} alt="Your Logo" className="logof" />
            {/* <p className='me'>Mwanyi Ecommerce</p> */}
          </div>
          <div className="f2">
            <h3>What we do</h3>
            <p>Direct Connection</p>
            <p>Education and Training</p>
            <p>Community Building</p>
            <p>Quality Assurance</p>
            {/* <Link to="/Soil">Soil</Link>
          <Link to="/marketprices">Market Prices</Link>
          <Link to="/farmingmethods">Farming Methods</Link> */}
          </div>
          <div className="f2">
            <h3>Focus Areas</h3>
            <p>Coffee Market Support</p>
            <p>Social Interaction</p>
            <p>Product Showcase</p>
            <p>Affordable coffee</p>
            {/* <Link to="/findproduct">Find Product</Link>
          <Link to="/postproduct">Post Product</Link>
          <Link to="/contactus">Contact us</Link> */}
          </div>
          <div className="social-icons">
            <div>
              <h4>Follow us</h4>
            </div>
            <div className="icons">
              <a
                className="linkedin"
                href="https://www.linkedin.com/https://www.linkedin.com/jobs/view/3621727481/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
                <br />
              </a>
              <a
                className="twitter"
                href="https://twitter.com/https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
                <br />
              </a>
              <a
                className="github"
                href="https://github.com/https://github.com/joycetin?tab=repositories/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
                <br />
              </a>
            </div>
          </div>
        </div>
        <div className="copy">&copy; 2023 Mwanyi Ecommerce Platform</div>
      </footer>
    </div>
  );
};

export default Layout;
