import "./Footer.css";
import chevron from "../../assets/chevron.svg";

function Footer() {
  const smoothScroll = (href: string) => {
    const targetSection = document.querySelector(href) as HTMLElement;
    if (targetSection) {
      const sectionTop = targetSection.getBoundingClientRect().top;
      const currentPos = window.scrollY;
      const gap = 84;
      const target = sectionTop + currentPos - gap + 20;

      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="test">
        <p className="tester">Thank you Watching</p>
      </div>
      <div className="backer">
        <a
          href="#about"
          className="circle"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("#about");
          }}
        >
          <img src={chevron} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
