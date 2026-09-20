
import "./ReputationSection.css";

export default function ReputationSection() {
  return (
    <section className="reputation-section">
      <div className="reputation-container">

        <div className="reputation-heading">
          <span className="reputation-kicker">
            A Reputation Built Through Cats &amp; Their Families
          </span>

          <h2 className="reputation-title">
            A Reputation Built Through Cats &amp; Their Families
          </h2>
        </div>

        <div className="reputation-content">
          <p>
            Over the years, the most meaningful recognition has come from
            the cat parents who have trusted Aziz with their companions.
          </p>

          <p>
            Public review summaries have particularly highlighted the
            owner's polite and responsive nature, knowledge of cats, and
            the convenience of having multiple feline services available
            under one roof.
          </p>

          <p>
            For Aziz, however, the most important review is not a number
            on a screen.
          </p>

          <div className="reputation-highlights">
            <div className="reputation-highlight">
              <span className="reputation-highlight-icon">🐱</span>
              <p>
                It is the cat who comes back for another grooming session
                without fear.
              </p>
            </div>

            <div className="reputation-highlight">
              <span className="reputation-highlight-icon">❤️</span>
              <p>
                It is the cat parent who feels comfortable leaving their
                companion for boarding.
              </p>
            </div>
          </div>

          <div className="reputation-quote">
            <p>
              And it is the message from a worried pet parent saying,
              <span> “Thank you for taking care of my cat.”</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

