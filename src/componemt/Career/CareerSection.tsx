import { careers } from "./Career";
import "./Career.css";
function CareerSection() {
  return (
    <section>
      <h1>BackGround</h1>
      <span>test</span>
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
