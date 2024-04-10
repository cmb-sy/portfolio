import React from "react";
import Navigation from "../Navigation/Navigation";
import "../Header/Header.css";

function Header() {
  return (
    <header className="header">
      My Restaurant
      <Navigation />
    </header>
  );
}

export default Header;
