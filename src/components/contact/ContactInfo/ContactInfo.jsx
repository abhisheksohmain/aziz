
import { Clock3, Mail, MapPin, MessageCircle, PawPrint, ShieldCheck } from "lucide-react";
import "./ContactInfo.css";

export default function ContactInfo(){
 return <div className="contact-info">
   <div className="contact-heading"><PawPrint/><div><h2>Get In Touch</h2><p>We're here to help! Reach out to us anytime.</p></div></div>
   <div className="contact-cards">
     <a className="contact-card whatsapp" href="https://wa.me/917700004469" target="_blank" rel="noreferrer"><MessageCircle/><div><h3>WhatsApp Us</h3><p>Chat with us directly for quick support & bookings.</p><strong>770000 4469 →</strong><small>Click to chat on WhatsApp</small></div></a>
     <a className="contact-card email" href="mailto:azizfelinescattery@gmail.com"><Mail/><div><h3>Email Us</h3><p>Send us your queries, requirements or feedback.</p><strong>azizfelinescattery@gmail.com →</strong><small>We'll get back to you soon!</small></div></a>
   </div>
   <div className="contact-trust"><span><PawPrint/>Trusted by<br/>Cat Parents</span><span><ShieldCheck/>Safe & Hygienic<br/>Environment</span><span><PawPrint/>Professional<br/>Care & Support</span><span><Clock3/>24/7<br/>Assistance</span></div>
   <div className="location-card"><div className="fake-map"><MapPin/><b>AZIZ FELINES CATTERY</b><span>Visit Us<br/>Today! →</span></div><div><h3><MapPin/> Our Location</h3><p><strong>AZIZ FELINES CATTERY</strong><br/>(Address / Area Details)<br/>City, State - PIN Code</p><a className="btn" href="https://maps.google.com" target="_blank" rel="noreferrer">Get Directions</a></div></div>
 </div>
}
