import pythonLogo from "../../assets/TechLogo/python.png";
import DjangoLogo from "../../assets/TechLogo/django.png";
import FlaskLogo from "../../assets/TechLogo/flask.png";

export type skillDetail = {
  tableLeftCell: string;
  imagePass?: string;
  tableCenterCell: string;
  tableRightCell: string;
};

export type skillTable = {
  skillType: string;
  tableHeading: string[];
  skill: skillDetail[];
};

export const ProgrammingSkills: skillTable[] = [
  {
    skillType: "フロントエンド",
    tableHeading: ["aaa", "ssss", "sidklns"],
    skill: [
      {
        tableLeftCell: "python",
        imagePass: pythonLogo,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "django",
        imagePass: DjangoLogo,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "flask",
        imagePass: FlaskLogo,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
    ],
  },
  {
    skillType: "バックエンド",
    tableHeading: ["aaa", "ssss", "sidklns"],
    skill: [
      {
        tableLeftCell: "python",
        imagePass: pythonLogo,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "django",
        imagePass: DjangoLogo,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "flask",
        imagePass: FlaskLogo,
        tableCenterCell: "★★★☆☆",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
    ],
  },
  {
    skillType: "certificate",
    tableHeading: ["資格名", "取得日時", "取得理由"],
    skill: [
      {
        tableLeftCell: "FE/AP",
        tableCenterCell: "xxxx/xx/xx",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "統計検定2級/準1級",
        tableCenterCell: "xxxx/xx/xx",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "E資格",
        tableCenterCell: "xxxx/xx/xx",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
      {
        tableLeftCell: "TOEIC810点",
        tableCenterCell: "xxxx/xx/xx",
        tableRightCell:
          "numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。numpy, matplotlibを通して機械学習のモデルを作成。Django, Flaskを用いてアプリケーションを開発。",
      },
    ],
  },
];
