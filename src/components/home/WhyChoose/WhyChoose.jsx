import {
  ShieldCheck,
  Heart,
  UsersRound,
  Clock3,
  ArrowRight,
} from "lucide-react";
import "./WhyChoose.css";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    text: "A clean, secure and comfortable environment designed for your cat's well-being.",
  },
  {
    icon: Heart,
    title: "Loving & Personal Care",
    text: "Every cat receives gentle attention and care according to their individual needs.",
  },
  {
    icon: UsersRound,
    title: "Experienced Caring Team",
    text: "Our team treats every feline guest with patience, care and genuine affection.",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    text: "Your cat's comfort and safety remain our priority throughout their stay.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" id="why-choose-us">
      <div className="why-container">

        {/* Heading */}
        <div className="why-heading">
          <div className="why-label">
            <span>🐾</span>
            Why Choose Us
          </div>

          <h2>
            Because Your Cat
            <span>Deserves The Best</span>
          </h2>

          <p>
            We create a peaceful, clean and caring environment where every
            feline guest can feel safe, comfortable and loved.
          </p>
        </div>

        {/* Cards */}
        <div className="why-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article className="why-card" key={feature.title}>

                <div className="why-card-number">
                  0{index + 1}
                </div>

                <div className="why-icon">
                  <Icon size={27} strokeWidth={1.9} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

                <div className="why-card-line" />

                <span className="why-card-arrow">
                  <ArrowRight size={17} />
                </span>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;