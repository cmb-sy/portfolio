import { careers } from "./Career";
import "./Career.css";
import Heading from "../CommonHeadeing";

function CareerSection() {
  return (
    <section id="career">
      <Heading headingTitle="Career" headingSubTitle="経歴" />
      {careers.map((item) => (
        <div className="container">
          <div className="timeline-item" date-is={item.date}>
            <div className="text-box">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
export default CareerSection;
