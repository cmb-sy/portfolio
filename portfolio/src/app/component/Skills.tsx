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

const data1 = [
  ["データ1", "データ2", "データ3"],
  ["データ4", "データ5", "データ6"],
  ["データ4", "データ5", "データ6"],
  ["データ4", "データ5", "データ6"],
  ["データ4", "データ5", "データ6"],
  ["データ4", "データ5", "データ6"],
];

const data2 = [
  ["データ7", "データ8", "データ9"],
  ["データ10", "データ11", "データ12"],
];

const data3 = [
  ["データ13", "データ14", "データ15"],
  ["データ16", "データ17", "データ18"],
];

const data4 = [
  ["データ19", "データ20", "データ21"],
  ["データ22", "データ23", "データ24"],
];

const data5 = [
  ["データ25", "データ26", "データ27"],
  ["データ28", "データ29", "データ30"],
];

const data6 = [
  ["データ31", "データ32", "データ33"],
  ["データ34", "データ35", "データ36"],
  ["データ34", "データ35", "データ36"],
  ["データ34", "データ35", "データ36"],
  ["データ34", "データ35", "データ36"],
  ["データ34", "データ35", "データ36"],
  ["データ34", "データ35", "データ36"],
];

function AccordionTable({ title, children, onToggle }) {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen, contentRef.current.scrollHeight);
  };

  useEffect(() => {
    // 初期高さを設定
    onToggle(isOpen, contentRef.current.scrollHeight);
  }, []);

  return (
    <div className="w-1/2 px-2">
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
      <div className="mt-8 flex flex-wrap justify-center w-full max-w-4xl">
        <AccordionTable title="表1" onToggle={handleToggle}>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">列1</th>
                <th className="border border-gray-300 px-4 py-2">列2</th>
                <th className="border border-gray-300 px-4 py-2">列3</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionTable>
        <AccordionTable title="表2" onToggle={handleToggle}>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">列1</th>
                <th className="border border-gray-300 px-4 py-2">列2</th>
                <th className="border border-gray-300 px-4 py-2">列3</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionTable>
      </div>
      <div className="mt-8 flex flex-wrap justify-center w-full max-w-4xl">
        <AccordionTable title="表3" onToggle={handleToggle}>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">列1</th>
                <th className="border border-gray-300 px-4 py-2">列2</th>
                <th className="border border-gray-300 px-4 py-2">列3</th>
              </tr>
            </thead>
            <tbody>
              {data3.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionTable>
        <AccordionTable title="表4" onToggle={handleToggle}>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">列1</th>
                <th className="border border-gray-300 px-4 py-2">列2</th>
                <th className="border border-gray-300 px-4 py-2">列3</th>
              </tr>
            </thead>
            <tbody>
              {data4.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionTable>
      </div>
      <div className="mt-8 flex flex-wrap justify-center w-full max-w-4xl">
        <AccordionTable title="表5" onToggle={handleToggle}>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">列1</th>
                <th className="border border-gray-300 px-4 py-2">列2</th>
                <th className="border border-gray-300 px-4 py-2">列3</th>
              </tr>
            </thead>
            <tbody>
              {data5.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionTable>
        <AccordionTable title="表6" onToggle={handleToggle}>
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">列1</th>
                <th className="border border-gray-300 px-4 py-2">列2</th>
                <th className="border border-gray-300 px-4 py-2">列3</th>
              </tr>
            </thead>
            <tbody>
              {data6.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionTable>
      </div>
    </div>
  );
}

export default Skills;
