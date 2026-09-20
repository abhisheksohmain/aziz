import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="home-hero">

      {/* BACKGROUND IMAGE */}

      <img
  src={`${import.meta.env.BASE_URL}images/home-hero-cat.png`}
  alt="AZIZ FELINES CATTERY logo"
/>

      {/* SOFT OVERLAY */}
      <div className="hero-shade"></div>

      {/* ONLY BUTTON */}
      <div className="container hero-content">
        <div className="hero-copy">
          <Link to="/services" className="btn hero-btn">
            Explore Our Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </section>
  );
}