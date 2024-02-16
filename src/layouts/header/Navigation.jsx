import styles from "./Navigation.module.css";
import CustomeLinks from "../../helpers/CustomeLinks";
import Logo from "../../helpers/Logo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
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
          <div>
            <ul className={styles.navLinks}>
              <CustomeLinks to="/about">ABOUT US</CustomeLinks>
              <CustomeLinks to="/products">PRODUCTS</CustomeLinks>
              <CustomeLinks to="/contact">CONTACT</CustomeLinks>
            </ul>
          </div>
        </nav>
      </motion.header>
    </>
  );
}

export default Navigation;
