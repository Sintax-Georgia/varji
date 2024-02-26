import styles from "../layouts/RootLayout.module.css";

function CustomHeading({ children }) {
  return <h2 className={styles.customHeading}>{children}</h2>;
}

export default CustomHeading;
