import React from "react";
import "./ServicesHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <img
        className="services-hero-image"
        src={`${import.meta.env.BASE_URL}images/services-hero.png`}
        alt="AZIZ FELINES CATTERY Services"
      />
    </section>
  );
}