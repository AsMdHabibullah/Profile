import React from "react";
import { NavLink } from "react-router-dom";
import author from "../Images/author.jpg";
import logo from "../Images/logo.png";

const SideDrower = ({ visible }) => {
  return (
    <header id="main_menu" className={visible ? "drowerIn" : "drowerOut"}>
      <div className="menu_head">
        <div className="author">
          <NavLink to="/">
            <img src={author} alt="Author" />
          </NavLink>
        </div>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
      </div>

      <div className="menu_item">
        <ul>
          <li>
            <NavLink to="/">
              <i className="fas fa-home" />
              <span className="item">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/codingtechnique.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-servicestack" />
              <span className="item">Service</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              <i className="fas fa-blog" />
              <span className="item">Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv">
              <i className="fas fa-address-book" />
              <span className="item">Cv</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <i className="fas fa-id-badge" />
              <span className="item">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default SideDrower;
