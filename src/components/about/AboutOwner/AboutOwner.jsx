import {
  PawPrint,
  Home,
  Scissors,
  Heart,
  Truck,
  ShieldCheck,
  Sparkles,
  HandHeart,
  CalendarDays,
  UserRound,
} from "lucide-react";

import "./AboutOwner.css";

/* =========================================================
   IMAGE PATHS
   GitHub Pages / Vite SAFE
========================================================= */

const BASE = import.meta.env.BASE_URL;

const images = {
  cattery: `${BASE}images/about-cattery.jpg`,
  owner: `${BASE}images/about-owner.jpg`,
  cats: `${BASE}images/about-cats.jpg`,
};

/* =========================================================
   OUR APPROACH
========================================================= */

const approachItems = [
  {
    icon: PawPrint,
    title: "Individual",
    sub: "Attention",
  },
  {
    icon: Sparkles,
    title: "Cleanliness",
    sub: "& Hygiene",
  },
  {
    icon: ShieldCheck,
    title: "Safety &",
    sub: "Security",
  },
  {
    icon: HandHeart,
    title: "Proper",
    sub: "Handling",
  },
  {
    icon: Heart,
    title: "Stress-Conscious",
    sub: "Environment",
  },
];

/* =========================================================
   OWNER TIMELINE
========================================================= */

const timeline = [
  {
    year: "2015",
    title: "2015",
    text: "AZIZ FELINES CATTERY begins its journey in Mumbra.",
  },
  {
    year: "2015–2020",
    title: "2015–2020",
    text: "Building experience, relationships and a growing community of cat parents.",
  },
  {
    year: "2020–2023",
    title: "2020–2023",
    text: "Expanding the range of feline-focused services and strengthening the boarding and grooming side.",
  },
  {
    year: "2023–2025",
    title: "2023–2025",
    text: "Continuing to serve cat parents while developing a broader approach to feline care, transportation and boarding.",
  },
  {
    year: "2026",
    title: "2026",
    text: "Moving forward with a stronger digital presence and an official online identity, while continuing the same care mission.",
  },
];

/* =========================================================
   SERVICE BAR
========================================================= */

const serviceBar = [
  {
    icon: Home,
    title: "CAT BOARDING /",
    sub: "HOSTEL",
  },
  {
    icon: Scissors,
    title: "GROOMING",
    sub: "",
  },
  {
    icon: Heart,
    title: "FELINE CARE",
    sub: "",
  },
  {
    icon: Truck,
    title: "TRANSPORT",
    sub: "",
  },
];

/* =========================================================
   ABOUT CATTERY
========================================================= */

