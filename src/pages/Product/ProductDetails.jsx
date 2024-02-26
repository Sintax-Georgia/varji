import cover from "../../assets/product-cover.webp";
import { useParams } from "react-router-dom";
import wifeli from "../../assets/wifeli.webp";
import briketi from "../../assets/briketi.webp";
import paneli from "../../assets/avejis-paneli.webp";
import paneli2 from "../../assets/avejis-paneli-2.webp";
import kibe from "../../assets/kibe.webp";
import parketi from "../../assets/masiuri-parketi.webp";
import parketi2 from "../../assets/parketi2.webp";
import magida from "../../assets/magidis-zedapiri.webp";
const productData = [
  {
    imgUrl: wifeli,
    id: 1,
    text: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
  },
  {
    imgUrl: briketi,
    id: 2,
    text: "ვარჯი აწარმოებს სამი სახის საწვავ მასალას: ",
  },
  {
    imgUrl: paneli,
    id: 3,
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, ფიჭვი, წიფელა",
  },
  {
    imgUrl: paneli2,
    id: 4,
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, ფიჭვი, წიფელა",
  },
  {
    imgUrl: kibe,
    id: 5,
    text: "ვარჯი აწარმოებს უმაღლესი ხარისხის და ნებისმიერი დიზაინის ხის საფეხურებს.",
  },
  {
    imgUrl: parketi,
    id: 6,
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, წიფელა, ევკალიპტი",
  },
  {
    imgUrl: parketi2,
    id: 7,
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, წიფელა, ევკალიპტი",
  },
  {
    imgUrl: magida,
    id: 8,
    text: "ვარჯი აწარმოებს ნებისმიერი დიზაინის მაგიდის ზედაპირებს, ხის ბარსადგომებსა და სხვა გამორჩეული დიზაინის საავეჯო მასალას.",
  },
];
function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <img src={cover} alt="cover image" />
    </div>
  );
}

export default ProductDetails;
