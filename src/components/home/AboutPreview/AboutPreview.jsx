import {
  PawPrint,
  Home,
  Scissors,
  Heart,
  Truck,
  Cross,
  ShieldCheck,
  UserRound,
  Sparkles,
  Leaf,
  Target,
  Send,
  MapPin,
  Mail,
  MessageCircle,
  User,
  ChevronDown,
  Star,
} from "lucide-react";

import "./AboutPreview.css";

/* =========================================================
   DUMMY IMAGE
   Replace this URL later with your actual cat image.
========================================================= */

const CAT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=85";


/* =========================================================
   SPECIALISATION ITEMS
========================================================= */

const specialisationItems = [
  {
    icon: PawPrint,
    title: "Breed",
    sub: "Kittens",
  },
  {
    icon: Home,
    title: "Boarding",
    sub: "& Hostel",
  },
  {
    icon: Scissors,
    title: "Grooming",
    sub: "",
  },
  {
    icon: Heart,
    title: "Feline",
    sub: "Care",
  },
  {
    icon: Truck,
    title: "Transport /",
    sub: "Delivery",
  },
  {
    icon: Cross,
    title: "Veterinary",
    sub: "Services",
  },
  {
    icon: Heart,
    title: "Adoptions",
    sub: "(Availability Varies)",
  },
];


