import Logo from "../../helpers/Logo";
import styles from "./Footer.module.css";
import FooterList from "./FooterList";
import NewsLetter from "./NewsLetter";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.listContainer}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className={styles.formContainer}>
          <NewsLetter />
        </div>
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
