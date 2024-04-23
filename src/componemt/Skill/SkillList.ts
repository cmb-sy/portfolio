export type ProgrammingSkill = {
  skillType: "ProgrammingSkill";
  skill: {
    skillTitle: string;
    imageUrl?: string;
    experienceLevel: string;
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
        experienceLevel: "⭐️⭐️⭐️⭐️",
        comment:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        skillTitle: "python",
        experienceLevel: "2年(業務)／1年(プライベート)",
        comment: "aaa",
      },
      {
        skillTitle: "python",
        experienceLevel: "2年(業務)／1年(プライベート)",
        comment: "aaa",
      },
      {
        skillTitle: "python",
        experienceLevel: "2年(業務)／1年(プライベート)",
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
      {
        Title: "python",
      },
      {
        Title: "javascript",
      },
    ],
  },
];