/* =========================================================
   WHY CHOOSE US
========================================================= */

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Trusted by Pet Parents",
    text: "Thousands of happy cat parents trust us.",
  },
  {
    icon: UserRound,
    title: "Experienced & Trained Staff",
    text: "Skilled, compassionate and cat-loving team.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic Environment",
    text: "Clean spaces, regular sanitization and strict safety protocols.",
  },
  {
    icon: PawPrint,
    title: "Individual Attention",
    text: "Every cat is unique. We treat them like family.",
  },
  {
    icon: Sparkles,
    title: "Modern Facilities",
    text: "Comfortable, spacious and cat-friendly setup.",
  },
  {
    icon: Leaf,
    title: "Stress-Conscious Care",
    text: "Gentle handling and a calm environment for your cat's well-being.",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CatCareSection() {
  return (
    <section className="cat-care-section">
      <div className="cat-care-container">

        {/* =====================================================
            LEFT COLUMN
        ===================================================== */}

        <div className="cat-care-left">

          {/* =========================
              SPECIALISATION CARD
          ========================= */}

          <article className="specialisation-card">

            <div className="specialisation-heading">

              <PawPrint
                size={39}
                strokeWidth={2.5}
                aria-hidden="true"
              />

              <div>
                <h2>Our Specialisation in Cats</h2>

                <p>
                  Because Cats Deserve Special Care.
                </p>
              </div>

            </div>


            <div className="specialisation-intro">

              <div className="specialisation-copy">

                <p>
                  At <strong>AZIZ FELINES CATTERY</strong>, we focus
                  exclusively on cats — understanding their unique
                  needs, behaviour and personalities.
                </p>

                <p>
                  Our feline-focused approach ensures expert care,
                  gentle handling and a stress-free environment
                  for every cat.
                </p>

              </div>


              <div className="specialisation-image-wrap">

                <img
                  src={CAT_IMAGE}
                  alt="Cat at AZIZ FELINES CATTERY"
                  className="specialisation-image"
                  loading="lazy"
                  decoding="async"
                />

                <span className="image-heart">♡</span>

              </div>

            </div>


            {/* =========================
                SPECIALISATION SERVICES
            ========================= */}

            <div className="specialisation-services">

              {specialisationItems.map(
                ({ icon: Icon, title, sub }) => (
                  <div
                    className="specialisation-service"
                    key={`${title}-${sub}`}
                  >

                    <Icon
                      size={24}
                      strokeWidth={2.3}
                      aria-hidden="true"
                    />

                    <span>{title}</span>

                    {sub && (
                      <small>{sub}</small>
                    )}

                  </div>
                )
              )}

            </div>

          </article>


          {/* =========================
              MISSION CARD
          ========================= */}

          <article className="mission-card">

            <div className="mission-heading">

              <Target
                size={39}
                strokeWidth={2.3}
                aria-hidden="true"
              />

              <div>
                <h2>Our Mission</h2>

                <p>
                  Happier Cats. Healthier Lives.
                </p>
              </div>

            </div>


            <div className="mission-content">

              <div className="mission-copy">

                <p>
                  To be a trusted and professional destination
                  for feline care — where cat parents can leave
                  their pets in responsible hands.
                </p>

                <p>
                  We are committed to providing a safe, secure,
                  clean and cat-friendly environment with
                  individual attention, proper handling and a
                  stress-conscious atmosphere.
                </p>

              </div>


              <div className="mission-doodle">

                <span>
                  “ Happy Cats
                </span>

                <span>
                  Happy Families ♡
                </span>

                <PawPrint
                  size={19}
                  strokeWidth={2}
                />

              </div>

            </div>

          </article>

        </div>


        {/* =====================================================
            CENTER COLUMN
        ===================================================== */}

        <article className="why-card">

          <div className="why-heading">

            <Star
              size={40}
              fill="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            />

            <div>
              <h2>Why Choose Us?</h2>

              <p>
                Your Cat's Happiness is Our Priority.
              </p>
            </div>

          </div>


          <div className="why-list">

            {whyChooseUs.map(
              ({ icon: Icon, title, text }) => (
                <div
                  className="why-item"
                  key={title}
                >

                  <div className="why-icon">
                    <Icon
                      size={20}
                      strokeWidth={2.3}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="why-item-content">

                    <h3>{title}</h3>

                    <p>{text}</p>

                  </div>

                </div>
              )
            )}

          </div>


          <div className="why-doodle">

            <span>
              Happy Cats
            </span>

            <span>
              Happy Families
            </span>

            <PawPrint
              size={18}
              strokeWidth={2}
            />

            <b>♡</b>

          </div>

        </article>


        {/* =====================================================
            RIGHT COLUMN - ENQUIRY FORM
        ===================================================== */}

        <article className="enquiry-card">

          <div className="enquiry-heading">

            <PawPrint
              size={38}
              strokeWidth={2.5}
              aria-hidden="true"
            />

            <div>

              <h2>Enquiry Form</h2>

              <p>
                Get in touch with us today!
              </p>

            </div>

          </div>


          <form
            className="enquiry-form"
            onSubmit={(event) => {
              event.preventDefault();

              alert(
                "Thank you! Your enquiry has been received."
              );
            }}
          >

            {/* NAME */}

            <label className="form-field">

              <span className="field-icon">
                <User size={17} />
              </span>

              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
              />

            </label>


            {/* WHATSAPP */}

            <label className="form-field">

              <span className="field-icon">
                <MessageCircle size={17} />
              </span>

              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp No. *"
                required
              />

            </label>


            {/* EMAIL */}

            <label className="form-field">

              <span className="field-icon">
                <Mail size={17} />
              </span>

              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
              />

            </label>


            {/* LOCATION */}

            <label className="form-field">

              <span className="field-icon">
                <MapPin size={17} />
              </span>

              <input
                type="text"
                name="location"
                placeholder="City & Location *"
                required
              />

            </label>


            {/* SERVICE */}

            <label className="form-field select-field">

              <span className="field-icon">
                <PawPrint size={17} />
              </span>

              <select
                name="service"
                defaultValue=""
                required
              >

                <option value="" disabled>
                  Interested in Service *
                </option>

                <option value="boarding">
                  Pet Boarding
                </option>

                <option value="grooming">
                  Pet Grooming
                </option>

                <option value="care">
                  Pet Care
                </option>

                <option value="transport">
                  Transport / Delivery
                </option>

                <option value="veterinary">
                  Veterinary Services
                </option>

                <option value="adoption">
                  Adoption
                </option>

              </select>

              <ChevronDown
                className="select-arrow"
                size={17}
                aria-hidden="true"
              />

            </label>


            {/* MESSAGE */}

            <label className="form-field message-field">

              <span className="field-icon">
                <MessageCircle size={17} />
              </span>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us in detail about your requirement..."
              />

            </label>


            {/* SUBMIT */}

            <button
              type="submit"
              className="enquiry-submit"
            >

              <Send
                size={17}
                aria-hidden="true"
              />

              <span>
                Send Enquiry
              </span>

            </button>


            {/* PRIVACY */}

            <div className="form-security">

              <ShieldCheck
                size={16}
                aria-hidden="true"
              />

              <span>
                Your information is safe with us.
              </span>

            </div>

          </form>


          <div className="enquiry-paw">

            <PawPrint
              size={17}
              fill="currentColor"
              aria-hidden="true"
            />

          </div>

        </article>

      </div>
    </section>
  );
}