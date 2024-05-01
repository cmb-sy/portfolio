import "./SkillStyle.css";
import { ProgrammingSkill, skillDetail } from "./SkillList";

type Props = {
  skill: skillDetail[];
};

function SkillTable(props: Props) {
  return (
    <div className="skillArea">
      <div className="skillArea2">
        <div>
          <table className="Table">
            <thead className="Table-Head">
              <tr className="Table-Head-Row">
                <th className="Table-Head-Row-Cell1">Tech</th>
                <th className="Table-Head-Row-Cell2">Level</th>
                <th className="Table-Head-Row-Cell3">Content</th>
              </tr>
            </thead>
            {props.skill.map((item2) => (
              <tbody className="Table-Body">
                <tr className="Table-Body-Row">
                  <td className="Table-Body-Row-Cell">
                    <div className="testtest">
                      <img src={item2.imagePass} className="customSvg" />
                      <span className="skillTitle">{item2.skillTitle}</span>
                    </div>
                  </td>
                  <td className="Table-Body-Row-Cell">
                    {item2.experienceLevel}
                  </td>
                  <td className="Table-Body-Row-Cell2">{item2.comment}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default SkillTable;
