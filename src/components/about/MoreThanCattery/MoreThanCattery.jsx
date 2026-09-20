
import "./MoreThanCattery.css";

export default function MoreThanCattery() {
  return (
    <section className="more-cattery-section">
      <div className="more-cattery-container">

        {/* Left Content */}
        <div className="more-cattery-content">
          <span className="more-cattery-kicker">
            More Than a Cattery
          </span>

          <h2 className="more-cattery-title">
            More Than a Cattery
          </h2>

          <div className="more-cattery-text">
            <p>
              For Aziz, running a cattery is not simply about providing a
              place where cats can stay.
            </p>

            <p>
              It is about understanding their behaviour, recognising when
              something is not normal, maintaining proper hygiene and
              handling, and giving pet parents confidence that their cats
              are being looked after when they cannot be with them.
            </p>

            <p>
              Over the years, AZIZ FELINES CATTERY has developed into a
              one-stop destination offering services including:
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="more-cattery-services">
          <div className="services-list">
            <div className="service-item">
              <span className="service-icon">🐾</span>
              <span>Cat Boarding</span>
            </div>

            <div className="service-item">
              <span className="service-icon">✂️</span>
              <span>Professional Cat Grooming</span>
            </div>

            <div className="service-item">
              <span className="service-icon">🛁</span>
              <span>Bathing &amp; Coat Care</span>
            </div>

            <div className="service-item">
              <span className="service-icon">🚐</span>
              <span>Cat Transportation</span>
            </div>

            <div className="service-item">
              <span className="service-icon">🏠</span>
              <span>Pet Care &amp; Boarding Assistance</span>
            </div>

            <div className="service-item">
              <span className="service-icon">🐱</span>
              <span>Cat-Parent Guidance</span>
            </div>

            <div className="service-item">
              <span className="service-icon">❤️</span>
              <span>Rescue, Foster &amp; Welfare Support</span>
            </div>

            <div className="service-item">
              <span className="service-icon">🩺</span>
              <span>
                Assistance in coordinating veterinary care when required
              </span>
            </div>
          </div>
        </div>

        {/* Public Listing Content */}
        <div className="more-cattery-note">
          <p>
            The business has been publicly listed since 2015, and
            independent business directories continue to identify
            AZIZ FELINES CATTERY with cat boarding, grooming and
            pet-care services.
          </p>
        </div>

      </div>
    </section>
  );
}
 
