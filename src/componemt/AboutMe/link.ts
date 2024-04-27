import myLogo from "../../assets/about/kunst.jpg";
import githubLogo from "../../assets/about/github.png";
import mailLogo from "../../assets/about/mail.png";

export type Introduction = {
  name: string;
  introduction: string;
  logoPass?: string;
};

export const Introductions: Introduction = {
  name: "kunst",
  introduction:
    "私は、優れた結果を提供することに情熱を持ったフルスタック開発者です。フロントエンドの React と NextJS、バックエンドの PHP、CodeIgniter、NodeJS、Express の専門知識を活かして、私が取り組んでいるすべてのプロジェクトに技術スキルと創造的な問題解決の独自の組み合わせをもたらします。",
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
