"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      setLoading(false);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#f5f6f6",
        },
        opacity: 1,
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
      },
      particles: {
        color: {
          value: "#747474",
        },
        move: {
          enable: true,
          speed: 0.5, // 速度を遅くする
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 100,
        },
        opacity: {
          value: 0.5, // 固定の不透明度に設定
          animation: {
            enable: false, // 点滅を無効にする
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 10,
          },
          animation: {
            enable: false, // サイズのアニメーションを無効にする
          },
        },
        links: {
          color: "#747474",
          distance: 150,
          enable: true,
          opacity: 0.7,
          width: 2,
        },
      },
    }),
    []
  );

  if (!init || loading) {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
};

export default ParticleBackground;
