/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "../layouts/header/Navigation.module.css";

function CustomeLinks({ to, children }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styles.active : "")}
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default CustomeLinks;
