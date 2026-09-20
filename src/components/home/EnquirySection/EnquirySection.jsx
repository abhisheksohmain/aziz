import { useState } from "react";

import {
  PawPrint,
  UserRound,
  MessageCircle,
  Mail,
  MapPin,
  House,
  Scissors,
  Heart,
  Stethoscope,
  Truck,
  MoreHorizontal,
  Send,
  ShieldCheck,
  Clock3,
  Sparkles,
} from "lucide-react";

import formBg from "/images/form_bg.png";

import "./EnquirySection.css";


const serviceOptions = [
  {
    id: "boarding",
    label: "Cat Boarding / Hostel",
    icon: House,
  },
  {
    id: "adoption",
    label: "Cat Adoption",
    icon: PawPrint,
  },
  {
    id: "grooming",
    label: "Cat Grooming",
    icon: Scissors,
  },
  {
    id: "veterinary",
    label: "Veterinary Services",
    icon: Stethoscope,
  },
  {
    id: "care",
    label: "Cat Care",
    icon: Heart,
  },
  {
    id: "others",
    label: "Others",
    icon: MoreHorizontal,
  },
  {
    id: "transport",
    label: "Cat Transport / Delivery",
    icon: Truck,
  },
];


function EnquirySection() {
  const [selectedServices, setSelectedServices] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    city: "",
    message: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  const handleServiceChange = (serviceId) => {
    setSelectedServices((previous) => {
      if (previous.includes(serviceId)) {
        return previous.filter((item) => item !== serviceId);
      }

      return [...previous, serviceId];
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedServiceNames = serviceOptions
      .filter((service) => selectedServices.includes(service.id))
      .map((service) => service.label);

    console.log({
      ...formData,
      services: selectedServiceNames,
    });

    // Backend / Formspree / EmailJS later yahan connect kar sakte ho.
    alert("Thank you! Your enquiry has been submitted.");
  };


  return (
    <section
      className="enquiry-section"
      id="enquiry"
      style={{
        backgroundImage: `url(${formBg})`,
      }}
    >

      <div className="enquiry-overlay"></div>


      <div className="enquiry-container">


        {/* LEFT CONTENT */}

        <div className="enquiry-intro">

          <div className="enquiry-intro-label">
            <PawPrint size={17} />
            <span>Get In Touch</span>
          </div>


          <h2>
            Let's Make Your
            <span>Cat's Stay Special</span>
          </h2>


          <p className="enquiry-intro-text">
            Have a question about boarding, grooming, cat care, adoption or
            any of our services? Send us your details and our team will be
            happy to help you.
          </p>


          <div className="enquiry-info-list">

            <div className="enquiry-info-item">

              <div className="enquiry-info-icon">
                <ShieldCheck size={18} />
              </div>

              <div>
                <strong>Safe & Caring Environment</strong>

                <span>
                  Your feline companion is treated with love and attention.
                </span>
              </div>

            </div>


            <div className="enquiry-info-item">

              <div className="enquiry-info-icon">
                <Clock3 size={18} />
              </div>

              <div>
                <strong>Quick Response</strong>

                <span>
                  Share your requirements and our team will get back to you.
                </span>
              </div>

            </div>


            <div className="enquiry-info-item">

              <div className="enquiry-info-icon">
                <Sparkles size={18} />
              </div>

              <div>
                <strong>Personalized Care</strong>

                <span>
                  Every cat has different needs, and we care accordingly.
                </span>
              </div>

            </div>

          </div>


          <div className="enquiry-paw-decoration">
            <PawPrint />
          </div>

        </div>


        {/* RIGHT FORM */}

        <div className="enquiry-form-wrapper">

          <div className="enquiry-form-card">


            {/* FORM HEADER */}

            <div className="enquiry-form-header">

              <div className="enquiry-header-paw">
                <PawPrint size={30} />
              </div>

              <div>
                <h3>Enquiry Form</h3>

                <p>
                  Fill in your details and let us know how we can help you.
                </p>
              </div>

              <div className="enquiry-header-small-paws">
                <PawPrint size={23} />
                <PawPrint size={18} />
              </div>

            </div>


            <form onSubmit={handleSubmit}>


              {/* NAME */}

              <div className="enquiry-field">

                <label htmlFor="enquiry-name">
                  <UserRound size={14} />
                  <span>
                    Name <b>*</b>
                  </span>
                </label>

                <div className="enquiry-input-wrapper">

                  <UserRound size={16} />

                  <input
                    id="enquiry-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    autoComplete="name"
                    required
                  />

                </div>

              </div>


              {/* WHATSAPP */}

              <div className="enquiry-field">

                <label htmlFor="enquiry-whatsapp">
                  <MessageCircle size={14} />
                  <span>
                    WhatsApp No. <b>*</b>
                  </span>
                </label>

                <div className="enquiry-input-wrapper">

                  <MessageCircle size={16} />

                  <input
                    id="enquiry-whatsapp"
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="Your WhatsApp Number"
                    autoComplete="tel"
                    required
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div className="enquiry-field">

                <label htmlFor="enquiry-email">
                  <Mail size={14} />
                  <span>
                    Email <b>*</b>
                  </span>
                </label>

                <div className="enquiry-input-wrapper">

                  <Mail size={16} />

                  <input
                    id="enquiry-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email Address"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>


              {/* CITY */}

              <div className="enquiry-field">

                <label htmlFor="enquiry-city">
                  <MapPin size={14} />
                  <span>
                    City & Location <b>*</b>
                  </span>
                </label>

                <div className="enquiry-input-wrapper">

                  <MapPin size={16} />

                  <input
                    id="enquiry-city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Your City & Location"
                    autoComplete="address-level2"
                    required
                  />

                </div>

              </div>


              {/* SERVICES */}

              <div className="enquiry-services">

                <div className="enquiry-services-title">

                  <PawPrint size={17} />

                  <span>Interested in Service</span>

                </div>


                <div className="service-grid">

                  {serviceOptions.map((service) => {
                    const Icon = service.icon;

                    const isSelected =
                      selectedServices.includes(service.id);

                    return (
                      <label
                        className={`service-option ${
                          isSelected ? "selected" : ""
                        }`}
                        key={service.id}
                      >

                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() =>
                            handleServiceChange(service.id)
                          }
                        />

                        <span className="custom-checkbox">
                          {isSelected ? "✓" : ""}
                        </span>

                        <span className="service-icon">
                          <Icon size={17} />
                        </span>

                        <span className="service-name">
                          {service.label}
                        </span>

                      </label>
                    );
                  })}

                </div>

              </div>


              {/* MESSAGE */}

              <div className="enquiry-field enquiry-message-field">

                <label htmlFor="enquiry-message">
                  <MessageCircle size={14} />

                  <span>
                    Tell us in detail about your requirement. <b>*</b>
                  </span>
                </label>


                <div className="enquiry-textarea-wrapper">

                  <textarea
                    id="enquiry-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    rows="4"
                    required
                  />

                </div>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="enquiry-submit-button"
              >
                <Send size={16} />
                <span>Submit Enquiry</span>
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}


export default EnquirySection;