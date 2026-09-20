import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  PawPrint,
  ShieldCheck,
} from "lucide-react";

import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <div className="contact-info">

      {/* ==============================
          CONTACT HEADING
      ============================== */}
      <div className="contact-heading">
        <PawPrint />

        <div>
          <h2>Get In Touch</h2>
          <p>We're here to help! Reach out to us anytime.</p>
        </div>
      </div>


      {/* ==============================
          WHATSAPP + EMAIL
      ============================== */}
      <div className="contact-cards">

        {/* WhatsApp */}
        <a
          className="contact-card whatsapp"
          href="https://wa.me/917700004469"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle />

          <div>
            <h3>WhatsApp Us</h3>

            <p>
              Chat with us directly for quick support & bookings.
            </p>

            <strong>770000 4469 →</strong>

            <small>Click to chat on WhatsApp</small>
          </div>
        </a>


        {/* Email */}
        <a
          className="contact-card email"
          href="mailto:azizfelinescattery@gmail.com"
        >
          <Mail />

          <div>
            <h3>Email Us</h3>

            <p>
              Send us your queries, requirements or feedback.
            </p>

            <strong>
              azizfelinescattery@gmail.com →
            </strong>

            <small>We'll get back to you soon!</small>
          </div>
        </a>

      </div>


      {/* ==============================
          TRUST FEATURES
      ============================== */}
      <div className="contact-trust">

        <span>
          <PawPrint />
          Trusted by
          <br />
          Cat Parents
        </span>

        <span>
          <ShieldCheck />
          Safe & Hygienic
          <br />
          Environment
        </span>

        <span>
          <PawPrint />
          Professional
          <br />
          Care & Support
        </span>

        <span>
          <Clock3 />
          24/7
          <br />
          Assistance
        </span>

      </div>


      {/* ==============================
          REAL GOOGLE MAP
      ============================== */}
      <div className="location-map">

        <div className="location-map-frame">

          <iframe
            title="AZIZ FELINES CATTERY Location"
            src="https://www.google.com/maps?q=AZIZ+FELINES+CATTERY,+AL+SABAH+APT,+A%2F01,+near+SAAD+MASJID+MOTI+BAUG,+Almas+Colony,+Tetavli,+Kausa,+Mumbra,+Thane,+Maharashtra+400612&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Map information overlay */}
          <div className="map-info">

            <div className="map-info-icon">
              <MapPin />
            </div>

            <div className="map-info-content">
              <strong>AZIZ FELINES CATTERY</strong>

              <span>
                AL SABAH APT, A/01, near SAAD MASJID
                <br />
                Moti Baug, Kausa, Mumbra
              </span>
            </div>

          </div>


          {/* Directions button */}
          <a
            className="map-directions-btn"
            href="https://www.google.com/maps/dir/?api=1&destination=AZIZ+FELINES+CATTERY,+AL+SABAH+APT,+A%2F01,+near+SAAD+MASJID+MOTI+BAUG,+Almas+Colony,+Tetavli,+Kausa,+Mumbra,+Thane,+Maharashtra+400612"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin />
            Get Directions
          </a>

        </div>

      </div>

    </div>
  );
}