function AboutCattery() {
  return (
    <article className="about-cattery-panel">

      {/* =====================================================
          TITLE
      ===================================================== */}

      <header className="about-panel-heading">

        <div className="heading-icon">

          <Home
            size={34}
            strokeWidth={2.4}
          />

          <PawPrint
            size={15}
            strokeWidth={2.5}
            className="heading-paw"
          />

        </div>

        <div>

          <h2>About the Cattery</h2>

          <p>
            A Home Created Exclusively for Cats
          </p>

        </div>

      </header>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="about-intro">

        <p>
          <strong>AZIZ FELINES CATTERY</strong> is a dedicated
          feline-focused facility created with one simple belief
          — every cat deserves a safe, hygienic, comfortable and
          loving environment.
        </p>

        <p>
          We provide a comfortable home away from home through
          our <strong>Cat Boarding / Hostel</strong> services,
          along with professional grooming, feline care,
          transportation and other cat-focused services. Our
          facility is designed to meet the unique needs of cats,
          ensuring their physical health, emotional well-being
          and happiness.
        </p>

      </div>

      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section className="approach-box">

        <div className="small-section-heading">

          <PawPrint
            size={24}
            fill="currentColor"
            strokeWidth={2}
          />

          <h3>Our Approach</h3>

        </div>

        <div className="approach-grid">

          {approachItems.map(
            ({ icon: Icon, title, sub }) => (
              <div
                className="approach-item"
                key={`${title}-${sub}`}
              >

                <Icon
                  size={25}
                  strokeWidth={2.3}
                  aria-hidden="true"
                />

                <strong>{title}</strong>

                <span>{sub}</span>

              </div>
            )
          )}

        </div>

      </section>

      {/* =====================================================
          OUR PROMISE
      ===================================================== */}

      <section className="promise-box">

        <Heart
          size={28}
          fill="currentColor"
          strokeWidth={1.8}
        />

        <div>

          <h3>Our Promise</h3>

          <p>
            To give every cat entrusted to us the care,
            attention and respect they deserve.
          </p>

        </div>

      </section>

      {/* =====================================================
          CATTERY IMAGE
      ===================================================== */}

      <div className="about-cats-image">

        <img
          src={images.cats}
          alt="Cats enjoying a comfortable environment"
          onError={(event) => {
            event.currentTarget.style.display = "none";

            event.currentTarget.parentElement.classList.add(
              "image-fallback"
            );
          }}
        />

        <div className="happy-cats-note">

          <span>Happy Cats</span>

          <span>Healthy Lives</span>

          <Heart
            size={14}
            strokeWidth={2}
          />

          <PawPrint
            size={15}
            fill="currentColor"
          />

        </div>

      </div>

      {/* =====================================================
          SERVICE BAR
      ===================================================== */}

      <div className="about-service-bar">

        {serviceBar.map(
          ({ icon: Icon, title, sub }) => (
            <div
              className="about-service-item"
              key={title}
            >

              <Icon
                size={24}
                strokeWidth={2.2}
              />

              <strong>{title}</strong>

              {sub && (
                <span>{sub}</span>
              )}

            </div>
          )
        )}

      </div>

    </article>
  );
}

/* =========================================================
   ABOUT OWNER
========================================================= */

