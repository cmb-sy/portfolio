import AccordionItem from "./Accordion";
import Skill from "../Skill/SkillTable";
import "./Test.css";
import Heading from "../CommonHeadeing";

export type AccordionType = {
  overview: string;
  detail: string | string[];
};

const accordionData: AccordionType[] = [
  {
    overview: "python",
    detail:
      "詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト",
  },
  {
    overview: "フロントエンド",
    detail:
      "詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト",
  },
  {
    overview: "フロントエンド",
    detail:
      "詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト",
  },
  {
    overview: "フロントエンド",
    detail:
      "詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト詳細テキスト",
  },
];

const scrollToHash = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault(); // デフォルトのクリック動作を無効化
  const elmHash = event.currentTarget.getAttribute("href");
  if (elmHash) {
    const targetElement = document.querySelector(elmHash);
    if (targetElement) {
      const pos =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  }
};

const Menu = () => {
  return (
    <section className="test1" id="skill" onClick={scrollToHash}>
      <Heading headingTitle="Skill" headingSubTitle="技術" />
      {accordionData.map((item, index) => (
        <AccordionItem key={index} titleNode={<h2>{item.overview}</h2>}>
          <Skill />
          {/* <span>{item.detail}</span> */}
        </AccordionItem>
      ))}
    </section>
  );
};

export default Menu;
