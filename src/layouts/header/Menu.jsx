import CustomeLinks from "../../helpers/CustomeLinks";
import styles from "./Navigation.module.css";
//icons
import { IoMdClose } from "react-icons/io";
//framer
import { motion } from "framer-motion";
//languages
import { useTranslation } from "react-i18next";

function Menu({ setShowMenu, showMenu }) {
  const { t } = useTranslation("navigation");
  const menuLinks = [
    { to: "/", lang: "home", id: 1 },
    { to: "/about", lang: "about", id: 2 },
    { to: "/products", lang: "products", id: 3 },
    { to: "/contact", lang: "contact", id: 4 },
  ];
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
        {menuLinks.map((link) => (
          <CustomeLinks
            key={link.id}
            to={link.to}
            onClick={() => {
              setShowMenu(false);
              document.body.style.overflow = "auto";
            }}
          >
            {t(link.lang)}
          </CustomeLinks>
        ))}
      </div>
    </motion.div>
  );
}

export default Menu;
