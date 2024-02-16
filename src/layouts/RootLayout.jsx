import { Outlet } from "react-router-dom";
import Navigation from "./header/Navigation";
import styles from "./RootLayout.module.css";
import Footer from "./footer/Footer";

function RootLayout() {
  return (
    <div className={styles.rootContainer}>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
