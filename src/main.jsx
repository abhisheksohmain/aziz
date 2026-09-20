import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Floating Contact Buttons
import FloatingContact from "./components/common/FloatingContact/FloatingContact";

// Scroll To Top
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>

      {/* Automatically scroll to top whenever route changes */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/reviews" element={<Reviews />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Fixed Phone + WhatsApp Buttons */}
      <FloatingContact />

    </HashRouter>
  </React.StrictMode>
);