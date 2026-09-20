import React from "react";

import {
  PawPrint,
  Home,
  Sparkles,
  ShieldCheck,
  HandHeart,
  Heart,
  Scissors,
  Stethoscope,
  Truck,
  UserRound,
  CalendarDays,
  Cat,
  CheckCircle2,
  Star,
  Quote,
  Target,
} from "lucide-react";

import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

import "./About.css";

/* =========================================================
   IMAGES

   public/
   └── images/
       ├── about-hero.png
       ├── about-owner.png
       └── about-cat.png
========================================================= */

const ABOUT_HERO_IMAGE =
  `${import.meta.env.BASE_URL}images/about-hero.png`;

const ABOUT_OWNER_IMAGE =
  `${import.meta.env.BASE_URL}images/about-owner.png`;

const ABOUT_CAT_IMAGE =
  `${import.meta.env.BASE_URL}images/about-cat.png`;

/* =========================================================
   IMAGE OBJECT
========================================================= */

const IMAGE = {
  hero: ABOUT_HERO_IMAGE,
  owner: ABOUT_OWNER_IMAGE,
  cats: ABOUT_CAT_IMAGE,
};

/* =========================================================
   APPROACH
========================================================= */

const approachItems = [
  {
    icon: UserRound,
    title: "Individual",
    subtitle: "Attention",
  },
  {
    icon: Sparkles,
    title: "Cleanliness",
    subtitle: "& Hygiene",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    subtitle: "& Security",
  },
  {
    icon: HandHeart,
    title: "Proper",
    subtitle: "Handling",
  },
  {
    icon: Heart,
    title: "Stress-Conscious",
    subtitle: "Environment",
  },
];

/* =========================================================
   TIMELINE
========================================================= */

const timeline = [
  {
    year: "2015",
    title: "AZIZ FELINES",
    text: "AZIZ FELINES Cattery begins its journey in Mumbai.",
  },
  {
    year: "2015–2020",
    title: "BUILDING",
    text: "Building experience and growing community of cat parents.",
  },
  {
    year: "2020–2023",
    title: "EXPANDING",
    text: "Expanding the services and creating a safe and caring environment.",
  },
  {
    year: "2023–2025",
    title: "CONTINUING",
    text: "Continuing to serve families while developing a broader approach to feline care.",
  },
  {
    year: "2026",
    title: "MOVING FORWARD",
    text: "Moving forward with warmth, presence and a stronger focus on feline care.",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: Home,
    title: "CAT BOARDING",
    subtitle: "/ HOSTEL",
  },
  {
    icon: Scissors,
    title: "GROOMING",
    subtitle: "",
  },
  {
    icon: Stethoscope,
    title: "FELINE CARE",
    subtitle: "",
  },
  {
    icon: Truck,
    title: "TRANSPORT",
    subtitle: "",
  },
];

/* =========================================================
   IMAGE PLACEHOLDER
========================================================= */

