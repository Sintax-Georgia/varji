import Logo from "../../helpers/Logo";
import styles from "./Footer.module.css";
import FooterList from "./FooterList";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.listContainer}>
        <NavLink to="/" className={styles.footerLogo}>
          <Logo />
        </NavLink>
        <FooterList />
      </div>
      {/* <div>
        <span>
          &copy; <strong>BrandIt.ge</strong> 2024;
        </span>
      </div> */}
    </footer>
  );
}

export default Footer;
