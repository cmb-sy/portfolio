import React from "/public/TechLogo/frontend/React.png";
import Vue from "/public/TechLogo/frontend/Vue.png";
import Typescript from "/public/TechLogo/frontend/Typescript.png";
import JavaScript from "/public/TechLogo/frontend/JavaScript.png";
import Astro from "/public/TechLogo/frontend/Astro.png";
import HTML from "/public/TechLogo/frontend/HTML.png";
import CSS from "/public/TechLogo/frontend/CSS.png";

import Django from "/public/TechLogo/backend/Django.png";
import Flask from "/public/TechLogo/backend/Flask.png";

import Python from "/public/TechLogo/dataScience/Python.png";
import R from "/public/TechLogo/dataScience/R.png";
import { StaticImageData } from "next/image";

export type skillDetail = {
  name: string;
  imagePass?: StaticImageData;
  level: string;
  description: string;
};

export type skillTable = {
  skillType: string;
  skill: skillDetail[];
};

export const ProgrammingSkills: skillTable[] = [
  {
    skillType: "フロントエンド",
    skill: [
      {
        name: "JavaScript",
        imagePass: JavaScript,
        level: "★★★☆☆",
        description:
          "システム開発として使用経験があります。また、プライベートでもJSを使って開発した経験があります。",
      },
      {
        name: "Typescript",
        imagePass: Typescript,
        level: "★★★☆☆",
        description:
          "システム開発として使用経験があります。また、プライベートでもTypeScriptを使って開発した経験があります。",
      },
      {
        name: "Vue",
        imagePass: Vue,
        level: "★★★★☆",
        description:
          "システム開発として使用経験があります。また、プライベートでもTypeScriptを使って開発した経験があります。",
      },
      {
        name: "React",
        imagePass: React,
        level: "★★★☆☆",
        description:
          "プライベートのアプリケーション開発として使用経験があります。",
      },
      {
        name: "Astro",
        imagePass: Astro,
        level: "★★☆☆☆",
        description: "プライベートなブログ運用で使用経験があります。",
      },
      {
        name: "HTML",
        imagePass: HTML,
        level: "★★★☆☆",
        description:
          "システム開発として使用経験があります。また、プライベートのアプリケーション開発でも使用経験があります。",
      },
      {
        name: "CSS、ワードプレス",
        imagePass: CSS,
        level: "★★★☆☆",
        description:
          "システム開発として使用経験があります。また、プライベートのアプリケーション開発でも使用経験があります。",
      },
    ],
  },
  {
    skillType: "バックエンド",
    skill: [
      {
        name: "Django",
        imagePass: Django,
        level: "★★☆☆☆",
        description:
          "プライベートなアプリケーション開発として使用した経験があります。",
      },
      {
        name: "Flask",
        imagePass: Flask,
        level: "★★☆☆☆",
        description:
          "プライベートなアプリケーション開発や、ハッカソンでの採用技術として使用した経験があります。",
      },
    ],
  },
  {
    skillType: "データサイエンス",
    skill: [
      {
        name: "python",
        imagePass: Python,
        level: "★★★★☆",
        description:
          "業務とプライベートの両方でデータ分析や機械学習モデル構築をしてきました。また、データ分析やグラフ描画、モデル構築のため様々なフレームワークを用いた経験があります。",
      },
      {
        name: "R",
        imagePass: R,
        level: "★★★☆☆",
        description: "業務としてR言語を用いてデータ分析を行いました。",
      },
    ],
  },
];
