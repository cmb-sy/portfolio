"use client";

import React, { useState, useRef, useEffect } from "react";
import { CareerData, YearData, Project } from "./CareerData";

function AccordionTable({ title, children, onToggle }) {
  const [isOpen, setIsOpen] = useState(true); // 初期状態で開いた状態に設定
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen, contentRef.current.scrollHeight);
  };

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  useEffect(() => {
    onToggle(isOpen, contentRef.current.scrollHeight);
  }, []);

  return (
    <div className="w-full max-w-3xl px-4 my-4 border border-gray-400 p-4">
      <h3
        className="text-center cursor-pointer text-black py-2 flex justify-between items-center"
        onClick={handleToggle}
      >
        {title}
        <img
          src="/chevron.svg"
          alt="chevron"
          className={`transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{
            width: "24px",
            height: "24px",
            filter:
              "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
          }}
        />
      </h3>
      <div
        ref={contentRef}
        className="mt-2 transition-max-height duration-500 ease-in-out"
        style={{
          maxHeight: maxHeight,
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Career() {
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
      <div className="mt-8 flex flex-col items-center w-full max-w-4xl">
        {CareerData && CareerData.length > 0 ? (
          CareerData.map((yearData: YearData, yearIndex: number) => (
            <AccordionTable
              key={yearIndex}
              title={yearData.年度}
              onToggle={handleToggle}
            >
              {yearData.プロジェクト.map(
                (project: Project, projectIndex: number) => (
                  <table
                    key={projectIndex}
                    className="table-auto w-full border-collapse border border-gray-400 mx-auto mb-4"
                  >
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-gray-200 text-gray-800 font-bold w-1/4">
                          プロジェクト名
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {project.プロジェクト}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-gray-200 text-gray-800 font-bold w-1/4">
                          業務内容
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {project.業務内容}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-gray-200 text-gray-800 font-bold w-1/4">
                          開発環境
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {project.開発環境}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )
              )}
            </AccordionTable>
          ))
        ) : (
          <p>データがありません。</p>
        )}
      </div>
    </div>
  );
}

export default Career;
