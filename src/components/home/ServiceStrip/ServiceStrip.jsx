
import { Cat, HeartHandshake, House, Scissors, ShieldCheck, Stethoscope, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import "./ServiceStrip.css";

const items=[
  ["Pet Boarding",House,"#e72b73"],
  ["Pet Grooming",Scissors,"#f27e16"],
  ["Pet Care",HeartHandshake,"#23a858"],
  ["Transport / Delivery",Truck,"#1597d2"],
  ["Veterinary Services",Stethoscope,"#7135c8"],
  ["Adoptions",Cat,"#159e99"],
];

export default function ServiceStrip(){
  return <section className="service-strip">
    <div className="service-strip-inner container">
      {items.map(([label,Icon,color])=><Link key={label} to="/services" className="strip-item">
        <span style={{background:color}}><Icon/></span><strong>{label}</strong><small>{label==="Pet Boarding"?"A home away from home":label==="Pet Grooming"?"Clean. Fresh. Confident.":label==="Pet Care"?"Health. Nutrition. Happiness.":label==="Transport / Delivery"?"Safe & Stress-free Travel":label==="Veterinary Services"?"Prevention. Treatment. Better Health.":"Give a home. Change a life."}</small>
      </Link>)}
    </div>
  </section>
}