function ImagePlaceholder({
  src,
  alt,
  className = "",
}) {
  return (
    <div className={`about-image ${className}`}>

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(event) => {
          const image = event.currentTarget;

          image.style.display = "none";

          image.parentElement.classList.add(
            "image-fallback"
          );
        }}
      />

      <div className="image-fallback-content">

        <PawPrint
          size={38}
          strokeWidth={2}
        />

        <span>
          AZIZ FELINES
        </span>

        <small>
          Image Placeholder
        </small>

      </div>

    </div>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <>
      <Header />

      <main className="about-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="about-hero">

          <div className="about-hero-content">

            <div className="about-hero-title">

              <h1>
                About Us
              </h1>

              <p>
                Dedicated to Cats. Committed to Their Care.
              </p>

            </div>

            <PawPrint
              className="hero-paw"
              size={18}
              strokeWidth={2.5}
            />

            <div className="hero-divider">

              <span />

              <PawPrint size={14} />

              <span />

            </div>

          </div>

          <ImagePlaceholder
            src={IMAGE.hero}
            alt="Cat resting at AZIZ FELINES CATTERY"
            className="hero-image"
          />

        </section>

        {/* =================================================
            MAIN
        ================================================= */}

        <section className="about-main">

          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="about-left-column">

            <article className="about-card cattery-card">

              {/* =================================================
                  ABOUT CATTERY
              ================================================= */}

              <div className="card-heading">

                <div className="heading-icon">
                  <Home size={27} />
                </div>

                <div>

                  <h2>
                    About the Cattery
                  </h2>

                  <p>
                    A Home Created Exclusively for Cats
                  </p>

                </div>

              </div>

              <div className="card-copy">

                <p>
                  AZIZ FELINES CATTERY is a dedicated
                  feline-focused facility created with one
                  simple belief — every cat deserves a safe,
                  hygienic, comfortable and loving environment.
                </p>

                <p>
                  We provide a comfortable home away from home
                  through our{" "}
                  <strong>
                    Cat Boarding / Hostel
                  </strong>{" "}
                  services, along with professional grooming,
                  feline care, transportation and other
                  cat-focused services. Our facility is designed
                  to meet the unique needs of cats, ensuring
                  their physical health, emotional well-being
                  and happiness.
                </p>

              </div>

              {/* =================================================
                  OUR APPROACH
              ================================================= */}

              <div className="approach-box">

                <div className="section-mini-title">

                  <PawPrint size={19} />

                  <h3>
                    Our Approach
                  </h3>

                </div>

                <div className="approach-grid">

                  {approachItems.map((item) => {

                    const Icon = item.icon;

                    return (
                      <div
                        className="approach-item"
                        key={item.title}
                      >

                        <Icon
                          size={24}
                          strokeWidth={2.1}
                        />

                        <strong>
                          {item.title}
                        </strong>

                        <span>
                          {item.subtitle}
                        </span>

                      </div>
                    );
                  })}

                </div>

              </div>

              {/* =================================================
                  OUR PROMISE
              ================================================= */}

              <div className="promise-box">

                <div className="promise-heading">

                  <Heart
                    size={20}
                    fill="currentColor"
                  />

                  <h3>
                    Our Promise
                  </h3>

                </div>

                <p>
                  To give every cat entrusted to us the care,
                  attention and respect they deserve.
                </p>

              </div>

              {/* =================================================
                  CATS IMAGE
              ================================================= */}

              <div className="cats-image-wrap">

                <ImagePlaceholder
                  src={IMAGE.cats}
                  alt="Happy cats enjoying AZIZ FELINES"
                  className="cats-image"
                />

                <div className="happy-cats-text">

                  <span>
                    Happy Cats
                  </span>

                  <strong>
                    Healthy Cats
                  </strong>

                  <small>
                    ♥
                  </small>

                </div>

              </div>

              {/* =================================================
                  SERVICES
              ================================================= */}

              <div className="service-strip">

                {services.map((service) => {

                  const Icon = service.icon;

                  return (
                    <div
                      className="service-item"
                      key={service.title}
                    >

                      <Icon
                        size={20}
                        strokeWidth={2}
                      />

                      <strong>
                        {service.title}
                      </strong>

                      {service.subtitle && (
                        <span>
                          {service.subtitle}
                        </span>
                      )}

                    </div>
                  );
                })}

              </div>

              {/* =================================================
                  OUR MISSION
                  MOVED TO EMPTY SPACE BELOW SERVICES
              ================================================= */}

              <section className="mission-box">

                {/* LEFT CONTENT */}

                <div className="mission-content">

                  <div className="mission-heading">

                    <Target
                      size={27}
                      strokeWidth={2.2}
                    />

                    <div>

                      <h3>
                        Our Mission
                      </h3>

                      <p>
                        Happier Cats. Healthier Lives.
                      </p>

                    </div>

                  </div>

                  <div className="mission-copy">

                    <p>
                      To be a trusted and professional
                      destination for feline care — where cat
                      parents can leave their pets in responsible
                      hands.
                    </p>

                    <p>
                      We are committed to providing a safe,
                      secure, clean and cat-friendly environment
                      with individual attention, proper handling
                      and a stress-conscious atmosphere.
                    </p>

                  </div>

                </div>

                {/* RIGHT SIDE MESSAGE */}

                <div className="mission-side">

                  <span>
                    “Happy Cats
                  </span>

                  <strong>
                    Happy Families
                  </strong>

                  <Heart
                    className="mission-heart"
                    size={18}
                    strokeWidth={2}
                  />

                  <PawPrint
                    className="mission-paw"
                    size={19}
                    strokeWidth={2}
                  />

                </div>

              </section>

            </article>

          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <div className="about-right-column">

            <article className="about-card owner-card">

              {/* =================================================
                  OWNER HEADER
              ================================================= */}

              <div className="owner-heading">

                <div className="owner-heading-title">

                  <div className="card-heading">

                    <div className="heading-icon">

                      <UserRound size={26} />

                    </div>

                    <div>

                      <h2>
                        About the Owner
                      </h2>

                    </div>

                  </div>

                  <div className="owner-name">

                    <h3>
                      Abdul Aziz Mukadam
                    </h3>

                    <p>
                      Founder & Owner — AZIZ FELINES CATTERY
                    </p>

                  </div>

                </div>

                <ImagePlaceholder
                  src={IMAGE.owner}
                  alt="AZIZ FELINES owner with cat"
                  className="owner-image"
                />

              </div>

              {/* =================================================
                  OWNER CONTENT
              ================================================= */}

              <div className="owner-content-grid">

                <div className="owner-story">

                  <section>

                    <h4>
                      The Journey
                    </h4>

                    <p>
                      What began in 2015 as a passion for cats
                      has grown into AZIZ FELINES CATTERY, a
                      dedicated name in cat care, boarding and
                      grooming in Mumbai, Thane.
                    </p>

                  </section>

                  <section>

                    <h4>
                      A Cat-Focused Mission
                    </h4>

                    <p>
                      At the heart of the cattery is its founder
                      and owner, Abdul Aziz Mukadam, whose
                      professional journey has taken a
                      distinctly feline-focused direction.
                      Over the years, Aziz has built his service
                      around something simple but meaningful:
                      cats are not commodities—they are family.
                    </p>

                  </section>

                  <section>

                    <h4>
                      Personalised Care
                    </h4>

                    <p>
                      His approach has always been centred
                      around understanding cats individually.
                      From grooming and boarding to everyday
                      care, handling, transportation and
                      guidance for cat parents, the objective
                      is to make every interaction as
                      comfortable and stress-free as possible.
                    </p>

                  </section>

                  <section>

                    <h4>
                      More Than a Cattery
                    </h4>

                    <p>
                      For Aziz, running a cattery is not simply
                      about providing a place where cats can
                      stay. It is about understanding their
                      behaviour, recognising when something is
                      not normal, maintaining proper hygiene
                      and handling, and giving every cat the
                      experience that they are being looked
                      after when they cannot be with their
                      owners.
                    </p>

                  </section>

                </div>

                <div className="owner-story">

                  <section>

                    <h4>
                      A Reputation Built Through Cats & Their
                      Families
                    </h4>

                    <p>
                      The business has been publicly listed
                      since 2015, and independent reviews
                      describe consistent care. In addition to
                      AZIZ FELINES CATTERY with cat boarding,
                      grooming and pet-care services.
                    </p>

                  </section>

                  <section>

                    <h4>
                      Over the years, the team has grown
                    </h4>

                    <p>
                      The team has grown with the cats and
                      families who have trusted Aziz with their
                      companions. Public review summaries have
                      particularly highlighted the owner's
                      polite and responsive nature, knowledge
                      of cats, and the convenience of having
                      multiple feline services available under
                      one roof.
                    </p>

                  </section>

                  <section>

                    <h4>
                      For Aziz, however, the most important
                      review is not a number or a score.
                    </h4>

                    <p className="italic-copy">
                      It is the cat who comes back for another
                      grooming session without fear.
                    </p>

                    <p className="italic-copy">
                      It is the cat parent who feels comfortable
                      leaving their companion for boarding.
                    </p>

                    <p className="italic-copy">
                      And it is the message from a worried pet
                      parent saying, “Thank you for taking care
                      of my cat.”
                    </p>

                  </section>

                </div>

              </div>

              {/* =================================================
                  PHILOSOPHY
              ================================================= */}

              <div className="philosophy-grid">

                <div className="philosophy-box">

                  <div className="quote-icon">
                    <Quote size={20} />
                  </div>

                  <h4>
                    The Philosophy Behind AZIZ FELINES CATTERY
                  </h4>

                  <p>
                    “Every cat deserves to be treated with
                    patience, respect and genuine care—not
                    simply as a pet, but as a member of the
                    family.”
                  </p>

                </div>

                <div className="understanding-box">

                  <div className="understanding-heading">

                    <Cat size={20} />

                    <h4>
                      Understanding Every Cat
                    </h4>

                  </div>

                  <ul>

                    <li>
                      Every cat has a different personality.
                    </li>

                    <li>
                      Some are confident.
                    </li>

                    <li>
                      Some are anxious.
                    </li>

                    <li>
                      Some require special attention.
                    </li>

                    <li>
                      Some need specific routines.
                    </li>

                    <li>
                      Understanding these differences is what
                      makes feline care personal.
                    </li>

                  </ul>

                </div>

              </div>

              {/* =================================================
                  TIMELINE
              ================================================= */}

              <div className="timeline-section">

                <div className="timeline-heading">

                  <CalendarDays size={20} />

                  <h3>
                    2015 → Today
                  </h3>

                </div>

                <div className="timeline">

                  {timeline.map((item, index) => (

                    <div
                      className="timeline-item"
                      key={item.year}
                    >

                      <div className="timeline-dot">

                        {index === timeline.length - 1 ? (
                          <Star
                            size={12}
                            fill="currentColor"
                          />
                        ) : (
                          <CheckCircle2 size={12} />
                        )}

                      </div>

                      <div className="timeline-year-box">

                        <span className="timeline-year">
                          {item.year}
                        </span>

                      </div>

                      <div className="timeline-content">

                        <strong>
                          {item.title}
                        </strong>

                        <p>
                          {item.text}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* =================================================
                  FOUNDER PROMISE
              ================================================= */}

              <div className="founder-promise">

                <div className="founder-promise-heading">

                  <PawPrint size={20} />

                  <h3>
                    The Founder's Promise
                  </h3>

                </div>

                <p>
                  Running AZIZ FELINES CATTERY is not merely
                  a business for Aziz. It is a responsibility.
                </p>

                <p>
                  Every cat entrusted to the cattery represents
                  someone's family, someone's companion,
                  someone's emotional connection.
                </p>

                <p>
                  The promise is simple: to continue providing
                  a safe, clean, caring and respectful
                  environment where every cat is treated as
                  family.
                </p>

              </div>

            </article>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}