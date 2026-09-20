
import "./AboutOwner.css";

export default function AboutOwner() {
  return (
    <section className="about-owner-section">
      <div className="about-owner-container">

        {/* LEFT — ABOUT US */}
        <div className="about-us-content">
          <span className="about-owner-kicker">
            About Us
          </span>

          <h2 className="about-owner-title">
            About AZIZ FELINES CATTERY
          </h2>
        </div>

        {/* RIGHT — ABOUT THE OWNER */}
        <div className="owner-content">

          <span className="about-owner-kicker">
            About the Owner
          </span>

          <h2 className="owner-name">
            Abdul Aziz Mukadam
          </h2>

          <p className="owner-role">
            Founder &amp; Owner — AZIZ FELINES CATTERY
          </p>

          <div className="owner-description">
            <p>
              What began in 2015 as a passion for cats has grown into
              AZIZ FELINES CATTERY, a dedicated name in cat care,
              boarding and grooming in Mumbra, Thane.
            </p>

            <p>
              At the heart of the cattery is its founder and owner,
              Abdul Aziz Mukadam, whose professional journey has taken
              a distinctly feline-focused direction. Over the years,
              Aziz has built his work around something simple but
              important: cats are not commodities—they are family.
            </p>

            <p>
              His approach has always been centred around understanding
              cats individually. From grooming and boarding to everyday
              care, handling, transportation and guidance for cat
              parents, the objective is to make every interaction as
              safe, comfortable and stress-free as possible.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

