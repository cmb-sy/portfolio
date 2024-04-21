import React from "react";
import "./AboutSection.css";
import { AboutLinks } from "./link";
import Career from "../Career/CareerSection";

const introduction: string =
  "私は、優れた結果を提供することに情熱を持ったフルスタック開発者です。フロントエンドの React と NextJS、バックエンドの PHP、CodeIgniter、NodeJS、Express の専門知識を活かして、私が取り組んでいるすべてのプロジェクトに技術スキルと創造的な問題解決の独自の組み合わせをもたらします。";
function AboutSection() {
  return (
    <section>
      <h1>test</h1>
      <div className="content">
        <div className="text1">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/63276819?v=4"
              className="customImg"
            />
          </div>
          <div className="customTable">
            {AboutLinks.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
        </div>
        <div className="text2">{introduction}</div>
      </div>
      <Career />
    </section>
  );
}

export default AboutSection;
