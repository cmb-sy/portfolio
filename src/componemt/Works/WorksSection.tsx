import styles from "./Works.module.css";
import Heading from "../CommonHeadeing";
import { WorkLists } from "./worksList";

function worksSection() {
  return (
    <section id="work">
      <div className={styles.workArea}>
        <Heading
          headingTitle="Work"
          description="過去に学習を目的として作成した作品を載せておきます。"
        />
        <div className={styles.worksArea}>
          {WorkLists.map((work) => (
            <a href={work.sourceUrl} className={styles.yyy}>
              <div className={styles.card}>
                <img className={styles.cardimg_06} src={work.imgUrl} alt="" />
                <div className={styles.cardlink_06}>
                  <div className={styles.testkk}>
                    {work.tag.map((item) => (
                      <span>{item}</span>
                    ))}
                  </div>
                  <div className={styles.cardcontent_06}>
                    <p className={styles.cardtitle_06}>{work.title}</p>
                    <span className={styles.carddescription}>
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

export default worksSection;
