export type Career = {
  date?: string;
  name?: string;
  description: string;
};

export const careers: Career[] = [
  {
    date: "~大学時代~",
    description:
      "化学を専攻していました。研究として太陽電池の熱吸収する材料の計算科学を行なっていました。",
  },
  {
    date: "大学院時代",
    description:
      "教師なし学習を用いて、マルチタスク間のメタモデルを発見する計算原理の研究をしていました。",
  },
  {
    date: "2022/04/01~",
    name: "メンタルヘルスケアの会社",
    description:
      "休職者管理システムの運用・保守やベンダーコントロールの業務に従事しました。また、会社のシステムのR言語をpythonに置き換える業務に従事しました。",
  },
  {
    date: "2023/04/01~",
    name: "同上",
    description:
      "メンタルヘルスデータを用いて白書を作成に従事しました。また、基幹システムのフロントエンド開発を担当。",
  },
];
