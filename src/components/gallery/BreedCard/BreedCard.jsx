
import { ArrowRight, Heart, Moon, PawPrint, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import "./BreedCard.css";

export default function BreedCard({breed,image,color,text,tags}){
 return <article className="breed-card">
   <img className="breed-img" src={image} alt={breed}/>
   <div className="breed-body">
     <h3 style={{"--breed":color}}><PawPrint/> {breed}</h3>
     <p>{text}</p>
     <div className="breed-tags">{tags.map((t,i)=><span key={t}><Heart/> {t}</span>)}</div>
     <Link className="btn breed-btn" to="/contact">View Details <ArrowRight size={16}/></Link>
   </div>
 </article>
}
