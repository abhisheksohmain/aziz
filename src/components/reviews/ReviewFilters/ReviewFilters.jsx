
import { Facebook, Grid2X2, Share2 } from "lucide-react";
import "./ReviewFilters.css";

export default function ReviewFilters({active,setActive}){
 const filters=[["All Reviews",Grid2X2],["Google",null],["Justdial",null],["Social",Share2]];
 return <div className="review-filters">{filters.map(([label,I])=><button key={label} className={active===label?"active":""} onClick={()=>setActive(label)}>{I?<I/>:label==="Google"?<b className="g">G</b>:<b className="j">Jd</b>}{label}</button>)}</div>
}