function AboutOwner() {
  return (
    <article className="about-owner-panel">

      {/* =====================================================
          OWNER HEADING
      ===================================================== */}

      <header className="owner-heading">

        <UserRound
          size={35}
          fill="currentColor"
          strokeWidth={1.8}
        />

        <div>

          <h2>About the Owner</h2>

          <h3>Abdul Aziz Mukadam</h3>

          <p>
            Founder &amp; Owner — AZIZ FELINES CATTERY
          </p>

        </div>

      </header>

      {/* =====================================================
          OWNER TOP CONTENT
      ===================================================== */}

      <div className="owner-top-grid">

        {/* LEFT TEXT */}

        <div className="owner-story">

          <OwnerStory title="The Journey">
            What began in 2015 as a passion for cats has grown
            into AZIZ FELINES CATTERY, a dedicated name in cat
            care, boarding and grooming in Mumbra, Thane.
          </OwnerStory>

          <OwnerStory title="A Cat-Focused Mission">
            At the heart of the cattery is its founder and owner,
            Abdul Aziz Mukadam, whose professional journey has
            taken a distinctly feline-focused direction. Over
            the years, Aziz has built his work around something
            simple but important: cats are not commodities —
            they are family.
          </OwnerStory>

          <OwnerStory title="Personalised Care">
            His approach has always been centred around
            understanding cats individually. From grooming and
            boarding to everyday care, handling, transportation
            and guidance for cat parents, the objective is to
            make every interaction as safe, comfortable and
            stress-free as possible.
          </OwnerStory>

          <OwnerStory title="More Than a Cattery">
            For Aziz, running a cattery is not simply about
            providing a place where cats can stay. It is about
            understanding their behaviour, recognising when
            something is not normal, maintaining proper hygiene
            and handling, and giving pet parents confidence
            that their cats are being looked after when they
            cannot be with them.
          </OwnerStory>

        </div>

        {/* OWNER IMAGE */}

        <div className="owner-image-wrap">

          <img
            src={images.owner}
            alt="Owner with a cat"
            onError={(event) => {
              event.currentTarget.style.display = "none";

              event.currentTarget.parentElement.classList.add(
                "image-fallback"
              );
            }}
          />

        </div>

        {/* REPUTATION */}

        <div className="reputation-box">

          <h3>
            A Reputation Built Through
            <br />
            Cats &amp; Their Families
          </h3>

          <p>
            The business has been publicly listed since 2015,
            and independent business directories continue to
            identify AZIZ FELINES CATTERY with cat boarding,
            grooming and pet-care services.
          </p>

          <p>
            Over the years, the most meaningful recognition
            has come from the cat parents who have trusted
            Aziz with their companions. Public review summaries
            have particularly highlighted the owner's polite
            and responsive nature, knowledge of cats, and the
            convenience of having multiple feline services
            available under one roof.
          </p>

          <p>
            For Aziz, however, the most important review is
            not a number on a screen.
          </p>

          <p>
            It is the cat who comes back for another grooming
            session without fear.
            <br />
            It is the cat parent who feels comfortable leaving
            their companion for boarding.
            <br />
            And it is the message from a worried pet parent
            saying, Thank you for taking care of my cat.
          </p>

        </div>

      </div>

      {/* =====================================================
          PHILOSOPHY + UNDERSTANDING CAT
      ===================================================== */}

      <div className="owner-info-grid">

        {/* =====================================================
            PHILOSOPHY
        ===================================================== */}

        <div className="philosophy-box">

          <h3>
            The Philosophy Behind AZIZ FELINES CATTERY
          </h3>

          {/* NO BLOCKQUOTE
              NO QUOTATION MARKS
              NORMAL PARAGRAPH ONLY
          */}

          <p className="philosophy-text">
            Every cat deserves to be treated with patience,
            respect and genuine care—not simply as a pet,
            but as a member of the family.
          </p>

          <PawPrint
            size={18}
            fill="currentColor"
            strokeWidth={1.5}
          />

        </div>

        {/* =====================================================
            UNDERSTANDING EVERY CAT
        ===================================================== */}

        <div className="understanding-box">

          <h3>Understanding Every Cat</h3>

          <p>
            Every cat has a different personality.
          </p>

          <ul>
            <li>Some are confident.</li>
            <li>Some are anxious.</li>
            <li>Some require extra patience.</li>
            <li>Some need special attention.</li>
          </ul>

          <p>
            Understanding those differences is what makes
            feline care personal.
          </p>

        </div>

      </div>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section className="owner-timeline">

        <div className="timeline-heading">

          <CalendarDays
            size={27}
            strokeWidth={2.3}
          />

          <h3>2015 → Today</h3>

        </div>

        <div className="timeline-track">

          {timeline.map(
            ({ year, title, text }) => (
              <div
                className="timeline-item"
                key={year}
              >

                <div className="timeline-pill">
                  {title}
                </div>

                <div className="timeline-line" />

                <p>{text}</p>

              </div>
            )
          )}

        </div>

      </section>

      {/* =====================================================
          FOUNDER PROMISE
      ===================================================== */}

      <div className="founder-promise">

        <div className="founder-promise-heading">

          <HandHeart
            size={27}
            fill="currentColor"
            strokeWidth={1.8}
          />

          <h3>The Founder's Promise</h3>

        </div>

        <p>
          Running AZIZ FELINES CATTERY is not merely a
          business for Aziz. It is a responsibility.
        </p>

        <p>
          Every cat entrusted to the cattery represents
          someone's family, someone's companion and someone's
          emotional connection.
        </p>

      </div>

    </article>
  );
}

/* =========================================================
   SMALL STORY COMPONENT
========================================================= */

function OwnerStory({ title, children }) {
  return (
    <section className="owner-story-block">

      <h3>{title}</h3>

      <p>{children}</p>

    </section>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AboutCatterySection() {
  return (
    <section className="about-cattery-section">

      <div className="about-cattery-container">

        <AboutCattery />

        <AboutOwner />

      </div>

    </section>
  );
}