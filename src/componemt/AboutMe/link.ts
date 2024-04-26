import myLogo from "../../assets/myLogo.jpg";
export type MyInformation = {
  name: string;
  introduction: string;
  logoPass: string;
};

export const MyInformations: MyInformation = {
  name: "kunst",
  introduction:
    "私は、優れた結果を提供することに情熱を持ったフルスタック開発者です。フロントエンドの React と NextJS、バックエンドの PHP、CodeIgniter、NodeJS、Express の専門知識を活かして、私が取り組んでいるすべてのプロジェクトに技術スキルと創造的な問題解決の独自の組み合わせをもたらします。",
  logoPass: myLogo,
};

export type AboutLink = {
  name: string;
  imagePass: string;
  url?: string;
};

export const AboutLinks: AboutLink[] = [
  {
    name: "Github",
    imagePass: "../../assets/images/SNS/github.svg",
    url: "https://docs.github.com/ja",
  },
  {
    name: "Github",
    imagePass: "../../assets/images/SNS/github.svg",
    url: "https://docs.github.com/ja",
  },
];
