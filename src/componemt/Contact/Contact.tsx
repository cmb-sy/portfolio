import "./ContactStyle.css";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <br />
      <br />
      <p style={{ lineHeight: `2`, margin: `5px` }}>
        ブログの内容に誤りがある場合や、GitHub上のコードについてのご指摘がある場合は、
        こちらからご連絡ください。メールの返信には時間を要する場合がありますので、予めご了承ください。
      </p>
      <br />

      <a href="mailto:cmbsy.quant;gmail.com" className="btn_blue">
        <span className="bl__text">Get in touch</span>
      </a>
    </section>
  );
}

export default Contact;
