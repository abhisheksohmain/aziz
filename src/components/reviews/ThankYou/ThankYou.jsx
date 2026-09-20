import { Heart, PawPrint } from "lucide-react";
import "./ThankYou.css";

const ThankYouSection = () => {
  return (
    <section className="thank-you-section">
      {/* Decorative paws */}
      <PawPrint className="thank-paw paw-1" />
      <PawPrint className="thank-paw paw-2" />
      <PawPrint className="thank-paw paw-3" />
      <PawPrint className="thank-paw paw-4" />

      {/* Main content */}
      <div className="thank-you-inner">

        {/* Thank You Title */}
        <div className="thank-you-title">
          <PawPrint className="title-paw" />

          <div className="thank-title-row">
            <h2>Thank You</h2>
            <Heart className="title-heart" />
          </div>
        </div>

        {/* Divider */}
        <div className="thank-divider" />

        {/* Message */}
        <div className="thank-message">
          <p>
            To all our cat parents for your love,
            <br />
            trust and kind words!
          </p>
        </div>

        {/* Cat Image */}
        <div className="thank-cat-wrapper">
          <img
            src="images/thankyou-cat.png"
            alt="Sleeping cats"
            className="thank-cat-image"
          />
        </div>

        {/* Right Message */}
        <div className="thank-right-message">
          <Heart className="right-heart heart-top" />

          <p>
            Together
            <br />
            to create
            <br />
            a happier
            <br />
            Feline World!
          </p>

          <Heart className="right-heart heart-bottom" />

          <PawPrint className="right-paw" />
        </div>
      </div>

      {/* Bottom curved background */}
      <div className="thank-bottom-curve" />
    </section>
  );
};

export default ThankYouSection;