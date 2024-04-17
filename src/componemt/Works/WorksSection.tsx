import React from "react";
import "./WorksStyle.css";
import { WorkLists } from "./worksList";
function worksSection() {
  return (
    <section>
      <h1>Works</h1>
      <div className="worksArea">
        {WorkLists.map((work) => (
          <div className="l-wrapper_06">
            <div className="card_06">
              <img
                className="card-img_06"
                src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg"
                alt=""
              />
              <div className="card-content_06">
                <p className="card-title_06">{work.title}</p>
                <p className="card-text_06">{work.description}</p>
              </div>
              <div className="card-link_06">
                <a href="#">HOME</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div classNameName="worksArea">
        {WorkLists.map((work) => (
          <div classNameName="serviceBox">
            <img src={work.imgUrl} />
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <button>sssss</button>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default worksSection;
