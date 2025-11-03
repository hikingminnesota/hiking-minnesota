// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",                         // custom domain at site root
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  build: {
    outDir: "docs",
    assetsDir: "assets",             // (optional) keep bundles tidy under docs/assets
    emptyOutDir: true,               // ✅ prevents stale hashed files -> 404s
  },
  server: { port: 5173 },
});
