import React from "react";
import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";

type Item = {
  id: number;
  value: string;
  url: string;
};

function Navigation() {
  const items: Item[] = [
    { id: 1, value: "ホーム", url: "/" },
    { id: 2, value: "経歴", url: "/background" },
  ];

  return (
    <nav>
      <ul className="nav-links">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>{item.value}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
