import taskManage from "../../assets/worksImage/taskManage.png";
import nyanko from "../../assets/worksImage/nyankoGenerator.png";
import omikuzi from "../../assets/worksImage/omikuzi.png";

export type WorkList = {
  title: string;
  tag: string[];
  description: string;
  imgUrl?: string;
  sourceUrl?: string;
};

export const WorkLists: WorkList[] = [
  {
    title: "カンバン式タスク管理ツール",
    tag: ["#python", "#Django"],
    description:
      "カンバン方式でタスクを管理するアプリケーション。仕事用に欲しく開発してみました。",
    imgUrl: taskManage,
    sourceUrl: "https://github.com/cmb-sy/Manage-Tasks-with-Kanban-board",
  },
  {
    title: "にゃんこGenerator",
    tag: ["#REACT", "#Typescript"],
    description:
      "REACT学習を目的として猫画像を眺めるアプリケーションを開発しました。",
    imgUrl: nyanko,
    sourceUrl: "https://github.com/cmb-sy/nyanko-generator",
  },
  {
    title: "媚みくじ",
    tag: ["#python", "#Flask"],
    description:
      "ハッカソンで作成した、おみくじに遊び要素を組み入れたアプリケーション。",
    imgUrl: omikuzi,
    sourceUrl: "https://github.com/cmb-sy/Omikuji",
  },
];
