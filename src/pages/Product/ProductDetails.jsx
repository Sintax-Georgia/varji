import { useParams } from "react-router-dom";
//images ge
import cover from "/product-cover.webp";
import wifeli from "/products-ge/wifeli.webp";
import ruf from "/products-ge/ruf.webp";
import kibe from "/products-ge/kibe.webp";
import parketi from "/products-ge/parketi.webp";
import parketi2 from "/products-ge/parketi2.webp";
import pinikey from "/products-ge/pinikey.webp";
import pellets from "/products-ge/pellets.webp";
import magida from "/products-ge/magidis-zedapiri.webp";
import paneli from "/products-ge/avejis-paneli.webp";
//images en
import wifeliEn from "/products-en/wifeli.webp";
import rufEn from "/products-en/ruf.webp";
import kibeEn from "/products-en/kibe.webp";
import parketiEn from "/products-en/parketi.webp";
import parketi2En from "/products-en/parketi2.webp";
import pinikeyEn from "/products-en/pinikey.webp";
import pelletsEn from "/products-en/pellets.webp";
import magidaEn from "/products-en/magidis-zedapiri.webp";
import paneliEn from "/products-en/avejis-paneli.webp";
//styles
import styles from "./ProductDetails.module.css";
//components
import CustomHeading from "../../helpers/CustomHeading";
import WoodWeWorkWith from "../productsPage/WoodWeWorkWith";
//language
import { useTranslation } from "react-i18next";

const productData = [
  {
    heading: "ფიცარი",
    imgUrlGe: [wifeli],
    imgUrlEn: [wifeliEn],
    id: 1,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
  },
  {
    heading: "საავეჯე პანელი",
    imgUrlGe: [paneli],
    imgUrlEn: [paneliEn],
    id: 2,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/oak.webp", id: 2, name: "მუხა" },
      { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
      { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "იდეალურად მიესადაგება საკუთარი სახლის, კოტეჯის, აგარაკის ინტერიერის კედლებისა და ჭერის მოსაპირკეთებლად, პანელს გააჩნია უნიკალური სტრუქტურა და სილამაზე.  ხის პანელი ბუნებრივი შემადგენლობიდან გამომდინარე არ საჭიროებს ანტისეპტიკური ხსნარით დამუშავებას, მას არ ეკარება ხის მღრღნელები და მავნე მწერები.",
  },
  {
    heading: "საწვავი მასალა",
    imgUrlGe: [pellets, pinikey, ruf],
    imgUrlEn: [pelletsEn, pinikeyEn, rufEn],
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
  {
    heading: "ხის კიბე",
    imgUrlGe: [kibe],
    imgUrlEn: [kibeEn],
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
    imgUrlGe: [parketi],
    imgUrlEn: [parketiEn],
    id: 4,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/oak.webp", id: 2, name: "მუხა" },
      { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
      { src: "/woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "მასიური პარკეტი იდეალურად მიესადაგება საკუთარი სახლის, კოტეჯის, აგარაკის იატაკის მოსაწყობად, პარკეტს გააჩნია უნიკალური სტრუქტურა და სილამაზე.  ლარიქსის მასიური პარკეტის ბუნებრივი შემადგენლობიდან გამომდინარე არ საჭიროებს ანტისეპტიკური ხსნარით დამუშავებას, მას არ ეკარება ხის მღრღნელები და მავნე მწერები.მასიური პარკეტი დამუშავებულია ყველა ნორმის დაცვით, გამომშრალია  თანამედროვე დანადგარებში. პროდუქციის ტენიანობა არ აღემატება 12%. ",
  },
  {
    heading: " ორშრიანი პარკეტი",
    imgUrlGe: [parketi2],
    imgUrlEn: [parketi2En],
    id: 5,
    textures: [
      { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
      { src: "/woods/oak.webp", id: 2, name: "მუხა" },
      { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
      { src: "/woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
      { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
    ],
    text: "მასალა: ქართული კაკალი, მუხა, წაბლი, წიფელა, ევკალიპტი",
  },
  {
    heading: "მაგიდის ზედაპირები",
    imgUrlGe: [magida],
    imgUrlEn: [magidaEn],
    id: 7,
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
  const { t, i18n } = useTranslation("productDetails");
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
              <CustomHeading>
                {t(`productHeadings.heading${product.id}`)}
              </CustomHeading>
              <div
                className={
                  product.id === 6
                    ? styles.fuelBriquette
                    : styles.productImgContainer
                }
              >
                <div className={styles.imagesContainer}>
                  {i18n.language === "ge"
                    ? product.imgUrlGe.map((img) => (
                        <img
                          key={`${img} ${product.id}`}
                          src={img}
                          alt={`product ${product.id}`}
                          className={styles.productImage}
                        />
                      ))
                    : product.imgUrlEn.map((img) => (
                        <img
                          key={`${img} ${product.id}`}
                          src={img}
                          alt={`product ${product.id}`}
                          className={styles.productImage}
                        />
                      ))}
                  <p className={styles.productText}>
                    {t(`productDescription.descr${product.id}`)}
                  </p>
                </div>
              </div>
              <WoodWeWorkWith textures={product.textures} />
            </div>
          ))}
      </>
    </div>
  );
}

export default ProductDetails;
