import styles from "./Contact.module.css";
import Heading from "../Heading/Headeing";

function Contact() {
  return (
    <div id="contact" className={styles.contactArea}>
      <div className={styles.contactContainer}>
        <Heading
          headingTitle="Contact"
          description="ブログの内容に誤りがある場合や、GitHub上のコードについてのご指摘がある場合は、こちらからご連絡ください。メールの返信には時間を要する場合がありますので、予めご了承ください。"
        />
        <br />
        <a href="mailto:cmbsy.quant;gmail.com" className={styles.contactBtn}>
          <span className={styles.ContactText}>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
