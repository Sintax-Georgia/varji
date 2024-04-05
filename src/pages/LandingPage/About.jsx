//images
import aboutUs from "/about-us.webp";
//styles
import styles from "./About.module.css";
//Router
import { NavLink } from "react-router-dom";
//language
import { useTranslation } from "react-i18next";

function About({ needsButton }) {
  const { t } = useTranslation("about");

  return (
    <div className={styles.aboutUsContainer} id="about">
      <div className={styles.aboutUs}>
        <h1 className={styles.aboutUsHeading}>{t("heading")}</h1>
        <p className={styles.aboutUsText}>{t("text")}</p>
        {needsButton && (
          <NavLink to={"/about"}>
            <button className={styles.seeMoreBtn}>{t("button")}</button>
          </NavLink>
        )}
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.aboutUsImg} src={aboutUs} />
      </div>
    </div>
  );
}

export default About;
