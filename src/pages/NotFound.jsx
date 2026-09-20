
import { Link } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
export default function NotFound(){return <><Header/><main><section className="section" style={{textAlign:"center"}}><h1 className="section-title">Page Not Found</h1><p>The page you're looking for doesn't exist.</p><Link className="btn" to="/">Back Home</Link></section></main><Footer/></>}
