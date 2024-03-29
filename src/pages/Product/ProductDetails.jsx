import { useParams } from "react-router-dom";
//images
import cover from "/product-cover.webp";
import wifeli from "/products-ge/wifeli.webp";
// import paneli2 from "../../../products-ge/avejis-paneli-2.webp";
import ruf from "/products-ge/ruf.webp";
import kibe from "/products-ge/kibe.webp";
import parketi from "/products-ge/parketi.webp";
import parketi2 from "/products-ge/parketi2.webp";
import pinikey from "/products-ge/pinikey.webp";
import pellets from "/products-ge/pellets.webp";
import magida from "/products-ge/magidis-zedapiri.webp";
import paneli from "/products-ge/avejis-paneli.webp";
//styles
import styles from "./ProductDetails.module.css";
//components
import CustomHeading from "../../helpers/CustomHeading";
import WoodWeWorkWith from "../productsPage/WoodWeWorkWith";

const productData = [
  {
    heading: "ფიცარი",
    imgUrl: [wifeli],
    id: 1,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      // { src: "../woods/oak.webp", id: 2, name: "მუხა" },
      // { src: "../woods/walnut.webp", id: 3, name: "კაკალი" },
      // { src:"../woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
      { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
  },
  {
    heading: "საავეჯე პანელი",
    imgUrl: [paneli],
    id: 2,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/oak.webp", id: 2, name: "მუხა" },
      { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
      // { src:"./eucaliptus.webp", id: 4, name: "ევკალიპტი" },
      { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "იდეალურად მიესადაგება საკუთარი სახლის, კოტეჯის, აგარაკის ინტერიერის კედლებისა და ჭერის მოსაპირკეთებლად, პანელს გააჩნია უნიკალური სტრუქტურა და სილამაზე.  ხის პანელი ბუნებრივი შემადგენლობიდან გამომდინარე არ საჭიროებს ანტისეპტიკური ხსნარით დამუშავებას, მას არ ეკარება ხის მღრღნელები და მავნე მწერები.",
  },
  {
    heading: "საწვავი მასალა",
    imgUrl: [pellets, pinikey, ruf],
    id: 6,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/oak.webp", id: 2, name: "მუხა" },
      { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
      { src: "/woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
      { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "ვარჯი აწარმოებს სამი სახის საწვავ მასალას: ",
  },
  // {
  //   heading: "საავეჯე პანელი",
  //   imgUrl: [paneli2],
  //   id: 7,
  //   textures: [
  //     { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
  //     { src: "/woods/oak.webp", id: 2, name: "მუხა" },
  //     { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
  //     // { src:"/woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
  //     { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
  //     { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
  //   ],
  //   text: "მასალა: ქართული კაკალი, მუხა, წაბლი, ფიჭვი, წიფელა",
  // },
  {
    heading: "ხის კიბე",
    imgUrl: [kibe],
    id: 3,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/oak.webp", id: 2, name: "მუხა" },
      { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
      { src: "/woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
      { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "ვარჯი აწარმოებს უმაღლესი ხარისხის და ნებისმიერი დიზაინის ხის საფეხურებს.",
  },
  {
    heading: "მასიური პარკეტი",
    imgUrl: [parketi],
    id: 4,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/oak.webp", id: 2, name: "მუხა" },
      { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
      { src: "/woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
      // { src: "/pine.webp", id: 5, name: "ფიჭვი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "მასიური პარკეტი იდეალურად მიესადაგება საკუთარი სახლის, კოტეჯის, აგარაკის იატაკის მოსაწყობად, პარკეტს გააჩნია უნიკალური სტრუქტურა და სილამაზე.  ლარიქსის მასიური პარკეტის ბუნებრივი შემადგენლობიდან გამომდინარე არ საჭიროებს ანტისეპტიკური ხსნარით დამუშავებას, მას არ ეკარება ხის მღრღნელები და მავნე მწერები.მასიური პარკეტი დამუშავებულია ყველა ნორმის დაცვით, გამომშრალია  თანამედროვე დანადგარებში. პროდუქციის ტენიანობა არ აღემატება 12%. ",
  },
  {
    heading: " ორშრიანი პარკეტი",
    imgUrl: [parketi2],
    id: 5,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/oak.webp", id: 2, name: "მუხა" },
      { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
      { src: "/woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
      // { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, წიფელა, ევკალიპტი",
  },
  {
    heading: "მაგიდის ზედაპირები",
    imgUrl: [magida],
    id: 8,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/oak.webp", id: 2, name: "მუხა" },
      { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
      { src: "/woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
      { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
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
                <p>{product.text}</p>
              </div>
              <WoodWeWorkWith textures={product.textures} />
            </div>
          ))}
      </>
    </div>
  );
}

export default ProductDetails;
