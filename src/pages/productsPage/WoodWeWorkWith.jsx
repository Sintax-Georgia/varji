import CustomHeading from "../../helpers/CustomHeading";
import styles from "./Products.module.css";

const woods = [
  { src: "/woods/beech.webp", id: 1, name: "წიფელი" },
  { src: "/woods/oak.webp", id: 2, name: "მუხა" },
  { src: "/woods/walnut.webp", id: 3, name: "კაკალი" },
  { src: "/woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
  { src: "/woods/pine.webp", id: 5, name: "ფიჭვი" },
  { src: "/woods/chestnut.webp", id: 6, name: "წაბლი" },
];

function WoodWeWorkWith({ textures }) {
  return (
    <div className={styles.textureContainer}>
      <div className={styles.table}>
        <CustomHeading>მასალა, რომელსაც ვიყენებთ</CustomHeading>
        <div className={styles.tableContent}>
          {(textures || woods).map((wood) => (
            <div key={wood.id} className={styles.woodContainer}>
              <h6 className={styles.woodName}>{wood.name}</h6>
              <img src={wood.src} alt="wood texture" title={wood.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WoodWeWorkWith;
