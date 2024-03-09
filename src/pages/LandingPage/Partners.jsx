import israel from "../../../public/countries/israel.webp";
import germany from "../../../public/countries/germany.webp";
import serbia from "../../../public/countries/serbia.webp";
import austria from "../../../public/countries/austria.webp";
import styles from "./LandingPage.module.css";
import CustomHeading from "../../helpers/CustomHeading";

const partners = [
  { src: israel, id: 1 },
  { src: germany, id: 2 },
  { src: austria, id: 3 },
  { src: serbia, id: 4 },
];

function Partners() {
  return (
    <>
      <CustomHeading>Export Countries</CustomHeading>
      <div className={styles.partnersContainer}>
        {partners.map((partner) => (
          <img
            src={partner.src}
            alt={`partner ${partner.id}`}
            key={partner.id}
          />
        ))}
      </div>
    </>
  );
}

export default Partners;
