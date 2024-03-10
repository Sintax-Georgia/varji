import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
//components
import Menu from "./Menu";
import CustomeLinks from "../../helpers/CustomeLinks";
import Logo from "../../helpers/Logo";
//styles
import styles from "./Navigation.module.css";
//icons
import { IoLogoFacebook } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

// import { GrLanguage } from "react-icons/gr";

//i18next
import { useTranslation } from "react-i18next";

function Navigation({ setShowMenu, showMenu }) {
  const { t, i18n } = useTranslation();
  const [isGreater, setIsGreater] = useState(window.innerWidth < 900);
  const [language, setLanguage] = useState("ge");
  function handleResize() {
    console.log(innerWidth);
    if (window.innerWidth < 900) {
      setIsGreater(true);
    } else {
      setIsGreater(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          {!isGreater ? (
            <>
              <div>
                <ul className={styles.navLinks}>
                  <li>
                    <CustomeLinks to="/">{t("home")}</CustomeLinks>
                  </li>
                  <li>
                    <CustomeLinks to="/about">{t("about")}</CustomeLinks>
                  </li>

                  <li>
                    <CustomeLinks to="/products">{t("products")}</CustomeLinks>
                  </li>
                  <li>
                    <CustomeLinks to="/contact">{t("contact")}</CustomeLinks>
                  </li>
                </ul>
              </div>
              <div className={styles.iconsContainer}>
                <MdLanguage
                  className={styles.internalizationIcon}
                  onClick={() => {
                    language === "en"
                      ? i18n.changeLanguage("ge")
                      : i18n.changeLanguage("en");
                    setLanguage((prevlanguage) =>
                      prevlanguage === "en" ? "ge" : "en"
                    );
                  }}
                />
                <Link to="https://www.facebook.com/varjiwood" target="_blank">
                  <IoLogoFacebook className={styles.fbIcon} />
                </Link>
              </div>
            </>
          ) : (
            <div className={styles.iconsContainer}>
              <MdLanguage
                className={styles.internalizationIcon}
                onClick={() =>
                  setLanguage((prevlanguage) =>
                    prevlanguage === "en" ? "ge" : "en"
                  )
                }
              />
              <Link
                className={styles.fbLink}
                to="https://www.facebook.com/varjiwood"
                target="_blank"
              >
                <IoLogoFacebook className={styles.fbIcon} />
              </Link>
              <IoMenu
                onClick={() => {
                  setShowMenu((prev) => !prev);
                  console.log(showMenu);
                  if (showMenu) {
                    document.body.style.overflow = "auto";
                  } else {
                    document.body.style.overflow = "hidden";
                  }
                }}
                className={styles.menuIcon}
              />
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navigation;
