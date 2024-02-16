import { imgs } from "./Images";
import styles from "./Carousel.module.css";

function Dots({ imgIndex, setImgIndex }) {
  console.log();
  return (
    <div className={styles.dotsContainer}>
      {imgs.slice(0, Math.ceil(imgs.length / 2)).map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setImgIndex(index)}
            className={
              imgIndex === index
                ? `${styles.activeDot} ${styles.dots}`
                : `${styles.dots}`
            }
          />
        );
      })}
    </div>
  );
}

export default Dots;
