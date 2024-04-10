import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { navigationItems } from "./NavigationItem";

function Navigation() {
  return (
    <nav>
      <ul className="nav-links">
        {navigationItems.map((item) => (
          <li>
            <Link to={item.url}>{item.value}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
