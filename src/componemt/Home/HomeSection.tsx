import "./Home.css";

function HomeSection() {
  let leafContainer = document.querySelector(".forest-container");

  //   葉っぱを生成
  const createLeaf = () => {
    let leaf = document.createElement("span");
    leaf.className = "leaf";

    let minSize = 5;
    let maxSize = 10;

    // 葉っぱの大きさをランダムに決める。
    let leafSize = Math.random() * (maxSize - minSize) + minSize;
    leaf.style.width = leafSize + "px";
    leaf.style.height = leafSize + "px";

    // 葉っぱの降り始めを決定。
    leaf.style.left = Math.random() * 100 + "%";
    leafContainer?.appendChild(leaf);

    // 10秒後に葉っぱを消す
    setTimeout(() => {
      leaf.remove();
    }, 10000);
  };
  setInterval(createLeaf, 1000);

  return (
    <div id="home" className="homeArea">
      <div className="forest-container">
        <h1 className="yyyy">Thank You Coming!</h1>
      </div>
      <div className="leaf"></div>
    </div>
  );
}

export default HomeSection;
