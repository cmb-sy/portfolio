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
        tableLeftCell: "JavaScript",
        imagePass: JavaScript,
        tableCenterCell: "★★★☆☆",
        tableRightCell: "業務で",
      },
      {
        tableLeftCell: "Typescript",
        imagePass: Typescript,
        tableCenterCell: "★★★☆☆",
        tableRightCell: "",
      },
      {
        tableLeftCell: "Vue",
        imagePass: Vue,
        tableCenterCell: "★★★★☆",
        tableRightCell: "業務での開発として",
      },
      {
        tableLeftCell: "React",
        imagePass: React,
        tableCenterCell: "★★★☆☆",
        tableRightCell: "",
      },
      {
        tableLeftCell: "Astro",
        imagePass: Astro,
        tableCenterCell: "★★☆☆☆",
        tableRightCell: "",
      },
      {
        tableLeftCell: "HTML",
        imagePass: HTML,
        tableCenterCell: "★★★☆☆",
        tableRightCell: "",
      },
      {
        tableLeftCell: "CSS",
        imagePass: CSS,
        tableCenterCell: "★★★☆☆",
        tableRightCell: "",
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
        tableCenterCell: "★★☆☆☆",
        tableRightCell:
          "プライベートなアプリケーション開発として使用した経験があります。",
      },
      {
        tableLeftCell: "Flask",
        imagePass: Flask,
        tableCenterCell: "★★☆☆☆",
        tableRightCell:
          "プライベートなアプリケーション開発や、ハッカソンでの採用技術として使用した経験があります。",
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
        tableCenterCell: "★★★★☆",
        tableRightCell:
          "業務とプライベートの両方でデータ分析や機械学習モデル構築をしてきました。また、データ分析やグラフ描画、モデル構築のため様々なフレームワークを用いた経験があります。",
      },
      {
        tableLeftCell: "R",
        imagePass: R,
        tableCenterCell: "★★★☆☆",
        tableRightCell: "業務としてR言語を用いてデータ分析を行いました。",
      },
    ],
  },
  {
    skillType: "E資格",
    tableHeading: ["Certification", "Date", "Reason"],
    skill: [
      {
        tableLeftCell: "基本情報技術者",
        tableCenterCell: "2023/05/12",
        tableRightCell: "ITエンジニアの基本知識を獲得するために取得しました。",
      },
      {
        tableLeftCell: "応用情報技術者",
        tableCenterCell: "2023/04/16",
        tableRightCell:
          "ITエンジニアの知識をより深めて、業務に活用するために取得しました。",
      },
      {
        tableLeftCell: "統計検定2級",
        tableCenterCell: "2023/12/20",
        tableRightCell: "統計学の最低限の知識を獲得するために取得しました。",
      },
      {
        tableLeftCell: "統計検定準1級",
        tableCenterCell: "2024/03/11",
        tableRightCell:
          "データ分析業務にあたって、統計学のより深い知識が必要のため取得しました。",
      },
      {
        tableLeftCell: "E資格",
        tableCenterCell: "2023/09/21",
        tableRightCell:
          "大学院生のときの知識に含めてディープラーニングの知識をより深めるために取得しました。",
      },
      {
        tableLeftCell: "TOEIC810点",
        tableCenterCell: " 2024/02/25",
        tableRightCell: "英語のスキルは必要と考えたため取得しました。",
      },
    ],
  },
];
