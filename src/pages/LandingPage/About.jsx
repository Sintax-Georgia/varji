import { Link } from "react-router-dom";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutUs}>
        <h1 className={styles.aboutUsHeading}>ABOUT US</h1>
        <p className={styles.aboutUsText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          quis at quasi, sequi modi deleniti, fuga tempore ea
        </p>
        <Link to="/about">
          <button className={styles.button}>See more</button>
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.aboutUsImg} src="../../src/assets/wood1.jpg" />
      </div>
    </div>
  );
}

export default About;
