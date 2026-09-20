
import { Facebook, Globe, Instagram, Mail, PawPrint, Phone, Youtube } from "lucide-react";
import "./Footer.css";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-wave"></div>
      <div className="footer-inner container">
        <div className="footer-brand">
          <PawPrint size={30}/>
          <div><strong>AZIZ FELINES CATTERY</strong><span>Dedicated to Cats. Committed to Their Care.</span></div>
        </div>
        <a href="https://wa.me/917700004469" target="_blank" rel="noreferrer"><Phone/> 770000 4469</a>
        <a href="mailto:azizfelinescattery@gmail.com"><Mail/> azizfelinescattery@gmail.com</a>
        <a href="https://www.azizfelinescattery.in" target="_blank" rel="noreferrer"><Globe/> www.azizfelinescattery.in</a>
        <div className="footer-social"><span>Follow Us</span><Facebook/><Instagram/><Youtube/></div>
      </div>
      <div className="footer-bottom">Healthy Cats • Happy Homes</div>
    </footer>
  );
}
