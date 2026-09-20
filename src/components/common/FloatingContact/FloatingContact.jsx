import React from "react";
import { Phone } from "lucide-react";
import "./FloatingContact.css";

export default function FloatingContact() {
  return (
    <div className="floating-contact">

      {/* LEFT — PHONE */}
      <a
        href="tel:+919999999999"
        className="floating-contact-btn phone-btn"
        aria-label="Call AZIZ FELINES CATTERY"
      >
        <Phone size={23} strokeWidth={2.4} />
      </a>

      {/* RIGHT — WHATSAPP */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact-btn whatsapp-btn"
        aria-label="WhatsApp AZIZ FELINES CATTERY"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="whatsapp-icon"
        >
          <path
            fill="currentColor"
            d="M19.11 17.33c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.27-.7.9-.86 1.09-.16.18-.32.2-.6.07-.27-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.57.65.2 1.24.17 1.71.1.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.52-.32Z"
          />

          <path
            fill="currentColor"
            d="M16.03 3.2c-7.07 0-12.82 5.75-12.82 12.82 0 2.26.59 4.47 1.72 6.41L3.1 28.8l6.54-1.72a12.77 12.77 0 0 0 6.39 1.7h.01c7.06 0 12.81-5.75 12.81-12.82S23.09 3.2 16.03 3.2Zm0 23.42h-.01a10.61 10.61 0 0 1-5.4-1.48l-.39-.23-3.88 1.02 1.04-3.78-.25-.39a10.62 10.62 0 1 1 8.89 4.86Z"
          />
        </svg>
      </a>

    </div>
  );
}