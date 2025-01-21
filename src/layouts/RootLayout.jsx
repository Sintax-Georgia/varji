import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navigation from "./header/Navigation";
import styles from "./RootLayout.module.css";
import Footer from "./footer/Footer";
import ScrollToTop from "../helpers/ScrollToTop";
import Menu from "./header/Menu";
import { useTranslation } from "react-i18next";

function RootLayout() {
  const [showMenu, setShowMenu] = useState(false);

  const { i18n } = useTranslation("/");

  const hostname = window.location.hostname;
  console.log(hostname);

  if (hostname === "varji.eu" || hostname === "www.varji.eu") {
    i18n.changeLanguage("en");
  } else if (hostname === "varji.ge" || hostname === "www.varji.ge") {
    i18n.changeLanguage("ka");
  }
  return (
    <>
      {showMenu && (
        <>
          <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
          <ScrollToTop />
        </>
      )}
      <div className={styles.rootContainer}>
        <ScrollToTop />
        <Navigation setShowMenu={setShowMenu} showMenu={showMenu} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
