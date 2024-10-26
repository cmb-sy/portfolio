import styles from "./Footer.module.css";
import chevron from "../../assets/chevron.svg";
import { smoothScroll } from "../../../portfolio/src/app/component/NavigationBar/smoothScroll";

function Footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>Thank you for Watching</p>
      </div>
      <div className={styles.backToTop}>
        <a
          href="#home"
          className={styles.circle}
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("#home");
          }}
        >
          <img src={chevron} alt="Chevron Icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
