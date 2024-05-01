import pythonLogo from "../../assets/TechLogo/python.png";
import DjangoLogo from "../../assets/TechLogo/django.png";
import FlaskLogo from "../../assets/TechLogo/flask.png";

export type skillDetail = {
  skillTitle: string;
  imagePass?: string;
  experienceLevel: string;
  comment: string;
};

export type ProgrammingSkill = {
  skillType: "フロントエンド" | "バックエンド" | "インフラ";
  skill: skillDetail[];
};

export const ProgrammingSkills: ProgrammingSkill[] = [
  {
    skillType: "フロントエンド",
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
  {
    skillType: "バックエンド",
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
  {
    skillType: "インフラ",
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
        Title: "基本情報技術者",
      },
      {
        Title: "応用情報技術者",
      },
      {
        Title: "統計検定2級/準1級",
      },
      {
        Title: "E資格",
      },
      {
        Title: "TOEIC 810点",
      },
    ],
  },
];
