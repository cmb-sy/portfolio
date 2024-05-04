import styles from "./SkillSection.module.css";

import AccordionItem from "./Accordion";
import SkillTable from "./SkillTable";
import Heading from "../Heading/Headeing";
import Contact from "../Contact/Contact";

import { ProgrammingSkills } from "./SkillList";
import { scrollToHash } from "../scrollToHash";

const skillSection = () => {
  return (
    <div>
      <section className={styles.skillArea} id="skill" onClick={scrollToHash}>
        <div className={styles.skillContainer}>
          <Heading
            headingTitle="Skill"
            description="★の数で次の解釈をしています。
          「★☆☆☆☆: 軽く使用した程度」、「★★☆☆☆: 数ヶ月以上使用しているがもう少し習熟が必要」、「★★★☆☆: 実務レベルで時間をかけると駆使できる」、
          「★★★★☆: 実務レベルで十分に駆使できる」、「★★★★★: 完璧に理解しており実務でも困ることなく使いこなせる」。"
          />
          {ProgrammingSkills.map((item, index) => (
            <AccordionItem key={index} titleNode={<h2>{item.skillType}</h2>}>
              <SkillTable
                skillDetail={item.skill}
                tableHeading={item.tableHeading}
              />
            </AccordionItem>
          ))}
          <div className={styles.contactArea}></div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default skillSection;
