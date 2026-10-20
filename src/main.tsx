import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("Не найден корневой элемент приложения");
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
