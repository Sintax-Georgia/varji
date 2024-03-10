import CustomeLinks from "../../helpers/CustomeLinks";
import styles from "./Navigation.module.css";
//icons
import { IoMdClose } from "react-icons/io";
//framer
import { motion } from "framer-motion";

function Menu({ setShowMenu, showMenu }) {
  return (
    <motion.div
      className={styles.menuContainer}
      initial={{ x: "-100%" }}
      animate={{ x: showMenu ? 0 : "-100%" }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
    >
      <div className={styles.menuHeader}>
        <span>MENU</span>
        <IoMdClose
          onClick={() => {
            setShowMenu(false);
            document.body.style.overflow = "auto";
          }}
        />
      </div>
      <div className={styles.menuLinks}>
        <CustomeLinks to="/">HOME</CustomeLinks>
        <CustomeLinks to="/about">ABOUT US</CustomeLinks>
        <CustomeLinks to="/products">PRODUCTS</CustomeLinks>
        <CustomeLinks to="/contact">CONTACT</CustomeLinks>
      </div>
    </motion.div>
  );
}

export default Menu;
