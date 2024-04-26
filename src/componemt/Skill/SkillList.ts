import pythonLogo from "../../assets/TechLogo/python.png";
import DjangoLogo from "../../assets/TechLogo/django.png";
import FlaskLogo from "../../assets/TechLogo/flask.png";

export type ProgrammingSkill = {
  skillType: "ProgrammingSkill";
  skill: {
    skillTitle: string;
    imagePass?: string;
    experienceLevel: string;
    comment: string;
  }[];
};

export type Certificate = {
  skillType: "Certificate";
  skill: {
    Title: string;
    imgaePass?: string;
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
