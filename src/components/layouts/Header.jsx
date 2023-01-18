import React from "react";
import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo space star" />
      </div>
      <div className="header-nav">
        <ul>
          <li className="header-nav-li">
            <NavLink to="/" className="header-nav-li-links">
              <span>00</span>HOME
            </NavLink>
          </li>

          <li className="header-nav-li">
            <NavLink to="/destination" className="header-nav-li-links">
              <span>01</span>DESTINATION
            </NavLink>
          </li>

          <li className="header-nav-li">
            <NavLink to="/crew" className="header-nav-li-links">
              <span>02</span>CREW
            </NavLink>
          </li>

          <li className="header-nav-li">
            <NavLink to="/technology" className="header-nav-li-links">
              <span>03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
