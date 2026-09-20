
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <section className="thankyou">
      <div className="container">

        <div>
          <h2>Thank You ♡</h2>

          <p>
            To all our cat parents for your love, trust and kind words!
          </p>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}images/thankyou-cat.jpg`}
          alt="Sleeping cat"
        />

      </div>
    </section>
  );
}
 