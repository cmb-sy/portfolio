export type ProgrammingSkill = {
  skillType: "ProgrammingSkill";
  skill: {
    skillTitle: string;
    imageUrl?: string;
    experienceYear: string;
    comment: string;
  }[];
};

export type Certificate = {
  skillType: "Certificate";
  skill: {
    Title: string;
    imageUrl?: string;
  }[];
};

export const ProgrammingSkills: ProgrammingSkill[] = [
  {
    skillType: "ProgrammingSkill",
    skill: [
      {
        skillTitle: "python",
        imageUrl:
          "/Users/snakashima/develop/nakashima/portfolio/src/assets/Python_logo_01.svg",
        experienceYear: "3年",
        comment:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        skillTitle: "python",
        experienceYear: "a",
        comment: "aaa",
      },
    ],
  },
];

export const Certificates: Certificate[] = [
  {
    skillType: "Certificate",
    skill: [
      {
        Title: "python",
      },
      {
        Title: "javascript",
      },
    ],
  },
];
