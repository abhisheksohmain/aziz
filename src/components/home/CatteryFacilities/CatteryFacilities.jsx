import {
  ShieldCheck,
  Home,
  Sparkles,
  Utensils,
  Heart,
  ArrowRight,
} from "lucide-react";
import "./CatteryFacilities.css";

const facilities = [
  {
    icon: Home,
    title: "Comfortable Rooms",
    text: "Peaceful and cozy spaces where every cat can relax comfortably.",
  },
  {
    icon: Sparkles,
    title: "Clean & Hygienic",
    text: "Regularly cleaned spaces designed to maintain a fresh and hygienic environment.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    text: "A secure setting where your feline companion can stay with peace of mind.",
  },
  {
    icon: Utensils,
    title: "Fresh Meals & Water",
    text: "Fresh food and clean drinking water provided according to your cat's routine.",
  },
  {
    icon: Heart,
    title: "Individual Attention",
    text: "Personal care and attention based on each cat's comfort and personality.",
  },
];

const CatteryFacilities = () => {
  return (
    <section className="cattery-section">
      <div className="cattery-container">

        {/* LEFT CONTENT */}
        <div className="cattery-content">

          <div className="cattery-label">
            <span>🐾</span>
            Our Cattery
          </div>

          <h2>
            A Comfortable
            <span>Home Away From Home</span>
          </h2>

          <p className="cattery-intro">
            At AZIZ FELINES CATTERY, we believe that your cat deserves more
            than just a place to stay. Our environment is thoughtfully
            designed to provide comfort, cleanliness, safety and loving care.
          </p>

          <div className="cattery-features">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <div className="cattery-feature" key={facility.title}>
                  <div className="cattery-feature-icon">
                    <Icon size={21} strokeWidth={1.9} />
                  </div>

                  <div>
                    <h3>{facility.title}</h3>
                    <p>{facility.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a href="/gallery" className="cattery-button">
            Explore Our Cattery
            <ArrowRight size={18} />
          </a>

        </div>

        {/* RIGHT VISUAL */}
        <div className="cattery-visual">

          <div className="cattery-main-image">
            <img
              src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85"
              alt="Comfortable cat relaxing"
              loading="lazy"
            />
          </div>

          <div className="cattery-badge">
            <Heart size={19} fill="currentColor" />
            <div>
              <strong>Loved & Cared For</strong>
              <span>Every single day</span>
            </div>
          </div>

          <div className="cattery-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CatteryFacilities;