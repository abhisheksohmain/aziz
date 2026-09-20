
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

import ContactHero from "../components/contact/ContactHero/ContactHero";
import ContactInfo from "../components/contact/ContactInfo/ContactInfo";
import EnquiryForm from "../components/contact/EnquiryForm/EnquiryForm";

import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Header />

      <main>
        {/* Contact Hero - Image Only */}
        <ContactHero />

        {/* Contact Content */}
        <section className="section contact-page">
          <div className="container contact-grid">
            <ContactInfo />
            <EnquiryForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
