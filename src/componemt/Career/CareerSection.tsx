import { careers } from "./Career";

function CareerSection() {
  return (
    <section id="career">
      {careers.map((item) => (
        <li>{item.name}</li>
      ))}
    </section>
  );
}

export default CareerSection;
