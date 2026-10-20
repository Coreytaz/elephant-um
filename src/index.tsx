import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("Не найден корневой элемент приложения");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
