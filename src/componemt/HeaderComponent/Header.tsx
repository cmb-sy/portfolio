import React from "react";
import Navigation from "../NavigationComponent/Navigation";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">kunstポートフォリオ</Link>
      <Navigation />
    </header>
  );
}

export default Header;
