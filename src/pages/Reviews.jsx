
import { useState } from "react";

import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

import ReviewHero from "../components/reviews/ReviewHero/ReviewHero";
import ReviewIntro from "../components/reviews/ReviewIntro/ReviewIntro";
import ReviewFilters from "../components/reviews/ReviewFilters/ReviewFilters";
import ReviewGrid from "../components/reviews/ReviewGrid/ReviewGrid";
import ThankYou from "../components/reviews/ThankYou/ThankYou";

import "./Reviews.css";

export default function Reviews() {
  const [active, setActive] = useState("All Reviews");

  return (
    <>
      <Header />

      <main>
        {/* Review Hero - Image Only */}
        <ReviewHero />

        {/* Reviews Content */}
        <section className="section reviews-page">
          <div className="container">
            <ReviewIntro />

            <ReviewFilters
              active={active}
              setActive={setActive}
            />

            <ReviewGrid active={active} />
          </div>
        </section>

        {/* Thank You Section */}
        <ThankYou />
      </main>

      <Footer />
    </>
  );
}

