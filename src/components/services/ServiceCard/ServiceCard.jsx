
import { ArrowRight, Bath, Cat, Heart, Home, Scissors, ShieldCheck, Stethoscope, Truck, Utensils, Syringe, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const iconMap={boarding:Home,grooming:Scissors,care:Heart,transport:Truck,veterinary:Stethoscope,adoption:Cat};
const colors={boarding:"#e72b73",grooming:"#1597d2",care:"#23a858",transport:"#f58a18",veterinary:"#7135c8",adoption:"#159e99"};

export default function ServiceCard({id,title,kicker,text,features,image}){
 const Icon=iconMap[id]||PawPrint, color=colors[id]||"#075c55";
 return <article className="service-card" id={id} style={{"--accent":color}}>
   <div className="service-card-head">
     <div className="service-card-title"><span><Icon/></span><div><h3>{title}</h3><strong>{kicker}</strong></div></div>
     <img src={image} alt={title}/>
   </div>
   <p>{text}</p>
   <div className="feature-list">{features.map(([label,I])=><div key={label}><I/><span>{label}</span></div>)}</div>
   <Link className="btn service-btn" to="/contact">Learn More <ArrowRight size={17}/></Link>
   <div className="service-doodle">♡ Paw & Care Always</div>
 </article>
}
