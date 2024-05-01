import React, { useEffect, useRef } from "react";
import "./Home.css";

function HomeSection() {
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
        <h1 className="yyyy">Thank You Coming!</h1>
      </div>
    </div>
  );
}

export default HomeSection;
