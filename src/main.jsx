import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Reset.module.css";
import "./CssVariables.module.css";
import "./GlobalCss.module.css";
import "./i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
