import "./GalleryHero.css";

export default function GalleryHero() {
  return (
    <section className="gallery-hero">
      <img
        className="gallery-hero-image"
        src={`${import.meta.env.BASE_URL}images/gallery-hero.png`}
        alt="AZIZ FELINES CATTERY cats"
        loading="eager"
        decoding="async"
      />
    </section>
  );
}