import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Hero from "../components/home/Hero/Hero";
import ServiceStrip from "../components/home/ServiceStrip/ServiceStrip";
import AboutPreview from "../components/home/AboutPreview/AboutPreview";
import WhyChoose from "../components/home/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceStrip />
        <AboutPreview />
        <WhyChoose />
      </main>
      <Footer />
    </>
  );
}