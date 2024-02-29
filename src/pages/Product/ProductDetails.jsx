import cover from "../../assets/product-cover.webp";
import { useParams } from "react-router-dom";
import wifeli from "../../assets/wifeli.webp";
import paneli from "../../assets/avejis-paneli.webp";
import paneli2 from "../../assets/avejis-paneli-2.webp";
import kibe from "../../assets/kibe.webp";
import parketi from "../../assets/masiuri-parketi.webp";
import parketi2 from "../../assets/parketi2.webp";
import pinikey from "../../assets/pinikey.webp";
import pellets from "../../assets/pellets.webp";
import magida from "../../assets/magidis-zedapiri.webp";
import styles from "./ProductDetails.module.css";
import CustomHeading from "../../helpers/CustomHeading";
import ruf from "../../assets/ruf.webp";

const productData = [
  {
    heading: "ფიცარი",
    imgUrl: [wifeli],
    id: 1,
    text: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
  },
  {
    heading: "საავეჯე პანელი",
    imgUrl: [paneli],
    id: 2,
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, ფიჭვი, წიფელა",
  },
  {
    heading: "საწვავი მასალა",
    imgUrl: [ruf, pellets, pinikey],
    id: 6,
    text: "ვარჯი აწარმოებს სამი სახის საწვავ მასალას: ",
  },
  {
    heading: "საავეჯე პანელი",
    imgUrl: [paneli2],
    id: 7,
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, ფიჭვი, წიფელა",
  },
  {
    heading: "ხის კიბე",
    imgUrl: [kibe],
    id: 3,
    text: "ვარჯი აწარმოებს უმაღლესი ხარისხის და ნებისმიერი დიზაინის ხის საფეხურებს.",
  },
  {
    heading: "პარკეტი",
    imgUrl: [parketi],
    id: 4,
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, წიფელა, ევკალიპტი",
  },
  {
    heading: "პარკეტი",
    imgUrl: [parketi2],
    id: 5,
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, წიფელა, ევკალიპტი",
  },
  {
    heading: "მაგიდის ზედაპირები",
    imgUrl: [magida],
    id: 8,
    text: "ვარჯი აწარმოებს ნებისმიერი დიზაინის მაგიდის ზედაპირებს, ხის ბარსადგომებსა და სხვა გამორჩეული დიზაინის საავეჯო მასალას.",
  },
];
function ProductDetails() {
  const { id } = useParams();
  return (
    <div className={styles.productDetails}>
      <div className={styles.coverImgContainer}>
        <img className={styles.coverImg} src={cover} alt="cover image" />
      </div>
      <>
        {productData
          .filter((product) => parseInt(id) === product.id)
          .map((product) => (
            <div key={product.id} className={styles.productContainer}>
              <CustomHeading>{product.heading}</CustomHeading>
              <div className={styles.productImgContainer}>
                {product.imgUrl.map((img) => (
                  <img
                    key={`${img} ${product.id}`}
                    src={img}
                    alt={`product ${product.id}`}
                    className={styles.productImage}
                  />
                ))}
              </div>
            </div>
          ))}
      </>
    </div>
  );
}

export default ProductDetails;
