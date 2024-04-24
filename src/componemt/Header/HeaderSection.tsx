import { Link } from "react-router-dom";
import "./Header.css";
import { navigationItems } from "./HeaderItem";

// const burger: Element | null = document.querySelector(".burger");
// const nav = document.querySelector(".nav");

// burger.addEventListener("click", () => {
//   nav?.classList.toggle("nav-active");
// });

export const Header = () => {
  return (
    <body className="nav-body">
      <nav>
        <div className="logo">
          <h4>ナビゲーションバー</h4>
        </div>
        <ul className="nav-links">
          {navigationItems.map((item) => (
            <li>
              <Link to={item.url}>{item.value}</Link>
            </li>
          ))}
        </ul>
        {/* ハンバーガメニュー */}
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </body>
  );
};

export default Header;
