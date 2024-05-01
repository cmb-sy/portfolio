import { useEffect, useRef } from "react";
import "./Home.css";
import chevron from "../../assets/chevron.svg";

function HomeSection() {
  const smoothScroll = (href: string) => {
    const targetSection = document.querySelector(href) as HTMLElement;
    if (targetSection) {
      const sectionTop = targetSection.getBoundingClientRect().top;
      const currentPos = window.scrollY;
      const gap = 84;
      const target = sectionTop + currentPos - gap + 20;

      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    }
  };

  const leafContainer = useRef<HTMLDivElement>(null);

  // コンポーネントのマウント時にタイマーをセットアップし、アンマウント時にクリア
  useEffect(() => {
    const createLeaf = () => {
      const leaf = document.createElement("span");
      leaf.className = "leaf";

      const minSize = 5;
      const maxSize = 10;

      // 葉っぱの大きさをランダムに決める。
      const leafSize = Math.random() * (maxSize - minSize) + minSize;
      leaf.style.width = leafSize + "px";
      leaf.style.height = leafSize + "px";

      // 葉っぱの降り始めを決定。
      leaf.style.left = Math.random() * 100 + "%";
      leafContainer.current?.appendChild(leaf);

      // 10秒後に葉っぱを消す
      setTimeout(() => {
        leaf.remove();
      }, 10000);
    };

    const intervalId = setInterval(createLeaf, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="home" className="homeArea">
      <div ref={leafContainer} className="forest-container">
        <div className="rrrt">
          <h3 className="yyyy">Thank you for visiting</h3>
          <h4 className="yyyy">Please take it easy</h4>
          <a
            href="#home"
            className="circle2"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("#about");
            }}
          >
            <img src={chevron} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
