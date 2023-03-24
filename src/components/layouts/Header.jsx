import React, { useState } from "react";
import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import close from "../../assets/shared/icon-close.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo space star" />
      </div>
      <div className="header-nav">
        <ul className="header-nav-desktop">
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
        <span onClick={toggleMenu} className="header-mobile-btn">
          {!isMenuOpen ? (
            <img src={hamburger} alt="burger menu logo" />
          ) : (
            <img
              className="header-mobile-btn-close"
              src={close}
              alt="close menu logo"
            />
          )}
        </span>
        {isMenuOpen && (
          <ul className="header-menu-mobile">
            <li className="header-nav-li-mobile">
              <NavLink to="/" className="header-nav-li-mobile-links">
                <span>00</span>HOME
              </NavLink>
            </li>

            <li className="header-nav-li-mobile">
              <NavLink to="/destination" className="header-nav-li-mobile-links">
                <span>01</span>DESTINATION
              </NavLink>
            </li>

            <li className="header-nav-li-mobile">
              <NavLink to="/crew" className="header-nav-li-mobile-links">
                <span>02</span>CREW
              </NavLink>
            </li>

            <li className="header-nav-li-mobile">
              <NavLink to="/technology" className="header-nav-li-mobile-links">
                <span>03</span>TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
