"use client";

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

const data = {
  labels: ["JavaScript", "React", "CSS", "HTML", "Node.js", "TypeScript"],
  datasets: [
    {
      label: "スキルレベル",
      data: [80, 90, 70, 85, 75, 95],
      backgroundColor: "rgba(34, 202, 236, 0.2)",
      borderColor: "rgba(34, 202, 236, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    r: {
      ticks: {
        beginAtZero: true,
        max: 100,
        min: 0,
        stepSize: 20,
      },
      pointLabels: {
        font: {
          size: 14,
        },
      },
    },
  },
  maintainAspectRatio: false,
};

function Skills() {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <h2>スキルチャート</h2>
      <Radar data={data} options={options} />
    </div>
  );
}

export default Skills;
