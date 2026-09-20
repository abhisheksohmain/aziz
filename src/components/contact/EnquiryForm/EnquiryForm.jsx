
import { useState } from "react";
import { CheckSquare, Mail, MapPin, MessageCircle, PawPrint, Send, UserRound } from "lucide-react";
import "./EnquiryForm.css";

const services=["Cat Boarding / Hostel","Cat Adoption","Cat Grooming","Veterinary Services","Cat Care","Others","Cat Transport / Delivery"];

export default function EnquiryForm(){
 const [sent,setSent]=useState(false);
 const [selected,setSelected]=useState([]);
 const toggle=(s)=>setSelected(a=>a.includes(s)?a.filter(x=>x!==s):[...a,s]);
 const submit=(e)=>{e.preventDefault();setSent(true)};
 return <form className="enquiry" onSubmit={submit}>
   <div className="enquiry-head"><PawPrint/><div><h2>Enquiry Form</h2><p>Fill in your details and let us know how we can help you.</p></div></div>
   <label><UserRound/>Name <b>*</b><input required placeholder="Your Full Name"/></label>
   <label><MessageCircle/>WhatsApp No. <b>*</b><input required placeholder="Your WhatsApp Number"/></label>
   <label><Mail/>Email <b>*</b><input type="email" required placeholder="Your Email Address"/></label>
   <label><MapPin/>City & Location <b>*</b><input required placeholder="Your City & Location"/></label>
   <div className="service-check"><div className="check-title"><PawPrint/> Interested in Service</div><div className="checks">{services.map(s=><button type="button" key={s} className={selected.includes(s)?"checked":""} onClick={()=>toggle(s)}><span>{selected.includes(s)?"✓":""}</span>{s}</button>)}</div></div>
   <label><Mail/>Tell us in detail about your requirement. <b>*</b><textarea required placeholder="Write your message here..."/></label>
   <button className="btn submit" type="submit"><Send size={17}/> {sent?"Enquiry Sent ✓":"Submit Enquiry"}</button>
   {sent && <p className="success">Thank you! Your enquiry has been captured. We will contact you soon.</p>}
 </form>
}
