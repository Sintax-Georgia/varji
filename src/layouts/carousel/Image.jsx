import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./Image.module.css";
import React from "react";
import "../../fonts/FiraGo-medium.otf";

function Image({ src, alt, id, name }) {
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/products/${id}`);
  }
  return (
    <div className={styles.imagContainer}>
      <motion.img
        className={styles.image}
        onClick={() => handleClick(id)}
        src={src}
        key={id}
        alt={alt}
      />
      <div className={styles.imageName}>
        {name.split(" ").map((word) => (
          <React.Fragment key={word}>
            {word}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Image;
