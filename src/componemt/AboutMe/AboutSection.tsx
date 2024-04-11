import React from "react";
import "./AboutSection.css";

import { AboutLinks } from "./link";

function AboutSection() {
  return (
    <section className="tester">
      <h2>test</h2>
      <div className="content">
        <div className="text1">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/63276819?v=4"
              className="customImg"
            />
          </div>
          <div className="customTable">
            {AboutLinks.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
        </div>
        <div className="text2">簡単な自己紹介？</div>
      </div>
    </section>
  );
}

export default AboutSection;
