"use client";
import React, { useEffect } from "react";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .animated-text {
        display: inline;
        opacity: 0;
        animation: fadeIn 0.5s forwards;
      }

      @keyframes fadeIn {
        to {
          opacity: 1;
        }
      }

      .animated-line {
        white-space: pre-wrap; /* 改行を有効にする */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const lines = text.split("\n");

  return (
    <div className="text-black text-center text-lg md:text-2xl lg:text-7xl leading-relaxed">
      {lines.map((line, lineIndex) => {
        const lineDelay = lineIndex * 1.5; // 各行の遅延時間を計算
        return (
          <div key={lineIndex} className="animated-line">
            {line.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className="animated-text"
                style={{ animationDelay: `${lineDelay + charIndex * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedText;
