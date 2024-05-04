import styles from "./Works.module.css";
import Heading from "../Heading/Headeing";
import { WorkLists } from "./worksList";

function WorksSection() {
  // 関数名をPascalCaseに変更
  return (
    <section id="work">
      <div className={styles.workArea}>
        <Heading headingTitle="Work" description="過去に作成した作品です。" />
        <div className={styles.worksArea}>
          {WorkLists.map((work) => (
            <a href={work.sourceUrl} className={styles.workLink}>
              <div className={styles.card}>
                <img className={styles.cardImg} src={work.imgUrl} alt="work" />
                <div className={styles.cardLink}>
                  <div className={styles.tagContainer}>
                    {work.tag.map((item) => (
                      <span className={styles.tag}>{item}</span>
                    ))}
                  </div>
                  <div className={styles.cardContent}>
                    <p className={styles.cardTitle}>{work.title}</p>
                    <span className={styles.cardDescription}>
                      {work.description}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorksSection; // 関数名をPascalCaseに変更
