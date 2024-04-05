/* eslint-disable no-unreachable */
import { NavLink } from "react-router-dom";
import { footerData } from "../../data";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
function FooterList() {
  const { t } = useTranslation("footer");
  return (
    <>
      {footerData.map((data) => (
        <div className={styles.container} key={data.id}>
          <h3 className={styles.footerHeading}>
            {t(`headings.heading${data.id}`)}
          </h3>
          <ul className={styles.list}>
            {data.list.map((item, index) => {
              if (item === "Products") {
                return (
                  <NavLink
                    key={item}
                    to="products"
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    <li className={styles.listItem} key={item}>
                      {t(`links.link${index + 1}`)}
                    </li>
                  </NavLink>
                );
              } else if (item === "About us") {
                return (
                  <NavLink
                    key={item}
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    <li className={styles.listItem} key={item}>
                      {t(`links.link${index + 1}`)}
                    </li>
                  </NavLink>
                );
              } else if (item === "Home") {
                return (
                  <NavLink
                    key={item}
                    to="/"
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    <li className={styles.listItem} key={item}>
                      {t(`links.link${index + 1}`)}
                    </li>
                  </NavLink>
                );
              } else if (item === "Contact") {
                return (
                  <NavLink
                    key={item}
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    <li className={styles.listItem} key={item}>
                      {t(`links.link${index + 1}`)}
                    </li>
                  </NavLink>
                );
              }

              return (
                <li className={styles.listItem} key={item}>
                  {t(`list.item${index + 1}`)}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}

export default FooterList;
