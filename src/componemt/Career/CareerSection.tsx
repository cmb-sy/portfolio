import { careers } from "./Career";
import "./Career.css";
import Heading from "../CommonHeadeing";

function CareerSection() {
  return (
    <section id="career" className="career-area">
      <div className="container">
        <Heading
          headingTitle="Career"
          description="過去の経歴を振り返ります。"
        />

        <div>
          {careers.map((item) => (
            <div className="container2">
              <div className="timeline-item" date-is={item.date}>
                <div className="text-box">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CareerSection;
