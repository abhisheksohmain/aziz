import {
  ArrowRight,
  Heart,
  PawPrint,
  ShieldCheck,
  UserRoundCheck,
  Clock3
} from "lucide-react";
import { Link } from "react-router-dom";
import "./AboutPreview.css";

export default function AboutPreview() {
  return (
    <section className="about-preview section">

      <div className="container about-content">

        {/* ========================================
            ABOUT HEADER
        ======================================== */}

        <div className="about-heading">

          <div className="eyebrow">
            <PawPrint />
            About Us
          </div>

          <h2 className="section-title">
            About AZIZ FELINES CATTERY
          </h2>

        </div>


        {/* ========================================
            ABOUT CONTENT
        ======================================== */}

        <div className="about-copy">

          <p>
            At AZIZ FELINES CATTERY, we are passionate about cats and dedicated
            to providing the best care for them. Our facility is designed to
            offer a safe, clean, and comfortable environment where every cat
            feels at home.
          </p>

          <p>
            We understand that cats are more than just pets — they are family.
            That's why we focus on their health, happiness and well-being, with
            professional care, a loving atmosphere and personalized attention.
          </p>

          <Link className="btn" to="/about">
            Know More About Us
            <ArrowRight size={17} />
          </Link>

        </div>


        {/* ========================================
            BENEFITS
        ======================================== */}

        <div className="about-benefits">

          <div className="about-benefit">
            <ShieldCheck />
            <span>
              Safe & Hygienic
              <br />
              Environment
            </span>
          </div>

          <div className="about-benefit">
            <UserRoundCheck />
            <span>
              Experienced &
              <br />
              Caring Staff
            </span>
          </div>

          <div className="about-benefit">
            <Clock3 />
            <span>
              24/7
              <br />
              Support
            </span>
          </div>

          <div className="about-benefit">
            <Heart />
            <span>
              Trusted by
              <br />
              Cat Parents
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}