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
        tableRightCell:
          "システム開発として使用経験があります。また、プライベートでもJSを使って開発した経験があります。",
      },
      {
        tableLeftCell: "Typescript",
        imagePass: Typescript,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "システム開発として使用経験があります。また、プライベートでもTypeScriptを使って開発した経験があります。",
      },
      {
        tableLeftCell: "Vue",
        imagePass: Vue,
        tableCenterCell: "★★★★☆",
        tableRightCell:
          "システム開発として使用経験があります。また、プライベートでもTypeScriptを使って開発した経験があります。",
      },
      {
        tableLeftCell: "React",
        imagePass: React,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "プライベートのアプリケーション開発として使用経験があります。",
      },
      {
        tableLeftCell: "Astro",
        imagePass: Astro,
        tableCenterCell: "★★☆☆☆",
        tableRightCell: "プライベートなブログ運用で使用経験があります。",
      },
      {
        tableLeftCell: "HTML",
        imagePass: HTML,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "システム開発として使用経験があります。また、プライベートのアプリケーション開発でも使用経験があります。",
      },
      {
        tableLeftCell: "CSS、ワードプレス",
        imagePass: CSS,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "システム開発として使用経験があります。また、プライベートのアプリケーション開発でも使用経験があります。",
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
    skillType: "資格",
    tableHeading: ["Certification", "Date", "Reason"],
    skill: [
      {
        tableLeftCell: "基本情報技術者",
        tableCenterCell: "2023/06/14",
        tableRightCell: "ITエンジニアの基本知識を獲得するために取得しました。",
      },
      {
        tableLeftCell: "応用情報技術者",
        tableCenterCell: "2023/06/29",
        tableRightCell:
          "ITエンジニアの知識をより深めて、業務に活用するために取得しました。",
      },
      {
        tableLeftCell: "情報処理安全確保支援士（未登録）",
        tableCenterCell: "2023/07/04",
        tableRightCell:
          "ITエンジニアの知識をより深めて、業務に活用するために取得しました。",
      },
      {
        tableLeftCell: "情報処理安全確保支援士合格（未登録）",
        tableCenterCell: "2024/04/16",
        tableRightCell:
          "セキュリティの知識を網羅的に取得するために挑戦しました。",
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
