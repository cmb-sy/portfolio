import { useState } from "react";
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
          <a href="/" className="logo" />
          Portfolio
        </div>
        <ul className={navActive ? "nav-links nav-active" : "nav-links"}>
          {navigationItems.map((item) => (
            <li key={item.url}>
              <a href={item.url} onClick={toggleNav} />
              {item.value}
            </li>
          ))}
        </ul>
        {/* ハンバーガメニュー */}
        <div
          className={`burger ${navActive ? "header-toggle" : ""}`}
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
