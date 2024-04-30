import pythonLogo from "../../assets/TechLogo/python.png";
import DjangoLogo from "../../assets/TechLogo/django.png";
import FlaskLogo from "../../assets/TechLogo/flask.png";

export type AccordionType = {
  overview: string;
};

export const accordionData: AccordionType[] = [
  {
    overview: "フロントエンド",
  },
  {
    overview: "バックエンド",
  },
  {
    overview: "インフラ",
  },
  {
    overview: "資格",
  },
];

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

export type ProgrammingSkill = {
  skillType: "ProgrammingSkill";
  skill: {
    skillTitle: string;
    imagePass?: string;
    experienceLevel: string;
    comment: string;
  }[];
};

export const ProgrammingSkills: ProgrammingSkill[] = [
  {
    skillType: "ProgrammingSkill",
    skill: [
      {
        skillTitle: "python",
        imagePass: pythonLogo,
        experienceLevel: "★★★☆☆",
        comment:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        skillTitle: "django",
        imagePass: DjangoLogo,
        experienceLevel: "★★★☆☆",
        comment:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        skillTitle: "flask",
        imagePass: FlaskLogo,
        experienceLevel: "★★★☆☆",
        comment:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
    ],
  },
];

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

export type Certificate = {
  skillType: "Certificate";
  skill: {
    Title: string;
    imgaePass?: string;
  }[];
};

export const Certificates: Certificate[] = [
  {
    skillType: "Certificate",
    skill: [
      {
        Title: "python",
        imgaePass: "a",
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
