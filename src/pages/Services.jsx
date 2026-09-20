import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import ServiceHero from "../components/services/ServicesHero/ServicesHero";
import ServiceCard from "../components/services/ServiceCard/ServiceCard";
import TrustStrip from "../components/services/TrustStrip/TrustStrip";
import "./Services.css";

const cards = [
  {
    id: "boarding",
    title: "Pet Boarding",
    kicker: "A Home Away From Home.",
    text: "Safe, clean and comfortable boarding for your beloved cats. We provide spacious rooms, personal care, nutritious food and constant supervision.",
    image: "/images/service-1.jpg",
    features: [
      ["Spacious Cat Rooms", null],
      ["Clean & Hygienic Environment", null],
      ["Regular Feeding", null],
      ["Playtime & Attention", null],
      ["24/7 Supervision", null],
      ["CCTV Monitoring", null],
    ],
  },
  {
    id: "grooming",
    title: "Pet Grooming",
    kicker: "Clean Cats. Happy Hearts.",
    text: "Professional grooming services to keep your cat clean, healthy and looking their best. From bathing to nail trimming, we handle it all with care and patience.",
    image: "/images/service-2.jpg",
    features: [
      ["Bathing & Drying", null],
      ["Hair Trimming & Styling", null],
      ["Nail Clipping", null],
      ["Ear Cleaning", null],
      ["Flea & Tick Treatment", null],
      ["De-shedding", null],
    ],
  },
  {
    id: "care",
    title: "Pet Care",
    kicker: "Health. Nutrition. Happiness.",
    text: "Personalized care to meet your cat's daily needs. We ensure proper nutrition, health monitoring, playtime and lots of love, even when you're away.",
    image: "/images/service-3.jpg",
    features: [
      ["Feeding & Nutrition Plans", null],
      ["Health Monitoring & Check-ups", null],
      ["Medication Support", null],
      ["Playtime & Mental Stimulation", null],
      ["Special Care (for senior/ill cats)", null],
      ["Daily Updates (photos/videos)", null],
    ],
  },
  {
    id: "transport",
    title: "Transport / Delivery",
    kicker: "Safe. Comfortable. On Time.",
    text: "We provide secure and stress-free transport services for your cats, using well-ventilated carriers and experienced staff to ensure a safe journey.",
    image: "/images/service-4.jpg",
    features: [
      ["AC / Ventilated Vehicles", null],
      ["Safe & Secure Cat Carriers", null],
      ["Trained & Experienced Staff", null],
      ["Doorstep Pickup & Drop", null],
      ["Real-time Updates", null],
      ["Pan India Service", null],
    ],
  },
  {
    id: "veterinary",
    title: "Veterinary Services",
    kicker: "Expert Care. Better Health.",
    text: "Our association with trusted veterinarians ensures your cat gets the best medical care, preventive treatment and timely support for a longer, healthier life.",
    image: "/images/service-5.jpg",
    features: [
      ["General Health Check-ups", null],
      ["Vaccination (Tricat / Rabies)", null],
      ["Deworming & Parasite Control", null],
      ["Illness & Injury Treatment", null],
      ["Nutritional Guidance", null],
      ["Emergency Support", null],
    ],
  },
  {
    id: "adoption",
    title: "Adoption",
    kicker: "Give a Home. Change a Life.",
    text: "We help rescued and abandoned cats find their forever homes. Adopt, don't buy — give a loving home to a cat in need and make a real difference.",
    image: "/images/service-6.jpg",
    features: [
      ["Healthy & Vaccinated Cats", null],
      ["Behaviour Assessment & Guidance", null],
      ["Adoption Support & Follow-up", null],
      ["Safe & Loving Homes", null],
      ["Screening Process (for Better Matches)", null],
      ["Continued Support", null],
    ],
  },
];

export default function Services() {
  const withIcons = cards.map((c) => ({
    ...c,
    features: c.features.map(([x]) => [x, () => null]),
  }));

  return (
    <>
      <Header />

      <main>
        {/* Services Hero */}
        <ServiceHero />

        {/* Services Cards */}
        <section className="section services-page">
          <div className="container">
            <div className="services-grid">
              {withIcons.map((c) => (
                <ServiceCard key={c.id} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <TrustStrip />
      </main>

      <Footer />
    </>
  );
}