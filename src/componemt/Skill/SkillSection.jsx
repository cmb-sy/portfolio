import React from "react";
import "./SkillStyle.css";
import { ProgrammingSkills, Certificates } from "./SkillList";

function skillSection() {
  return (
    <section>
      <h1>skill</h1>
      <div className="skillArea">
        <div className="skillArea2">
          {ProgrammingSkills.map((item) => (
            <div>
              <h3 className={`text-sky-400`}>{item.skillType}</h3>
              <table>
                <thead>
                  <th className="testerr2">技術</th>
                  <th className="testerr4">技術</th>
                </thead>
                {item.skill.map((item2) => (
                  <tbody>
                    <tr>
                      <td className="testerr">{item2.skillTitle}</td>
                      <td className="testerr">{item2.comment}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ))}
        </div>
        <div className="skillArea2">
          {Certificates.map((item) => (
            <div>
              <h3 className="skillTitle">{item.skillType}</h3>
              <table>
                <thead>
                  <th scope="col">技術</th>
                </thead>
                {item.skill.map((item2) => (
                  <tbody>
                    <tr>
                      <td className="testerr">{item2.Title}</td>
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
