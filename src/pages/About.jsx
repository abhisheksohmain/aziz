
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

import AboutHero from "../components/about/AboutHero/AboutHero";

import AboutOwner from "../components/about/AboutOwner/AboutOwner";
import MoreThanCattery from "../components/about/MoreThanCattery/MoreThanCattery";
import ReputationSection from "../components/about/ReputationSection/ReputationSection";
import PhilosophySection from "../components/about/PhilosophySection/PhilosophySection";
import AboutTimeline from "../components/about/AboutTimeline/AboutTimeline";
import FounderPromise from "../components/about/FounderPromise/FounderPromise";

// import "./About.css";

export default function About() {
  return (
    <>
      <Header />

      <main>
          <AboutHero />

        {/* Section 1 — About Us / About the Owner */}
        <AboutOwner />

        {/* Section 2 — More Than a Cattery */}
        <MoreThanCattery />

        {/* Section 3 — A Reputation Built Through Cats & Their Families */}
        <ReputationSection />

        {/* Section 4 — The Philosophy Behind AZIZ FELINES CATTERY */}
        <PhilosophySection />

        {/* Section 5 — 2015 → Today */}
        <AboutTimeline />

        {/* Section 6 — The Founder’s Promise */}
        <FounderPromise />
      </main>

      <Footer />
    </>
  );
}
