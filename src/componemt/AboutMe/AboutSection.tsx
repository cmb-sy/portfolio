// import React from "react";
import "./AboutSection.css";
import { AboutLinks, Introductions } from "./link";
import Heading from "../CommonHeadeing";

function AboutSection() {
  return (
    <section id="about" className="aboutArea">
      <Heading headingTitle="About" headingSubTitle="私について" />

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
        <div className="text2">
          {Introductions.introduction.map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
          <button>aa</button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
