import { careers } from "./Career";
import "./Career.css";
function CareerSection() {
  return (
    <section>
      {careers.map((item) => (
        <ul className="timeline">
          <li>
            <p className="timeline-date">{item.date}</p>
            <div className="timeline-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        </ul>
      ))}
    </section>
  );
}
export default CareerSection;
