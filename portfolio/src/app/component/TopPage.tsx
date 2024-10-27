import React from "react";
import AnimatedText from "@/app/component/animationTitle";
import Test from "@/app/component/ParticlesBackground";

const TopPage = async () => {
  const title = "kunst portfolio";

  return (
    <>
      {/* 背景としてParticlesコンポーネントを配置 */}
      <Test />
      {/* コンテンツをオーバーレイとして配置 */}
      <div className="absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen px-4">
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8 mb-50">
          <AnimatedText text={title} />
        </div>
      </div>
    </>
  );
};

export default TopPage;
