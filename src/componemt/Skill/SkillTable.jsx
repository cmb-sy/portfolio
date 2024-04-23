import React from "react";
import "./SkillStyle.css";
import { ProgrammingSkills } from "./SkillList";

function SkillTable() {
  return (
    <div className="skillArea">
      <div className="skillArea2">
        {ProgrammingSkills.map((item) => (
          <div>
            <table className="Table">
              <thead className="Table-Head">
                <tr class="Table-Head-Row">
                  <th className="Table-Head-Row-Cell">技術</th>
                  <th className="Table-Head-Row-Cell">経験年数 / 得意度</th>
                  <th className="Table-Head-Row-Cell">内容</th>
                </tr>
              </thead>
              {item.skill.map((item2) => (
                <tbody className="Table-Body">
                  <tr className="Table-Body-Row">
                    <td className="Table-Body-Row-Cell">{item2.skillTitle}</td>
                    <td className="Table-Body-Row-Cell">
                      {item2.experienceLevel}
                    </td>
                    <td className="Table-Body-Row-Cell">{item2.comment}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillTable;
