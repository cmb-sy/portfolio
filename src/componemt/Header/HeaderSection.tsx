import React from "react";
import { Navigation } from "../Navigation/NavigationSection";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/">kunstポートフォリオ</a>
      <Navigation />
    </header>
  );
};

export default Header;
