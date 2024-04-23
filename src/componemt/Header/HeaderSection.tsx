import { Link } from "react-router-dom";
import "./Header.css";
import { navigationItems } from "./HeaderItem";

export const Header = () => {
  return (
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
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Header;
