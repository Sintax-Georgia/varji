import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navigation from "./header/Navigation";
import styles from "./RootLayout.module.css";
import Footer from "./footer/Footer";
import ScrollToTop from "../helpers/ScrollToTop";
import Menu from "./header/Menu";

function RootLayout() {
  const [showMenu, setShowMenu] = useState(false);
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
