import { services } from "@/config/site";

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="h2">
          Services
        </h2>
        <ul className="services">
          {services.map((s, i) => (
            <li key={s.title} className="service">
              <span className="service__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}