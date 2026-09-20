
import { Heart, PawPrint, ShieldCheck, Star } from "lucide-react";
import "./TrustStrip.css";

export default function TrustStrip(){
 const data=[["Experienced & Caring Team",PawPrint],["Safe, Hygienic & Clean Environment",ShieldCheck],["Personalized Care for Every Cat",Heart],["Trusted by Cat Parents",Star],["Because Every Cat Matters",PawPrint]];
 return <div className="trust-strip"><div className="container trust-inner">{data.map(([t,I])=><div key={t}><I/><span>{t}</span></div>)}</div></div>
}
