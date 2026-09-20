import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="home-hero">

      {/* HERO IMAGE */}
      <img
        className="hero-bg-image"
        src={`${import.meta.env.BASE_URL}images/home-hero-cat1.png`}
        alt="AZIZ FELINES CATTERY"
      />

      {/* SOFT OVERLAY */}
      <div className="hero-shade" aria-hidden="true"></div>

      {/* HERO CONTENT */}
      {/* <div className="container hero-content">
        <div className="hero-copy">
          <Link to="/services" className="btn hero-btn">
            Explore Our Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div> */}

    </section>
  );
}