
import { Facebook } from "lucide-react";
import "./ReviewGrid.css";

const names = [
  "Ananya",
  "Rohit",
  "Priya",
  "Sneha",
  "Vikram",
  "Meera",
  "Karan",
  "Neha",
  "Tanvi",
  "Arjun",
  "Simran",
  "Rahul",
  "Pooja",
  "Deepak",
  "Lavanya",
  "Kavya",
];

const texts = [
  "My cat had a wonderful stay at AZIZ FELINES CATTERY. The place is clean, safe and well managed. Highly recommended!",
  "Excellent grooming service! My cat came back looking so fresh and cute. Very professional and caring team.",
  "Great experience with their cat boarding service. Regular updates and photos gave me peace of mind.",
  "Very happy with the transport service. My cat reached safely and on time. The staff was very supportive throughout.",
  "The staff is really caring and knowledgeable. My cat feels at home here. Clean facility and good hygiene.",
  "Amazing grooming experience! They handled my cat so gently. I'm really impressed with their professionalism.",
  "Very good service and reasonable pricing. My cat stayed here for 10 days and I got regular updates.",
  "The best decision I made for my cat. The care, food and environment are excellent. Will definitely use again.",
  "Super clean, well organized and friendly staff. My cat loved the place and didn't feel stressed at all.",
  "They provided great care and attention to my senior cat. Very happy with the service and communication.",
  "Booked grooming and cat care service. Everything was smooth, professional and on time. Highly recommend!",
  "My cat was so calm and happy during the stay. The staff is very loving and attentive. Great experience overall.",
  "The transport service is excellent. My cat arrived safely and the updates were very reassuring.",
  "Best cat care facility in town! Clean, safe and very well maintained. My cat loves it here.",
  "Professional, caring and truly dedicated to cats. Their service is top-notch and trustworthy.",
  "We are extremely happy with their services. From boarding to grooming, everything is just perfect!",
];

const platforms = [
  "Google",
  "Justdial",
  "Google",
  "Social",
  "Google",
  "Justdial",
  "Social",
  "Google",
  "Justdial",
  "Social",
  "Google",
  "Justdial",
  "Social",
  "Google",
  "Justdial",
  "Social",
];

export default function ReviewGrid({ active }) {
  const filtered = names
    .map((name, i) => ({
      name,
      text: texts[i],
      platform: platforms[i],

      // GitHub Pages + Vite compatible image path
      image: `${import.meta.env.BASE_URL}images/review-${(i % 8) + 1}.jpg`,
    }))
    .filter(
      (review) =>
        active === "All Reviews" ||
        review.platform === active
    );

  return (
    <div className="review-grid">
      {filtered.map((review, i) => (
        <article
          className="review-card"
          key={review.name + i}
        >
          <div className="review-top">

            <span className="avatar">
              {review.name[0]}
            </span>

            <div>
              <strong>{review.name}</strong>

              <div className="stars">
                ★★★★★
              </div>
            </div>

            <img
              src={review.image}
              alt="Cat"
            />

          </div>

          <p>
            {review.text}
          </p>

          <div className="review-source">
            {review.platform === "Social" ? (
              <Facebook />
            ) : review.platform === "Google" ? (
              <b className="g2">G</b>
            ) : (
              <b className="jd2">Jd</b>
            )}

            {review.platform}

            <span>• Sample</span>
          </div>

        </article>
      ))}
    </div>
  );
}
