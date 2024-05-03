import "./SkillStyle.css";
import { skillDetail, skillTable } from "./SkillList";

type Props = {
  skillDetail: skillDetail[];
  tableHeading: skillTable["tableHeading"];
};

function SkillTable(props: Props) {
  return (
    <div className="skillArea">
      <div className="skillArea2">
        <div>
          <table className="Table">
            <thead className="Table-Head">
              <tr className="Table-Head-Row">
                {props.tableHeading.map((heading, index) => (
                  <th
                    key={`heading-${index}`}
                    className={`Table-Head-Row-Cell${index + 1}`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.skillDetail.map((item, index) => (
                <tr key={`row-${index}`} className="Table-Body-Row">
                  <td className="Table-Body-Row-Cell1">
                    {item.imagePass && (
                      <img
                        src={item.imagePass}
                        alt="Skill Icon"
                        className="customSvg"
                      />
                    )}
                    <span className="skillTitle">{item.tableLeftCell}</span>
                  </td>
                  <td className="Table-Body-Row-Cell2">
                    {item.tableCenterCell}
                  </td>
                  <td className="Table-Body-Row-Cell3">
                    {item.tableRightCell}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SkillTable;
