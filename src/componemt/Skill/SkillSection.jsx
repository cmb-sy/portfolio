import React from "react";
import "./SkillStyle.css";
import { skillLists } from "./SkillList";

function skillSection() {
  return (
    <section>
      <h1>skill</h1>
      <div className="skillArea">
        {skillLists.map((item) => (
          <div>
            <h3 className="skillTitle">{item.skillType}</h3>
            <ul className="testerr">
              {item.skill.map((item2) => (
                <li>{item2.skillTitle}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default skillSection;
