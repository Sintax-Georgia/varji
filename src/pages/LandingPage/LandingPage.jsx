//components
import Carousel from "../../layouts/carousel/Carousel";
import About from "./About";
import Partners from "./Partners";
//images
import coverImg from "/cover.webp";
//styles
import styles from "./LandingPage.module.css";
//animation
import { motion } from "framer-motion";


function LandingPage() {
  const variants = {
    initial: { clipPath: "inset(0% 50% 0% 50%)" },
    animate: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1.5, ease: "linear" },
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.LandingPage}>
        <motion.img
          initial="initial"
          animate="animate"
          variants={variants}
          className={styles.coverImg}
          src={coverImg}
          alt="cover image"
        />
      </div>
      <About needsButton={true} />
      <Carousel />
      <Partners />
    </div>
  );
}

export default LandingPage;
