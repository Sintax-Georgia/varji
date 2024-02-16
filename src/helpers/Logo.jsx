/* eslint-disable react/prop-types */
import logo from "../assets/varji-logo.svg";
import styles from "../layouts/header/Navigation.module.css";
function Logo() {
  return (
    <>
      <img
        className={styles.logo}
        src={logo}
        alt="logo"
        style={{ width: "9rem" }}
      />
    </>
  );
}

export default Logo;
