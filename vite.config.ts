import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages publishes this repository at /elephant-um/.
// Vite serves assets with the correct prefix in both dev and production.
export default defineConfig({
  plugins: [react()],
  base: "/elephant-um/",
});
