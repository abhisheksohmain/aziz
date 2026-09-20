
import "./PhilosophySection.css";

export default function PhilosophySection() {
  return (
    <section className="philosophy-section">
      <div className="philosophy-container">

        {/* Heading */}
        <div className="philosophy-heading">
          <span className="philosophy-kicker">
            The Philosophy Behind AZIZ FELINES CATTERY
          </span>

          <h2 className="philosophy-title">
            The Philosophy Behind AZIZ FELINES CATTERY
          </h2>
        </div>

        {/* Quote */}
        <div className="philosophy-quote">
          <span className="philosophy-quote-mark">“</span>

          <p>
            Every cat deserves to be treated with patience, respect and
            genuine care—not simply as a pet, but as a member of the family.
          </p>
        </div>

        {/* Philosophy Content */}
        <div className="philosophy-body">
          <p>
            This philosophy continues to shape the way AZIZ FELINES CATTERY
            approaches its work.
          </p>

          <p>
            Aziz believes that good cat care requires more than technical
            services. It requires patience, observation, responsible
            handling, cleanliness, communication and compassion.
          </p>

          <p>
            Every cat has a different personality.
          </p>
        </div>

        {/* Cat Personalities */}
        <div className="philosophy-personalities">
          <div className="personality-item">
            <span className="personality-dot">●</span>
            <span>Some are confident.</span>
          </div>

          <div className="personality-item">
            <span className="personality-dot">●</span>
            <span>Some are anxious.</span>
          </div>

          <div className="personality-item">
            <span className="personality-dot">●</span>
            <span>Some require extra patience.</span>
          </div>

          <div className="personality-item">
            <span className="personality-dot">●</span>
            <span>Some need special attention.</span>
          </div>
        </div>

        {/* Closing Paragraph */}
        <div className="philosophy-closing">
          <p>
            Understanding those differences is what makes feline care
            personal.
          </p>
        </div>

      </div>
    </section>
  );
}
 
