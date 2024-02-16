/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "../layouts/header/Navigation.module.css";

function CustomeLinks({ to, children }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomeLinks;
