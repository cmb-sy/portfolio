import React from "react";
import AnimatedText from "@/app/component/animationTitle";
import ParticleBackground from "@/app/component/ParticlesBackground";

const TopPage: React.FC = () => {
  const title = "kunst portfolio";

  return (
    <>
      <div className="relative w-full h-screen" id="top-page">
        {/* 背景としてParticlesコンポーネントを配置 */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        {/* コンテンツをオーバーレイとして配置 */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8 mb-50">
            <AnimatedText text={title} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPage;
