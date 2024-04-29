import "./ContactStyle.css";
import Heading from "../CommonHeadeing";

function Contact() {
  return (
    <section id="contact" className="contactArea">
      <div className="container-contact">
        <Heading
          headingTitle="Contact"
          description="ブログの内容に誤りがある場合や、GitHub上のコードについてのご指摘がある場合は、こちらからご連絡ください。メールの返信には時間を要する場合がありますので、予めご了承ください。"
        />
        <br />
        <a href="mailto:cmbsy.quant;gmail.com" className="btn_blue">
          <span className="bl__text">Get in touch</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
