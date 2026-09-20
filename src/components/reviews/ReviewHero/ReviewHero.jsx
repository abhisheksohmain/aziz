
import "./ReviewHero.css";

export default function ReviewHero() {
  return (
    <section className="review-hero">
      <img
        src={`${import.meta.env.BASE_URL}images/review-hero.png`}
        alt="AZIZ FELINES CATTERY Reviews"
        className="review-hero-image"
      />
    </section>
  );
}