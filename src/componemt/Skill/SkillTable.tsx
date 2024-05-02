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
            {props.skillDetail.map((item2) => (
              <tbody className="Table-Body">
                <tr className="Table-Body-Row">
                  <td className="Table-Body-Row-Cell">
                    <div className="testtest">
                      <img src={item2.imagePass} className="customSvg" />
                      <span className="skillTitle">{item2.tableLeftCell}</span>
                    </div>
                  </td>
                  <td className="Table-Body-Row-Cell">
                    {item2.tableCenterCell}
                  </td>
                  <td className="Table-Body-Row-Cell2">
                    {item2.tableRightCell}
                  </td>
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
