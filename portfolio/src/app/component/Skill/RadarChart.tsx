import React from "react";
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
        width: "50%",
        height: "50%",
        maxWidth: "400px",
        maxHeight: "400px",
      }}
    >
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
