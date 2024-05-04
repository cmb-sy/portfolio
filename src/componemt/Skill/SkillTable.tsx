import styles from "./SkillTable.module.css";
import { skillDetail, skillTable } from "./SkillList";

type Props = {
  skillDetail: skillDetail[];
  tableHeading: skillTable["tableHeading"];
};

function SkillTable(props: Props) {
  return (
    <div className={styles.skillArea}>
      <table className={styles.Table}>
        <thead className={styles["Table-Head"]}>
          <tr className={styles["Table-Head-Row"]}>
            {props.tableHeading.map((heading, index) => (
              <th
                key={`heading-${index}`}
                className={styles[`Table-Head-Row-Cell${index + 1}`]}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.skillDetail.map((item, index) => (
            <tr key={`row-${index}`} className={styles["Table-Body-Row"]}>
              <td className={styles["Table-Body-Row-Cell1"]}>
                {item.imagePass && (
                  <img
                    src={item.imagePass}
                    alt="Skill Icon"
                    className={styles.customSvg}
                  />
                )}
                <span className={styles.skillTitle}>{item.tableLeftCell}</span>
              </td>
              <td className={styles["Table-Body-Row-Cell2"]}>
                {item.tableCenterCell}
              </td>
              <td className={styles["Table-Body-Row-Cell3"]}>
                {item.tableRightCell}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SkillTable;
