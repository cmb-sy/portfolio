import { careers } from "./Career";
import "./Career.css";
function CareerSection() {
  return (
    <section>
      <h1>aaa</h1>
      {careers.map((item) => (
        <div className="container">
          <div className="timeline-item" date-is={item.date}>
            <div className="text-box">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
export default CareerSection;
