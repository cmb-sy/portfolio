import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { navigationItems } from "./HeaderItem";

export const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <body>
      <nav>
        <div className="logo">
          <Link to="/" className="logo">
            ナビゲーションバー
          </Link>
        </div>
        <ul className={navActive ? "nav-links nav-active" : "nav-links"}>
          {navigationItems.map((item) => (
            <li key={item.url}>
              <Link to={item.url} onClick={toggleNav}>
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
        {/* ハンバーガメニュー */}
        <div
          className={`burger ${navActive ? "toggle" : ""}`}
          onClick={() => {
            toggleNav();
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <script src="script.js"></script>
    </body>
  );
};

export default Header;
