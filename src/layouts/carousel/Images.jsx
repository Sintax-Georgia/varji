import wifeli from "../../assets/wifeli.webp";
import briketi from "../../assets/briketi.webp";
import paneli from "../../assets/avejis-paneli.webp";
import paneli2 from "../../assets/avejis-paneli-2.webp";
import kibe from "../../assets/kibe.webp";
import parketi from "../../assets/masiuri-parketi.webp";
import parketi2 from "../../assets/parketi2.webp";
import styles from "./Carousel.module.css";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const imgs = [
  { src: wifeli, id: 1 },
  { src: paneli, id: 2 },
  { src: kibe, id: 3 },
  { src: parketi, id: 4 },
  { src: parketi2, id: 5 },
  { src: briketi, id: 6 },
  { src: paneli2, id: 7 },
];
function Images() {
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/products/${id}`);
  }
  return (
    <>
      {imgs.map((img) => {
        return (
          <motion.div
            onClick={() => handleClick(img.id)}
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            transition={{
              type: "spring",
              mass: 3,
              stiffness: 400,
              damping: 50,
              duration: 1,
            }}
            key={img.id}
            className={styles.carouselImg}
          />
        );
      })}
    </>
  );
}

export default Images;
