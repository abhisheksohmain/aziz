
import "./ServicesHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <img
        src={`${import.meta.env.BASE_URL}images/services-hero.png`}
        alt="AZIZ FELINES CATTERY - Our Services"
        className="services-hero-image"
      />
    </section>
  );
}
 
 