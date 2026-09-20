
import { Heart, PawPrint, ShieldCheck, Star, UsersRound } from "lucide-react";
import "./WhyChoose.css";

const items=[
 ["Experienced & Caring Team",PawPrint],
 ["Safe, Hygienic & Clean Environment",ShieldCheck],
 ["Personalized Care for Every Cat",Heart],
 ["Trusted by Cat Parents",Star],
 ["Because Every Cat Matters",UsersRound],
];

export default function WhyChoose(){
 return <section className="why-section">
   <div className="container why-grid">{items.map(([t,I])=><div key={t}><I/><span>{t}</span></div>)}</div>
 </section>
}
