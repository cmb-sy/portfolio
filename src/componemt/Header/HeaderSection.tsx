import "./Header.css";
import { useState, useEffect } from "react";
import { navigationItems } from "./HeaderItem";
import { smoothScroll } from "../smoothScroll";

function Header() {
  let scrollingTimer: number;

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        // スクロールが発生したときに透明度を変更
        (header as HTMLElement).style.opacity = "0.5";

        // スクロールが停止した場合にタイマーを使って透明度を元に戻す
        clearTimeout(scrollingTimer);
        scrollingTimer = window.setTimeout(() => {
          (header as HTMLElement).style.opacity = "1";
        }, 300); // 200ミリ秒間スクロールが停止したとみなす
      }
    };

    // メディアクエリを定義
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // モバイル用のスクロールハンドリング関数
    const handleScrollForMobile = () => {
      const header = document.querySelector("header");
      if (header) {
        // スクロールが発生したときに透明度を変更
        (header as HTMLElement).style.opacity = "0.5";

        // スクロールが停止した場合にタイマーを使って透明度を元に戻す
        clearTimeout(scrollingTimer);
        scrollingTimer = window.setTimeout(() => {
          (header as HTMLElement).style.opacity = "1";
        }, 300); // 200ミリ秒間スクロールが停止したとみなす
      }
    };

    // 初回実行
    if (mediaQuery.matches) {
      window.addEventListener("scroll", handleScrollForMobile);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    // ウィンドウサイズが変更されたときに挙動を切り替える
    mediaQuery.addEventListener("change", (e) => {
      if (e.matches) {
        // 幅が600px未満の場合
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScrollForMobile);
      } else {
        // 幅が600px以上の場合
        window.removeEventListener("scroll", handleScrollForMobile);
        window.addEventListener("scroll", handleScroll);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", (e) => {
        if (e.matches) {
          // 幅が600px未満の場合
          window.removeEventListener("scroll", handleScrollForMobile);
        } else {
          // 幅が600px以上の場合
          window.removeEventListener("scroll", handleScroll);
        }
      });
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="logo">
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#home");
            }}
          >
            Portfolio
          </a>
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
