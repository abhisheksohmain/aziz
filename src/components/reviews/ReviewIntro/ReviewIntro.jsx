
import { MessageCircle } from "lucide-react";
import "./ReviewIntro.css";

export default function ReviewIntro() {
  return (
    <div className="review-intro">

      <div>
        <MessageCircle />

        <div>
          <h3>
            Reviews from
            <br />
            multiple platforms
          </h3>

          <p>
            Kind words from our amazing cat parents across
            Google, Justdial and Social media.
          </p>
        </div>
      </div>

      <div className="review-cat">
        ♡ 🐾
      </div>

    </div>
  );
}
