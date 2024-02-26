import Carousel from "../../layouts/carousel/Carousel";
import beech from "../../assets/beech.webp";
import oak from "../../assets/oak.webp";
import walnut from "../../assets/walnut.webp";
import eucaliptus from "../../assets/eucaliptus.webp";
import pine from "../../assets/pine.webp";
import chestnut from "../../assets/chestnut.webp";
import styles from "./Products.module.css";

const textures = [
  { src: beech, id: 1, name: "წიფელი" },
  { src: oak, id: 2, name: "მუხა" },
  { src: walnut, id: 3, name: "კაკალი" },
  { src: eucaliptus, id: 4, name: "ევკალიპტი" },
  { src: pine, id: 5, name: "ფიჭვი" },
  { src: chestnut, id: 6, name: "წაბლი" },
];
function Products() {
  return (
    <>
      <h2>ჩვენი პროდუქცია</h2>
      <div>
        <Carousel />
      </div>
      <h2 className={styles.tableHeading}>ჩვენი მასალა</h2>
      <div className={styles.textureContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {textures.map((wood) => (
                <th key={wood.id}>
                  <img src={wood.src} alt="wood texture" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {textures.map((wood) => (
                <td className={styles.woodName} key={wood.name}>
                  {wood.name}{" "}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
