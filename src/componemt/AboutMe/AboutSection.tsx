// import React from "react";
import "./AboutSection.css";
import { AboutLinks, Introductions } from "./link";
function AboutSection() {
  return (
    <section id="about">
      <h1>About</h1>
      <span>私について</span>

      <div className="content">
        <div className="text1">
          <div>
            <img src={Introductions.logoPass} className="customImg" />
          </div>
          <div className="customTable">
            {AboutLinks.map((item) => (
              <a href={item.url}>
                <img
                  src={item.imagePass}
                  style={{ height: `25px`, width: `25px` }}
                ></img>
              </a>
            ))}
          </div>
        </div>
        <div className="text2">{Introductions.introduction}</div>
      </div>
    </section>
  );
}

export default AboutSection;
