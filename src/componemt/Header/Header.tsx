import React from "react";
import "./Header.css";

type Item = {
  id: number;
  value: string;
};

function Header() {
  const items: Item[] = [
    { id: 1, value: "test" },
    { id: 2, value: "test2" },
  ];

  return (
    <header className="header">
      My Restaurant
      <nav>
        <ul className="nav-links">
          {items.map((item) => (
            <li key={item.id}>
              <p>{item.value}</p>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
