import myLogo from "../../assets/about/kunst.jpg";
import githubLogo from "../../assets/about/github.png";
import mailLogo from "../../assets/about/mail.png";

export type Introduction = {
  name: string;
  introduction: string[];
  logoPass?: string;
};

export const Introductions: Introduction = {
  name: "kunst",
  introduction: [
    "こんにちは、kunstと言います。",
    "フロントエンドエンジニアとして働く傍ら、データサイエンスの世界でも活動しています。\n" +
      "静的型付けの言語やインフラ、そして機械学習に興味があります。ITの最先端を使って課題を解決したいと思っています。",
    "今年は統計検定1級とSC、英会話に挑戦中です。",
  ],
  logoPass: myLogo,
};

// --------------------------------------------------------------------
export type AboutLink = {
  name: string;
  imagePass: string;
  url?: string;
};

export const AboutLinks: AboutLink[] = [
  {
    name: "Github",
    imagePass: githubLogo,
    url: "https://docs.github.com/ja",
  },
  {
    name: "Github",
    imagePass: mailLogo,
    url: "mailto:cmbsy.quant;gmail.com",
  },
];
