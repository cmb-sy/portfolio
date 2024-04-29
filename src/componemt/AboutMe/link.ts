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
    "こんにちは、kunstと言います。" +
      "フロントエンドエンジニア兼、データサイエンティストとして活動しています。" +
      "静的型付けの言語やインフラ、そして機械学習に興味があります。最先端技術を使って課題を解決したいと思っています。" +
      "趣味は、山登り/サウナ/筋トレ/読書/散策です。未知の土地へ行くのが好きです。" +
      "今年は、統計検定1級/SC/英会話に挑戦したいと思っています。",
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
