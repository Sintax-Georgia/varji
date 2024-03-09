import CustomHeading from "../../helpers/CustomHeading";
import styles from "./Products.module.css";
//photos
// import beech from "../../assets/beech.webp";
// import oak from "../../assets/oak.webp";
// import walnut from "../../assets/walnut.webp";
// import eucaliptus from "../../assets/eucaliptus.webp";
// import pine from "../../assets/pine.webp";
// import chestnut from "../../assets/chestnut.webp";

const woods = [
  { src: "../woods/beech.webp", id: 1, name: "წიფელი" },
  { src: "../woods/oak.webp", id: 2, name: "მუხა" },
  { src: "../woods/walnut.webp", id: 3, name: "კაკალი" },
  { src: "../woods/eucaliptus.webp", id: 4, name: "ევკალიპტი" },
  { src: "../woods/pine.webp", id: 5, name: "ფიჭვი" },
  { src: "../woods/chestnut.webp", id: 6, name: "წაბლი" },
];

function WoodWeWorkWith({ textures }) {
  console.log(textures);
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
        {/* <tbody>
          <tr className={styles.tableContent}>
            {textures.map((wood) => (
              <td className={styles.woodName} key={wood.name} title={wood.name}>
                {wood.name}{" "}
              </td>
            ))}
          </tr>
        </tbody> */}
      </div>
    </div>
  );
}

export default WoodWeWorkWith;
