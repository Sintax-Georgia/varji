/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "../layouts/header/Navigation.module.css";

function CustomeLinks({ to, children, onClick }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styles.active : "")}
      to={to}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

export default CustomeLinks;
