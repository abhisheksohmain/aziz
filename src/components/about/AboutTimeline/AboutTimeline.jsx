
import "./AboutTimeline.css";

const timelineData = [
  {
    year: "2015",
    text: "AZIZ FELINES CATTERY begins its journey in Mumbra.",
  },
  {
    year: "2015–2020",
    text: "Building experience, relationships and a growing community of cat parents.",
  },
  {
    year: "2020–2023",
    text: "Expanding the range of feline-focused services and strengthening the boarding and grooming side of the business.",
  },
  {
    year: "2023–2025",
    text: "Continuing to serve cat parents while developing a broader approach to feline care, transportation, grooming and boarding.",
  },
  {
    year: "2026",
    text: "Moving forward with a stronger digital presence and an official online identity, while continuing the same core mission: better care for cats and greater peace of mind for their families.",
  },
];

export default function AboutTimeline() {
  return (
    <section className="about-timeline-section">
      <div className="about-timeline-container">

        {/* Heading */}
        <div className="about-timeline-heading">
          <span className="about-timeline-kicker">
            Our Journey
          </span>

          <h2 className="about-timeline-title">
            2015 <span>→</span> Today
          </h2>
        </div>

        {/* Timeline */}
        <div className="about-timeline">
          {timelineData.map((item, index) => (
            <div
              className="timeline-item"
              key={item.year}
            >
              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-line">
                <span className="timeline-dot"></span>

                {index !== timelineData.length - 1 && (
                  <span className="timeline-connector"></span>
                )}
              </div>

              <div className="timeline-content">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
