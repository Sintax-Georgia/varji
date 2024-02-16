/* eslint-disable no-unreachable */
import { Link, NavLink } from "react-router-dom";
import { footerData } from "../../data";
import styles from "./Footer.module.css";
function FooterList() {
  return (
    <>
      {footerData.map((data) => (
        <div className={styles.container} key={data.id}>
          <h3 className={styles.footerHeading}>{data.heading}</h3>
          <ul className={styles.list}>
            {data.list.map((item) => {
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
                      {item}
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
                      {item}
                    </li>
                  </NavLink>
                );
              }

              return (
                <li className={styles.listItem} key={item}>
                  {item}
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
