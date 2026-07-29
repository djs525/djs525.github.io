import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * ARCADE — the committed world, on port 5173.
 *
 * Both designs share every component, every stylesheet and every fact. The
 * only difference between them is which file `@theme` resolves to, so a change
 * to the site lands in both at once and only the tokens diverge.
 */
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@theme": fileURLToPath(
        new URL("./src/themes/arcade.css", import.meta.url),
      ),
    },
  },
  server: { port: 5173 },
  build: { outDir: "dist" },
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
});
