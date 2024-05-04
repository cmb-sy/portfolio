import { useEffect, useRef } from "react";
import chevron from "../../assets/chevron.svg";
import { smoothScroll } from "../smoothScroll";
import styles from "./Home.module.css";

function HomeSection() {
  const leafContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createLeaf = () => {
      const leaf = document.createElement("span");
      leaf.className = styles.leaf; // CSSモジュールのクラスを使用する
      const minSize = 5;
      const maxSize = 10;
      const leafSize = Math.random() * (maxSize - minSize) + minSize;
      leaf.style.width = leafSize + "px";
      leaf.style.height = leafSize + "px";
      leaf.style.left = Math.random() * 100 + "%";
      leafContainer.current?.appendChild(leaf);
      setTimeout(() => {
        leaf.remove();
      }, 10000);
    };

    const intervalId = setInterval(createLeaf, 800);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="home" className={styles.homeSection}>
      <div ref={leafContainer} className={styles.forestContainer}>
        <div className={styles.content}>
          <span className={styles.greeting}>Thank you for visiting</span>
          <span className={styles.message}>Please take it easy</span>
          <a
            href="#home"
            className={styles.circle}
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#about");
            }}
          >
            <img
              src={chevron}
              className={styles.scrollIcon}
              alt="Scroll Down"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
