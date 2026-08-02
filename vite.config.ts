import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Two worlds ship in one bundle. `@theme` resolves to the barrel that carries
 * both token sets, each scoped to its own `data-theme` value; the attribute on
 * <html> decides which one is live. See DESIGN.md → Theme switching.
 */
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@theme": fileURLToPath(
        new URL("./src/themes/index.css", import.meta.url),
      ),
    },
  },
  server: { port: 5173 },
  build: { outDir: "dist" },
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
});
