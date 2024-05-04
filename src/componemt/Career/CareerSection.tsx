import styles from "./Career.module.css";
import Heading from "../Heading/CommonHeadeing";
import { careers } from "./Career";

function CareerSection() {
  return (
    <section id="career" className={styles.careerArea}>
      <div>
        <Heading
          headingTitle="Career"
          description="過去の経歴を振り返ります。"
        />

        {careers.map((item) => (
          <div className={styles.careerContainer}>
            <div className={styles.timelineItem} date-is={item.date}>
              <div className={styles.textBox}>
                <h3>{item.name}</h3>
                <p className={styles.timelineDescription}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CareerSection;
