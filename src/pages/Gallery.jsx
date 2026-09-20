
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import GalleryHero from "../components/gallery/GalleryHero/GalleryHero";
import BreedGrid from "../components/gallery/BreedGrid/BreedGrid";
import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      <Header />

      <main>
        {/* Gallery Hero - Image Only */}
        <GalleryHero />

        {/* Featured Breeds */}
        <section className="section gallery-page">
          <div className="container">
            <div className="gallery-heading">
              <span></span>

              <h2 className="section-title">
                Our Featured Breeds
              </h2>

              <span></span>
            </div>

            <BreedGrid />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
