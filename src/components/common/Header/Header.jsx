
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Header.css";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/gallery", "Gallery"],
  ["/reviews", "Customer Reviews"],
  ["/contact", "Contact Us"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setServices(false);
  };

  return (
    <header className="site-header">

      <div className="header-shell">

        {/* ========================================
            LOGO + BRAND
        ======================================== */}

        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="AZIZ FELINES CATTERY logo"
          />

          <div className="brand-text">
            <strong>AZIZ FELINES CATTERY</strong>

            <span>
              Dedicated to Cats. Committed to Their Care.
            </span>
          </div>
        </Link>


        {/* ========================================
            MOBILE MENU BUTTON
        ======================================== */}

        <button
          type="button"
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v);
            setServices(false);
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>


        {/* ========================================
            NAVIGATION
        ======================================== */}

        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
        >

          {/* HOME */}

          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>


          {/* ABOUT */}

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About Us
          </NavLink>


          {/* ========================================
              SERVICES
          ======================================== */}

          <div className="service-nav">

            <button
              type="button"
              className={`nav-service ${
                services ? "active" : ""
              }`}
              onClick={() => setServices((v) => !v)}
            >
              <span>Services</span>

              <ChevronDown
                size={15}
                className={services ? "rotate" : ""}
              />
            </button>


            {services && (
              <div className="service-dropdown">

                <Link
                  to="/services#boarding"
                  onClick={closeMenu}
                >
                  Pet Boarding
                </Link>

                <Link
                  to="/services#grooming"
                  onClick={closeMenu}
                >
                  Pet Grooming
                </Link>

                <Link
                  to="/services#care"
                  onClick={closeMenu}
                >
                  Pet Care
                </Link>

                <Link
                  to="/services#transport"
                  onClick={closeMenu}
                >
                  Transport / Delivery
                </Link>

                <Link
                  to="/services#veterinary"
                  onClick={closeMenu}
                >
                  Veterinary Services
                </Link>

                <Link
                  to="/services#adoption"
                  onClick={closeMenu}
                >
                  Adoption
                </Link>

              </div>
            )}

          </div>


          {/* ========================================
              OTHER PAGES
          ======================================== */}

          {links.slice(2).map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}

        </nav>

      </div>


      {/* ========================================
          CURVED HEADER BOTTOM
      ======================================== */}

      <div
        className="header-curve"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M 0 0
              L 1440 0
              L 1440 50

              C 1320 49,
                1180 49,
                1030 51

              C 880 53,
                735 57,
                590 62

              C 440 68,
                300 74,
                180 73

              C 100 72,
                40 69,
                0 67

              Z
            "
            fill="#ffffff"
          />
        </svg>
      </div>

    </header>
  );
}