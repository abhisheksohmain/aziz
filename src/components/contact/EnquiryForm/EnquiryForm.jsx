import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  PawPrint,
  Send,
  UserRound,
} from "lucide-react";

import "./EnquiryForm.css";

const services = [
  "Cat Boarding / Hostel",
  "Cat Adoption",
  "Cat Grooming",
  "Veterinary Services",
  "Cat Care",
  "Others",
  "Cat Transport / Delivery",
];

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    location: "",
    message: "",
  });

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =========================================================
     TOGGLE SERVICE
  ========================================================= */

  const toggle = (service) => {
    setSelected((previous) =>
      previous.includes(service)
        ? previous.filter((item) => item !== service)
        : [...previous, service]
    );
  };

  /* =========================================================
     SUBMIT ENQUIRY
     WHATSAPP ONLY — NO API
  ========================================================= */

  const submit = (event) => {
    event.preventDefault();

    const servicesText =
      selected.length > 0
        ? selected.join(", ")
        : "Not specified";

    const whatsappMessage = `
🐾 *NEW ENQUIRY — AZIZ FELINES CATTERY*

👤 *Name:*
${formData.name}

📱 *WhatsApp Number:*
${formData.whatsapp}

📧 *Email:*
${formData.email}

📍 *City & Location:*
${formData.location}

🐱 *Interested Service:*
${servicesText}

📝 *Requirement:*
${formData.message}

━━━━━━━━━━━━━━━━━━
AZIZ FELINES CATTERY
Thank you for your enquiry.
━━━━━━━━━━━━━━━━━━
`;

    const encodedMessage = encodeURIComponent(
      whatsappMessage.trim()
    );

    /*
      India country code:
      91 + 7700004469
    */

    const whatsappNumber = "917700004469";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    /* Open WhatsApp */

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    /* Show success message */

    setSent(true);
  };

  /* =========================================================
     RESET FORM
  ========================================================= */

  const resetForm = () => {
    setFormData({
      name: "",
      whatsapp: "",
      email: "",
      location: "",
      message: "",
    });

    setSelected([]);
    setSent(false);
  };

  return (
    <form
      className="enquiry"
      onSubmit={submit}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="enquiry-head">

        <PawPrint />

        <div>
          <h2>Enquiry Form</h2>

          <p>
            Fill in your details and let us know how we can help you.
          </p>
        </div>

      </div>

      {/* =====================================================
          NAME
      ===================================================== */}

      <label>

        <UserRound />

        <span>
          Name <b>*</b>
        </span>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Full Name"
        />

      </label>

      {/* =====================================================
          WHATSAPP NUMBER
      ===================================================== */}

      <label>

        <MessageCircle />

        <span>
          WhatsApp No. <b>*</b>
        </span>

        <input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          inputMode="tel"
          placeholder="Your WhatsApp Number"
        />

      </label>

      {/* =====================================================
          EMAIL
      ===================================================== */}

      <label>

        <Mail />

        <span>
          Email <b>*</b>
        </span>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email Address"
        />

      </label>

      {/* =====================================================
          CITY & LOCATION
      ===================================================== */}

      <label>

        <MapPin />

        <span>
          City &amp; Location <b>*</b>
        </span>

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder="Your City & Location"
        />

      </label>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <div className="service-check">

        <div className="check-title">

          <PawPrint />

          <span>
            Interested in Service
          </span>

        </div>

        <div className="checks">

          {services.map((service) => {

            const isSelected =
              selected.includes(service);

            return (
              <button
                type="button"
                key={service}
                className={
                  isSelected
                    ? "checked"
                    : ""
                }
                onClick={() => toggle(service)}
                aria-pressed={isSelected}
              >

                <span className="check-box">
                  {isSelected ? "✓" : ""}
                </span>

                {service}

              </button>
            );
          })}

        </div>

      </div>

      {/* =====================================================
          REQUIREMENT MESSAGE
      ===================================================== */}

      <label>

        <Mail />

        <span>
          Tell us in detail about your requirement. <b>*</b>
        </span>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          placeholder="Write your message here..."
        />

      </label>

      {/* =====================================================
          SUBMIT BUTTON
      ===================================================== */}

      <button
        className="btn submit"
        type="submit"
      >

        <Send size={17} />

        {sent
          ? "Enquiry Sent ✓"
          : "Submit Enquiry"}

      </button>

      {/* =====================================================
          SUCCESS MESSAGE
      ===================================================== */}

      {sent && (
        <div className="success">

          <p>
            Your enquiry is ready in WhatsApp.
            Please press <strong>Send</strong> in WhatsApp
            to complete the enquiry.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="new-enquiry"
          >
            Submit Another Enquiry
          </button>

        </div>
      )}

    </form>
  );
}