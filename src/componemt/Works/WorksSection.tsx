import React from "react";
import styles from "./Works.module.css";
import { WorkLists } from "./worksList";

function worksSection() {
  return (
    <section>
      <h1>Works</h1>
      <div className={styles.worksArea}>
        {WorkLists.map((work) => (
          <div className={styles.card_06}>
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
        ))}
      </div>
    </section>
  );
}

export default worksSection;
