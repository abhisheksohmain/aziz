
import BreedCard from "../BreedCard/BreedCard";
import "./BreedGrid.css";

const breeds=[
 ["Persian","/images/breed-1.jpg","#e72b73","Known for their luxurious long coat, sweet temperament and calm nature. Persians are true companions and a symbol of elegance.",["Calm","Affectionate","Low Activity"]],
 ["Ragdoll","/images/breed-2.jpg","#7135c8","Gentle, affectionate and people-oriented. Ragdolls are known for their relaxed nature and striking blue eyes.",["Friendly","Docile","Loyal"]],
 ["Mainecoon","/images/breed-3.jpg","#159e99","Large, gentle and intelligent. Maine Coons are playful, affectionate and great with families.",["Playful","Intelligent","Family Friendly"]],
 ["Bengal","/images/breed-4.jpg","#f58a18","Active, energetic and intelligent. Bengals have a wild look and unique spotted coat.",["Playful","Energetic","Smart"]],
 ["Simaese","/images/breed-5.jpg","#23a858","Active, vocal and social. Siamese cats are known for their striking blue eyes and affectionate nature.",["Vocal","Social","Active"]],
 ["Exotic Short Hair","/images/breed-6.jpg","#f0a814","Calm, sweet and easygoing. Exotics are a perfect blend of Persian looks with a short, plush coat.",["Calm","Affectionate","Easygoing"]],
 ["British Shorthair","/images/breed-7.jpg","#7135c8","Strong, calm and friendly. British Shorthairs are known for their round face and dense coat.",["Calm","Friendly","Low Maintenance"]],
 ["Himalayan","/images/breed-8.jpg","#e72b73","A perfect blend of Persian beauty and Siamese colors. Himalayans are calm, loving and devoted.",["Gentle","Affectionate","Quiet"]],
];

export default function BreedGrid(){
 return <div className="breed-grid">{breeds.map((b)=><BreedCard key={b[0]} breed={b[0]} image={b[1]} color={b[2]} text={b[3]} tags={b[4]}/>)}</div>
}
