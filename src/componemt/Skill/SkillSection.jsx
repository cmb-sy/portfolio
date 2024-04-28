import React from "react";
import "./SkillStyle.css";
import { ProgrammingSkills } from "./SkillList";

function skillSection() {
  return (
    <section>
      <div className="skillArea">
        <div className="skillArea2">
          {ProgrammingSkills.map((item) => (
            <div>
              <table className="Table">
                <thead className="Table-Head">
                  <tr class="Table-Head-Row">
                    <th className="Table-Head-Row-Cell">技術</th>
                    <th className="Table-Head-Row-Cell">技術</th>
                  </tr>
                </thead>
                {item.skill.map((item2) => (
                  <tbody className="Table-Body">
                    <tr className="Table-Body-Row">
                      <td className="Table-Body-Row-Cell">
                        {item2.skillTitle}
                      </td>
                      <td className="Table-Body-Row-Cell">
                        {item2.comment}aaaaa
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default skillSection;
