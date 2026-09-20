import { ArrowRight, Heart, ShieldCheck, Users } from "lucide-react";
import "./AboutPreview.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Image */}
        <div className="about-image-wrapper">
          <div className="about-image-card">
            <img
              src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1000&q=85"
              alt="Cat relaxing in a comfortable environment"
              className="about-image"
            />

            <div className="about-image-badge">
              <Heart size={20} strokeWidth={2.2} />
              <div>
                <strong>Happy Cats</strong>
                <span>Happy Homes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">

          <div className="about-label">
            <span className="about-label-icon">🐾</span>
            <span>About Us</span>
          </div>

          <h2>
            Caring for Cats,
            <span> Like Family</span>
          </h2>

          <p className="about-intro">
            At AZIZ FELINES CATTERY, we believe every cat deserves a safe,
            clean and loving environment. Our goal is to provide comfortable
            care where your feline friend feels relaxed, secure and happy.
          </p>

          <p className="about-description">
            From comfortable boarding to personalized attention, we focus on
            the health, happiness and well-being of every cat entrusted to us.
            Every little detail is handled with care because we know your cat
            is an important part of your family.
          </p>

          {/* Features */}
          <div className="about-features">

            <div className="about-feature">
              <div className="about-feature-icon">
                <ShieldCheck size={23} />
              </div>

              <div>
                <h3>Safe & Hygienic</h3>
                <p>Clean, secure and comfortable surroundings.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Users size={23} />
              </div>

              <div>
                <h3>Caring Team</h3>
                <p>Experienced people who genuinely care for cats.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Heart size={23} />
              </div>

              <div>
                <h3>Personalized Care</h3>
                <p>Attention based on every cat's individual needs.</p>
              </div>
            </div>

          </div>

          <a href="/about" className="about-button">
            Know More About Us
            <ArrowRight size={18} />
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;