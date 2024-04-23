import React from "react";
import styles from "./Works.module.css";
import { WorkLists } from "./worksList";
function worksSection() {
  return (
    <section>
      <h1>Works</h1>
      <div className={styles.worksArea}>
        {WorkLists.map((work) => (
          <div className={styles.lwrapper_06}>
            <div className={styles.card_06}>
              <img
                className={styles.cardimg_06}
                src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg"
                alt=""
              />
              <div className={styles.cardcontent_06}>
                <p className={styles.cardtitle_06}>{work.title}</p>
                <p className={styles.cardtext_06}>{work.description}</p>
              </div>
              <div className={styles.cardlink_06}>
                <a href="/">HOME</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div classNameName="worksArea">
        {WorkLists.map((work) => (
          <div classNameName="serviceBox">
            <img src={work.imgUrl} />
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <button>sssss</button>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default worksSection;
