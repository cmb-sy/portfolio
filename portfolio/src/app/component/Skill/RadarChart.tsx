import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart: React.FC = () => {
  const [chartSize, setChartSize] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth * 0.8;
      const height = window.innerHeight * 0.8;
      setChartSize({
        width: width > 400 ? 400 : width,
        height: height > 400 ? 400 : height,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 初回レンダリング時にサイズを設定

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // サンプルデータ
  const skillLevels = [
    { name: "Frontend", level: 4 },
    { name: "Backend", level: 5 },
    { name: "Infra", level: 3 },
    { name: "DataScience", level: 4 },
    { name: "Other", level: 2 },
  ];

  const data = {
    labels: skillLevels.map((skill) => skill.name),
    datasets: [
      {
        label: "スキルレベル",
        data: skillLevels.map((skill) => skill.level),
        backgroundColor: "rgba(34, 202, 236, 0.2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
        angleLines: {
          display: true,
        },
        grid: {
          circular: true,
        },
        pointLabels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: `${chartSize.width}px`,
        height: `${chartSize.height}px`,
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
