import AccordionItem from "./Accordion";
import Skill from "./SkillTable";
import "./SkillSection.css";
import Heading from "../CommonHeadeing";
import Contact from "../Contact/Contact";

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
    <div>
      <section className="skill-area" id="skill" onClick={scrollToHash}>
        <div className="skill-container">
          <Heading
            headingTitle="Skill"
            description="★の数で次の解釈をしています。
          「1個: 軽く使用した程度」、「2個: 数ヶ月以上使用しているがもう少し習熟が必要」、「3個: 実務レベルで時間をかけると駆使できる」、
          「4個: 実務レベルで十分に駆使できる」 "
          />
          {accordionData.map((item, index) => (
            <AccordionItem key={index} titleNode={<h2>{item.overview}</h2>}>
              <Skill />
            </AccordionItem>
          ))}
          <div className="contact-area"></div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Menu;
