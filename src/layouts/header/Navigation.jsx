import styles from "./Navigation.module.css";
import CustomeLinks from "../../helpers/CustomeLinks";
import Logo from "../../helpers/Logo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
//icons
// import { ImFacebook2 } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io5";

import { IoMenu } from "react-icons/io5";

function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [isGreater, setIsGreater] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  function handleResize() {
    if (window.innerWidth < 800) {
      setIsGreater(true);
    } else {
      setIsGreater(false);
    }
  }

  // function smoothScroll(target) {
  //   const element = document.querySelector(target);
  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isGreater]);
  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={styles.header}
      >
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
                    <CustomeLinks to="/">HOME</CustomeLinks>
                  </li>
                  <li>
                    <CustomeLinks to="/about">ABOUT US</CustomeLinks>
                  </li>

                  <li>
                    <CustomeLinks to="/products">PRODUCTS</CustomeLinks>
                  </li>
                  <li>
                    <CustomeLinks to="/contact">CONTACT</CustomeLinks>
                  </li>
                </ul>
              </div>
              <div className={styles.fbContainer}>
                <IoLogoFacebook className={styles.fbIcon} />
              </div>
            </>
          ) : (
            <div className={styles.iconsContainer}>
              <IoLogoFacebook className={styles.fbIcon} />
              <IoMenu className={styles.menuIcon} />
            </div>
          )}
        </nav>
      </motion.header>
    </>
  );
}

export default Navigation;
