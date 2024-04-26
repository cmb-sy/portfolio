// import React from "react";
import "./AboutSection.css";
import { AboutLinks, MyInformations } from "./link";
import Career from "../Career/CareerSection";
import { ReactComponent as Sad } from "../../assets/SNS/github.svg";

function AboutSection() {
  return (
    <section>
      <h1>About</h1>
      <span>私について</span>

      <div className="content">
        <div className="text1">
          <div>
            <img src={MyInformations.logoPass} className="customImg" />
          </div>
          <div className="customTable">
            {AboutLinks.map((item) => (
              <a href={item.url}>
                <Sad style={{ height: `25px`, width: `25px` }}></Sad>
              </a>
            ))}
          </div>
        </div>
        <div className="text2">{MyInformations.introduction}</div>
      </div>
      <Career />
    </section>
  );
}

export default AboutSection;
