 
import {
  ArrowRight,
  Heart,
  PawPrint,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./BreedCard.css";

export default function BreedCard({
  breed,
  image,
  color,
  text,
  tags,
}) {
  return (
    <article className="breed-card">

      {/* Breed Image */}
      <img
        className="breed-img"
        src={image}
        alt={breed}
      />

      {/* Breed Information */}
      <div className="breed-body">

        <h3 style={{ "--breed": color }}>
          <PawPrint size={20} />
          {breed}
        </h3>

        <p>
          {text}
        </p>

        {/* Breed Tags */}
        <div className="breed-tags">
          {tags.map((tag) => (
            <span key={tag}>
              <Heart size={14} />
              {tag}
            </span>
          ))}
        </div>

        {/* Details Button */}
        <Link
          className="btn breed-btn"
          to="/contact"
        >
          View Details
          <ArrowRight size={16} />
        </Link>

      </div>
    </article>
  );
}
 
 