import Images from "./Images";
import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { imgs } from "./Images";
import Dots from "./Dots";

const DRAG_BUFFER = 50;
const DELAY = 500000;

function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgIndex((prev) => {
        if (prev + 1 <= (imgs.length - 1) / 2) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, DELAY);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dragX = useMotionValue(0);

  function handleMouseDown() {
    setIsGrabbing(true);
  }
  function handleMouseUp() {
    setIsGrabbing(false);
  }

  function handleDragEnd() {
    const x = dragX.get();
    console.log(x);
    if (x <= -DRAG_BUFFER && imgIndex < (imgs.length - 1) / 2) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  }

  return (
    <div className={styles.carousel}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={{
          type: "just",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        onDragEnd={handleDragEnd}
        className={
          isGrabbing
            ? `${styles.imgContainer} ${styles.active}`
            : `${styles.imgContainer}`
        }
      >
        <Images />
      </motion.div>
      <div className={styles.absolute}>
        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      </div>
    </div>
  );
}

export default Carousel;
