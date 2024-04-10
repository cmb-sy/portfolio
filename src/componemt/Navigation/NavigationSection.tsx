import React from "react";
import "./NavigationStyle.css";
import { navigationItems } from "./NavigationItem";

export const Navigation = () => {
  return (
    <nav>
      <ul className="nav-links">
        {navigationItems.map((item) => (
          <li>
            <a href={item.key}>{item.value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
