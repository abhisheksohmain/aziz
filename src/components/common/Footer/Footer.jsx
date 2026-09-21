import {
  PawPrint,
  ChevronRight,
  House,
  Scissors,
  Heart,
  Stethoscope,
  Truck,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Footer.css";


/* =========================================================
   QUICK LINKS
   EXISTING WEBSITE ROUTES
========================================================= */

const quickLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "Customer Reviews",
    to: "/reviews",
  },
  {
    label: "Contact Us",
    to: "/contact",
  },
];


/* =========================================================
   SERVICES
   SAME ROUTES USED IN HEADER
========================================================= */

const services = [
  {
    label: "Pet Boarding",
    to: "/services#boarding",
    icon: House,
  },
  {
    label: "Pet Grooming",
    to: "/services#grooming",
    icon: Scissors,
  },
  {
    label: "Pet Care",
    to: "/services#care",
    icon: Heart,
  },
  {
    label: "Transport / Delivery",
    to: "/services#transport",
    icon: Truck,
  },
  {
    label: "Veterinary Services",
    to: "/services#veterinary",
    icon: Stethoscope,
  },
  {
    label: "Adoption",
    to: "/services#adoption",
    icon: PawPrint,
  },
];


/* =========================================================
   SOCIAL LINKS

   Replace "#" with your actual social links later.
========================================================= */

const socialLinks = [
  {
    label: "Facebook",
    icon: Facebook,
    href: "#",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "#",
  },
  {
    label: "YouTube",
    icon: Youtube,
    href: "#",
  },
];


export default function Footer() {

  const currentYear = new Date().getFullYear();


  return (
    <footer className="site-footer">


      {/* =====================================================
          TOP CURVE DECORATION
          LEFT = WHITE
          RIGHT = WEBSITE MINT
      ===================================================== */}

      <div
        className="footer-top-curves"
        aria-hidden="true"
      >

        <div className="footer-white-curve"></div>

        <div className="footer-mint-curve"></div>

      </div>


      {/* =====================================================
          DECORATIVE PAWS
      ===================================================== */}

      <div
        className="footer-decoration"
        aria-hidden="true"
      >

        <span className="footer-paw footer-paw-one">
          <PawPrint />
        </span>

        <span className="footer-paw footer-paw-two">
          <PawPrint />
        </span>

        <span className="footer-paw footer-paw-three">
          <PawPrint />
        </span>

      </div>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="footer-container">


          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo-link"
              aria-label="AZIZ FELINES CATTERY Home"
            >

              <img
                src={`${import.meta.env.BASE_URL}images/logo1.png`}
                alt="AZIZ FELINES CATTERY"
                className="footer-logo"
              />

            </Link>


            <p className="footer-brand-text">
              A safe, loving and comfortable home for your feline
              friends. We provide caring and professional services
              because every cat deserves the best.
            </p>


            {/* SOCIAL LINKS */}

            <div className="footer-socials">

              {socialLinks.map((social) => {

                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <Icon size={17} />

                  </a>
                );

              })}

            </div>


            {/* HANDWRITTEN MESSAGE */}

            <div className="footer-happy-message">

              <span>
                Happy Cats
              </span>

              <span>
                Happy Hearts
                <Heart size={17} />
              </span>

              <div className="footer-happy-line"></div>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="footer-column">

            <div className="footer-heading">

              <PawPrint size={21} />

              <h3>
                Quick Links
              </h3>

            </div>


            <ul className="footer-links">

              {quickLinks.map((link) => (

                <li key={link.to}>

                  <Link to={link.to}>

                    <ChevronRight size={14} />

                    <span>
                      {link.label}
                    </span>

                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="footer-column">

            <div className="footer-heading">

              <PawPrint size={21} />

              <h3>
                Our Services
              </h3>

            </div>


            <ul className="footer-service-list">

              {services.map((service) => {

                const Icon = service.icon;

                return (

                  <li key={service.to}>

                    <Link
                      to={service.to}
                      className="footer-service-link"
                    >

                      <span className="footer-service-icon">

                        <Icon size={16} />

                      </span>

                      <span className="footer-service-name">

                        {service.label}

                      </span>

                    </Link>

                  </li>

                );

              })}

            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="footer-column">

            <div className="footer-heading">

              <PawPrint size={21} />

              <h3>
                Contact Us
              </h3>

            </div>


            <div className="footer-contact-list">


              {/* ADDRESS */}

              <div className="footer-contact-item">

                <div className="footer-contact-icon">

                  <MapPin size={17} />

                </div>

                <div>

                  <span>
                    Your Cattery Address
                  </span>

                  <span>
                    India
                  </span>

                </div>

              </div>


              {/* PHONE */}

              <div className="footer-contact-item">

                <div className="footer-contact-icon">

                  <Phone size={17} />

                </div>

                <div>

                  <a href="tel:+917700004469">
                    +91 7700004469
                  </a>

                  <span>
                    Call / WhatsApp Available
                  </span>

                </div>

              </div>


              {/* EMAIL */}

              <div className="footer-contact-item">

                <div className="footer-contact-icon">

                  <Mail size={17} />

                </div>

                <div>

                  <a href="mailto:azizfelinescattery@gmail.com
                  </a>">
                    azizfelinescattery@gmail.com
                  </a>

                </div>

              </div>


              {/* TIMING */}

              <div className="footer-contact-item">

                <div className="footer-contact-icon">

                  <Clock3 size={17} />

                </div>

                <div>

                  <span>
                    Mon - Sun
                  </span>

                  <span>
                    9:00 AM - 8:00 PM
                  </span>

                </div>

              </div>

            </div>


            {/* CONTACT CTA */}

            <Link
              to="/contact"
              className="footer-contact-button"
            >

              <span>
                Make an Enquiry
              </span>

              <ChevronRight size={16} />

            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <div className="footer-newsletter">

        <div className="footer-newsletter-container">


          <div className="newsletter-content">

            {/* <div className="newsletter-icon">

              <Mail size={20} />

            </div> */}


            <div>

              {/* <h3>
                Stay Connected
              </h3> */}

              {/* <p>
                Get cat care tips, updates and special offers.
              </p> */}

            </div>

          </div>


          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >

            {/* <div className="newsletter-input">

              <Mail size={16} />

              <input
                type="email"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                required
              />

            </div> */}


             

          </form>

        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">


          <p className="footer-copyright">

            © {currentYear} WEBINFOTECH.
            All rights reserved.

          </p>


          <div className="footer-bottom-tagline">

            <span className="tagline-line"></span>

            <PawPrint size={16} />

            {/* <span>
              Because Every Cat Matters
            </span> */}

            <span className="tagline-line"></span>

          </div>


          {/* <Link
            to="/contact"
            className="footer-bottom-contact"
          >
            Book / Enquire
          </Link> */}

        </div>


        {/* =================================================
            BOTTOM WAVE
        ================================================= */}

        <div
          className="footer-waves"
          aria-hidden="true"
        >

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

    </footer>
  );
}