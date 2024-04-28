import React, { useState, useEffect } from "react";
import "./Header.css";
import { navigationItems } from "./HeaderItem";

function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const smoothScroll = (href: string) => {
    const targetSection = document.querySelector(href) as HTMLElement;
    if (targetSection) {
      const sectionTop = targetSection.getBoundingClientRect().top;
      const currentPos = window.scrollY;
      const gap = 84;
      const target = sectionTop + currentPos - gap;

      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 0) {
          header.style.opacity = "0.3";
        } else {
          header.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/" className="logo" />
          Portfolio
        </div>
        <ul className={navActive ? "nav-links nav-active" : "nav-links"}>
          {navigationItems.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(item.url);
                  toggleNav();
                }}
                className="rrrr"
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
        {/* ハンバーガメニュー */}
        <div
          className={`burger ${navActive ? "header-toggle" : ""}`}
          onClick={() => {
            toggleNav();
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
