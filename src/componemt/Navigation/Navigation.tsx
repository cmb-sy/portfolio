import React from "react";
import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";

type HeaderItem = {
  value: string;
  url: string;
};

function Navigation() {
  const headerItems: HeaderItem[] = [
    { value: "ホーム", url: "/" },
    { value: "経歴", url: "/background" },
    { value: "作品", url: "/works" },
    { value: "技術や資格", url: "/skill" },
    { value: "お問合せ", url: "/contact" },
  ];

  return (
    <nav>
      <ul className="nav-links">
        {headerItems.map((item) => (
          <li>
            <Link to={item.url}>{item.value}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
