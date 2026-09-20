import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import ServiceHero from "../components/services/ServicesHero/ServicesHero";
import ServiceCard from "../components/services/ServiceCard/ServiceCard";
import TrustStrip from "../components/services/TrustStrip/TrustStrip";

import {
  Bath,
  Cat,
  Heart,
  Home,
  Scissors,
  ShieldCheck,
  Stethoscope,
  Truck,
  Utensils,
} from "lucide-react";

import "./Services.css";


/* =========================================================
   SERVICE CARDS
========================================================= */

const cards = [
  {
    id: "boarding",

    title: "Pet Boarding",

    kicker: "A Home Away From Home.",

    text:
      "Safe, clean and comfortable boarding for your beloved cats. We provide spacious rooms, personal care, nutritious food and constant supervision.",

    /*
      GitHub Pages / Vite safe path.
      Do NOT put / before images.
    */
    image: "images/service-boarding.png",

    features: [
      ["Spacious Cat Rooms", Home],
      ["Clean & Hygienic Environment", ShieldCheck],
      ["Regular Feeding", Utensils],
      ["Playtime & Attention", Heart],
      ["24/7 Supervision", ShieldCheck],
      ["CCTV Monitoring", ShieldCheck],
    ],
  },


  /* ===================================================== */

  {
    id: "grooming",

    title: "Pet Grooming",

    kicker: "Clean Cats. Happy Hearts.",

    text:
      "Professional grooming services to keep your cat clean, healthy and looking their best. From bathing to nail trimming, we handle it all with care and patience.",

    image: "images/service-grooming.png",

    features: [
      ["Bathing & Drying", Bath],
      ["Hair Trimming & Styling", Scissors],
      ["Nail Clipping", Scissors],
      ["Ear Cleaning", ShieldCheck],
      ["Flea & Tick Treatment", ShieldCheck],
      ["De-shedding", Scissors],
    ],
  },


  /* ===================================================== */

  {
    id: "care",

    title: "Pet Care",

    kicker: "Health. Nutrition. Happiness.",

    text:
      "Personalized care to meet your cat's daily needs. We ensure proper nutrition, health monitoring, playtime and lots of love, even when you're away.",

    image: "images/service-care.png",

    features: [
      ["Feeding & Nutrition Plans", Utensils],
      ["Health Monitoring & Check-ups", Stethoscope],
      ["Medication Support", ShieldCheck],
      ["Playtime & Mental Stimulation", Cat],
      ["Special Care (for senior/ill cats)", Heart],
      ["Daily Updates (photos/videos)", Heart],
    ],
  },


  /* ===================================================== */

  {
    id: "transport",

    title: "Transport / Delivery",

    kicker: "Safe. Comfortable. On Time.",

    text:
      "We provide secure and stress-free transport services for your cats, using well-ventilated carriers and experienced staff to ensure a safe journey.",

    image: "images/service-transport.png",

    features: [
      ["AC / Ventilated Vehicles", Truck],
      ["Safe & Secure Cat Carriers", ShieldCheck],
      ["Trained & Experienced Staff", ShieldCheck],
      ["Doorstep Pickup & Drop", Truck],
      ["Real-time Updates", ShieldCheck],
      ["Pan India Service", Truck],
    ],
  },


  /* ===================================================== */

  {
    id: "veterinary",

    title: "Veterinary Services",

    kicker: "Expert Care. Better Health.",

    text:
      "Our association with trusted veterinarians ensures your cat gets the best medical care, preventive treatment and timely support for a longer, healthier life.",

    image: "images/service-veterinary.png",

    features: [
      ["General Health Check-ups", Stethoscope],
      ["Vaccination (Tricat / Rabies)", ShieldCheck],
      ["Deworming & Parasite Control", ShieldCheck],
      ["Illness & Injury Treatment", Stethoscope],
      ["Nutritional Guidance", Utensils],
      ["Emergency Support", Heart],
    ],
  },


  /* ===================================================== */

  {
    id: "adoption",

    title: "Adoption",

    kicker: "Give a Home. Change a Life.",

    text:
      "We help rescued and abandoned cats find their forever homes. Adopt, don't buy — give a loving home to a cat in need and make a real difference.",

    image: "images/service-adoption.png",

    features: [
      ["Healthy & Vaccinated Cats", Cat],
      ["Behaviour Assessment & Guidance", Heart],
      ["Adoption Support & Follow-up", Heart],
      ["Safe & Loving Homes", Home],
      ["Screening Process (for Better Matches)", ShieldCheck],
      ["Continued Support", Heart],
    ],
  },
];


/* =========================================================
   SERVICES PAGE
========================================================= */

export default function Services() {
  return (
    <>
      {/* ===================================================
          HEADER
      =================================================== */}

      <Header />


      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <main>

        {/* =================================================
            SERVICES HERO
        ================================================= */}

        <ServiceHero />


        {/* =================================================
            SERVICES CARDS
        ================================================= */}

        <section className="section services-page">
          <div className="container">

            <div className="services-grid">

              {cards.map((card) => (
                <ServiceCard
                  key={card.id}
                  {...card}
                />
              ))}

            </div>

          </div>
        </section>


        {/* =================================================
            TRUST STRIP
        ================================================= */}

        <TrustStrip />

      </main>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <Footer />
    </>
  );
}