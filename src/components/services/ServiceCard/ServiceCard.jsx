import {
  ArrowRight,
  Cat,
  Heart,
  Home,
  PawPrint,
  Scissors,
  Stethoscope,
  Truck,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ServiceCard.css";


/* =========================================================
   SERVICE ICONS
========================================================= */

const iconMap = {
  boarding: Home,
  grooming: Scissors,
  care: Heart,
  transport: Truck,
  veterinary: Stethoscope,
  adoption: Cat,
};


/* =========================================================
   SERVICE COLORS
========================================================= */

const colors = {
  boarding: "#e72b73",
  grooming: "#1597d2",
  care: "#23a858",
  transport: "#f58a18",
  veterinary: "#7135c8",
  adoption: "#159e99",
};


/* =========================================================
   GITHUB PAGES / VITE SAFE IMAGE PATH
========================================================= */

function getImagePath(image) {
  if (!image) return "";

  /*
    Keep external URLs untouched.
  */

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("data:") ||
    image.startsWith("blob:")
  ) {
    return image;
  }

  /*
    Remove any leading slash.

    Example:
    /images/service-care.jpg
    becomes:
    images/service-care.jpg
  */

  const cleanPath = image.replace(/^\/+/, "");

  /*
    Vite BASE_URL automatically handles
    GitHub Pages deployment paths.
  */

  return `${import.meta.env.BASE_URL}${cleanPath}`;
}


/* =========================================================
   SERVICE CARD
========================================================= */

export default function ServiceCard({
  id = "",
  title = "",
  kicker = "",
  text = "",
  features = [],
  image = "",
}) {
  const Icon = iconMap[id] || PawPrint;

  const color = colors[id] || "#075c55";

  const imagePath = getImagePath(image);


  return (
    <article
      className="service-card"
      id={id}
      style={{
        "--accent": color,
      }}
    >

      {/* =====================================================
          CARD HEADER
      ===================================================== */}

      <div className="service-card-head">

        {/* SERVICE TITLE */}

        <div className="service-card-title">

          <span
            className="service-icon"
            aria-hidden="true"
          >
            <Icon
              size={30}
              strokeWidth={2.2}
            />
          </span>


          <div className="service-card-heading">

            <h3>
              {title}
            </h3>

            {kicker && (
              <strong>
                {kicker}
              </strong>
            )}

          </div>

        </div>


        {/* =================================================
            SERVICE IMAGE
        ================================================= */}

        {imagePath && (
          <div className="service-card-image">

            <img
              src={imagePath}
              alt={
                title
                  ? `${title} service at AZIZ FELINES CATTERY`
                  : "AZIZ FELINES CATTERY service"
              }
              loading="lazy"
              decoding="async"
            />

          </div>
        )}

      </div>


      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      {text && (
        <p className="service-card-text">
          {text}
        </p>
      )}


      {/* =====================================================
          FEATURES
      ===================================================== */}

      {Array.isArray(features) && features.length > 0 && (
        <div className="feature-list">

          {features.map(
            ([label, FeatureIcon = PawPrint], index) => {

              const SafeFeatureIcon =
                FeatureIcon || PawPrint;

              return (
                <div
                  className="feature-item"
                  key={`${label}-${index}`}
                >

                  <SafeFeatureIcon
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>
                    {label}
                  </span>

                </div>
              );
            }
          )}

        </div>
      )}


      {/* =====================================================
          LEARN MORE BUTTON
      ===================================================== */}

      <Link
        className="btn service-btn"
        to="/contact"
        aria-label={
          title
            ? `Learn more about ${title}`
            : "Learn more about our services"
        }
      >

        <span>
          Learn More
        </span>

        <ArrowRight
          size={17}
          aria-hidden="true"
        />

      </Link>


      {/* =====================================================
          DOODLE
      ===================================================== */}

      <div
        className="service-doodle"
        aria-hidden="true"
      >
        ♡ Paw &amp; Care Always
      </div>

    </article>
  );
}