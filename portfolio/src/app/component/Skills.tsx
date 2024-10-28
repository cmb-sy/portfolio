"use client";

import React, { useState, useRef, useEffect } from "react";
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
  labels: ["Frontend", "Backend", "Infra", "DataScience", "Other"],
  datasets: [
    {
      label: "スキルレベル",
      data: [4, 2, 3, 4],
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
        max: 5,
        min: 1,
        stepSize: 1,
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

const skillData = [
  {
    tableLeftCell: "JavaScript",
    tableCenterCell: "★★★☆☆",
    tableRightCell:
      "システム開発として使用経験があります。また、プライベートでもJSを使って開発した経験があります。",
  },
  {
    tableLeftCell: "Typescript",
    tableCenterCell: "★★★☆☆",
    tableRightCell:
      "システム開発として使用経験があります。また、プライベートでもTypeScriptを使って開発した経験があります。",
  },
  {
    tableLeftCell: "Vue",
    tableCenterCell: "★★★★☆",
    tableRightCell:
      "システム開発として使用経験があります。また、プライベートでもTypeScriptを使って開発した経験があります。",
  },
  {
    tableLeftCell: "React",
    tableCenterCell: "★★★☆☆",
    tableRightCell:
      "プライベートのアプリケーション開発として使用経験があります。",
  },
  {
    tableLeftCell: "Astro",
    tableCenterCell: "★★☆☆☆",
    tableRightCell: "プライベートなブログ運用で使用経験があります。",
  },
  {
    tableLeftCell: "HTML",
    tableCenterCell: "★★★☆☆",
    tableRightCell:
      "システム開発として使用経験があります。また、プライベートのアプリケーション開発でも使用経験があります。",
  },
  {
    tableLeftCell: "CSS、ワードプレス",
    tableCenterCell: "★★★☆☆",
    tableRightCell:
      "システム開発として使用経験があります。また、プライベートのアプリケーション開発でも使用経験があります。",
  },
];

function AccordionTable({ title, children, onToggle }) {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen, contentRef.current.scrollHeight);
  };

  useEffect(() => {
    onToggle(isOpen, contentRef.current.scrollHeight);
  }, []);

  return (
    <div className="w-full max-w-3xl px-4 my-4">
      <h3
        className="text-center cursor-pointer bg-blue-500 text-white py-2"
        onClick={handleToggle}
      >
        {title}
      </h3>
      <div
        ref={contentRef}
        className={`mt-2 transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Skills() {
  const [totalHeight, setTotalHeight] = useState(0);

  const handleToggle = (isOpen, height) => {
    setTotalHeight((prev) => (isOpen ? prev + height : prev - height));
  };

  return (
    <div
      className={`flex flex-col items-center bg-slate-50 z-10 relative`}
      style={{
        height: `calc(80vh + ${totalHeight}px)`,
        overflowY: "hidden",
        transition: "height 0.5s ease-in-out",
      }}
    >
      <div className="w-96 h-96">
        <h2 className="text-center">スキルチャート</h2>
        <Radar data={data} options={options} />
      </div>
      <div className="mt-8 flex flex-col items-center w-full max-w-4xl">
        {skillData.map((skill, index) => (
          <AccordionTable
            key={index}
            title={`表${index + 1}`}
            onToggle={handleToggle}
          >
            <table className="table-auto w-full border-collapse border border-gray-400 mx-auto">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">列1</th>
                  <th className="border border-gray-300 px-4 py-2">列2</th>
                  <th className="border border-gray-300 px-4 py-2">列3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {skill.tableLeftCell}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {skill.tableCenterCell}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {skill.tableRightCell}
                  </td>
                </tr>
              </tbody>
            </table>
          </AccordionTable>
        ))}
      </div>
    </div>
  );
}

export default Skills;
