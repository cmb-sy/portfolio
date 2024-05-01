import "./AboutSection.css";
import { AboutLinks, Introductions } from "./link";
import Heading from "../Heading/CommonHeadeing";

function AboutSection() {
  return (
    <section id="about" className="about-area">
      <div className="about-container">
        <Heading headingTitle="About" description="私について" />
        <div className="contents">
          <div className="left-item">
            <div>
              <img src={Introductions.logoPass} className="my-icon" />
            </div>
            <div className="customTable">
              {AboutLinks.map((item) => (
                <a href={item.url}>
                  <img src={item.imagePass} className="sns-icon"></img>
                </a>
              ))}
            </div>
          </div>
          <div className="right-item">
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
