import { careers } from "./Career";
import "./Career.css";
function CareerSection() {
  return (
    <section>
      <h2>BackGround</h2>
      <span>経歴</span>
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
