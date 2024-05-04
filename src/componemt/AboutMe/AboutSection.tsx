import styles from "./AboutSection.module.css";

import Heading from "../Heading/Headeing";
import { AboutLinks, Introductions } from "./link";

function AboutSection() {
  return (
    <section id="about">
      <div className={styles.aboutContainer}>
        <Heading headingTitle="About Me" description="私について" />
        <div className={styles.contents}>
          <div className={styles.leftItem}>
            <div>
              <img src={Introductions.logoPass} className={styles.myIcon} />
            </div>
            <div className={styles.customTable}>
              {AboutLinks.map((item) => (
                <a href={item.url} key={item.url}>
                  <img
                    src={item.imagePass}
                    className={styles.snsIcon}
                    alt="sns icon"
                  ></img>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.rightItem}>
            {Introductions.introduction.map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
