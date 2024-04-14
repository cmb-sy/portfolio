export type SkillList = {
  skillType: "プログラミングスキル" | "保有資格";
  skill: {
    skillTitle: string;
    image?: HTMLImageElement | string;
  }[];
};

export const skillLists: SkillList[] = [
  {
    skillType: "プログラミングスキル",
    skill: [
      {
        skillTitle: "python",
      },
      {
        skillTitle: "javascript",
      },
    ],
  },
  {
    skillType: "保有資格",
    skill: [
      {
        skillTitle: "基本情報",
      },
      {
        skillTitle: "test4",
      },
    ],
  },
];
