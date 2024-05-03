import React from "../../assets/TechLogo/frontend/React.png";
import Vue from "../../assets/TechLogo/frontend/Vue.png";
import Typescript from "../../assets/TechLogo/frontend/Typescript.png";
import JavaScript from "../../assets/TechLogo/frontend/Javascript.png";
import Astro from "../../assets/TechLogo/frontend/Astro.png";
import HTML from "../../assets/TechLogo/frontend/HTML.png";
import CSS from "../../assets/TechLogo/frontend/CSS.png";

import Django from "../../assets/TechLogo/backend/Django.png";
import Flask from "../../assets/TechLogo/backend/Flask.png";

import Python from "../../assets/TechLogo/dataScience/Python.png";
import R from "../../assets/TechLogo/dataScience/R.png";

import StatisticalSocietyCertificate2 from "../../assets/TechLogo/certificate/StatisticalSocietyCertificate2.png";
import StatisticalSocietyCertificatePre1 from "../../assets/TechLogo/certificate/StatisticalSocietyCertificatePre1.png";
import Ecertification from "../../assets/TechLogo/certificate/Ecertification.png";

export type skillDetail = {
  tableLeftCell: string;
  imagePass?: string;
  tableCenterCell: string;
  tableRightCell: string;
};

export type skillTable = {
  skillType: string;
  tableHeading: string[];
  skill: skillDetail[];
};

export const ProgrammingSkills: skillTable[] = [
  {
    skillType: "フロントエンド",
    tableHeading: ["Tech", "Level", "Comment"],
    skill: [
      {
        tableLeftCell: "Typescript",
        imagePass: Typescript,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "JavaScript",
        imagePass: JavaScript,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "Vue",
        imagePass: Vue,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "React",
        imagePass: React,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "Astro",
        imagePass: Astro,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "HTML",
        imagePass: HTML,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "CSS",
        imagePass: CSS,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
    ],
  },
  {
    skillType: "バックエンド",
    tableHeading: ["Tech", "Level", "Comment"],
    skill: [
      {
        tableLeftCell: "Django",
        imagePass: Django,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "Flask",
        imagePass: Flask,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
    ],
  },
  {
    skillType: "データサイエンス",
    tableHeading: ["Tech", "Level", "Comment"],
    skill: [
      {
        tableLeftCell: "python",
        imagePass: Python,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "R",
        imagePass: R,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
    ],
  },
  {
    skillType: "資格",
    tableHeading: ["Certification", "Date", "Reason"],
    skill: [
      {
        tableLeftCell: "FE/AP",
        tableCenterCell: "xxxx/xx/xx",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "統計検定2級",
        // imagePass: StatisticalSocietyCertificate2,
        tableCenterCell: "xxxx/xx/xx",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "統計検定準1級",
        // imagePass: StatisticalSocietyCertificatePre1,
        tableCenterCell: "xxxx/xx/xx",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "E資格",
        // imagePass: Ecertification,
        tableCenterCell: "xxxx/xx/xx",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "TOEIC810点",
        tableCenterCell: "xxxx/xx/xx",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
    ],
  },
];
