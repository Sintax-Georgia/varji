import { Outlet } from "react-router-dom";
import Navigation from "./header/Navigation";
import styles from "./RootLayout.module.css";
import Footer from "./footer/Footer";
import ScrollToTop from "../helpers/ScrollToTop";

function RootLayout() {
  return (
    <div className={styles.rootContainer}>
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
