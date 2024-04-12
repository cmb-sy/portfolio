import React from "react";
import "./WorksStyle.css";
import { WorkLists } from "./worksList";
function worksSection() {
  return (
    <section>
      <h1>Works</h1>
      <div className="worksArea">
        {WorkLists.map((work) => (
          <div className="serviceBox">
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default worksSection;
