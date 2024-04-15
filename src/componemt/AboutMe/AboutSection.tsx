import React from "react";
import "./AboutSection.css";
import { AboutLinks } from "./link";

const introduction: string =
  "私は、優れた結果を提供することに情熱を持ったフルスタック開発者です。フロントエンドの React と NextJS、バックエンドの PHP、CodeIgniter、NodeJS、Express の専門知識を活かして、私が取り組んでいるすべてのプロジェクトに技術スキルと創造的な問題解決の独自の組み合わせをもたらします。";
function AboutSection() {
  return (
    <section>
      <h1>About</h1>
      <div className="text-center flex items-center justify-center">
        <div>
          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/63276819?v=4"
              className="rounded-full w-3/6 text-center"
            />
          </div>
          <div className="flex justify-center gap-10">
            {AboutLinks.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
        </div>
        <div className="text-left ml-20 w-2/6">{introduction}</div>
      </div>
    </section>
  );
}

export default AboutSection;
