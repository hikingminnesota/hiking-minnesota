// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

export default defineConfig({
  base: '/hiking-minnesota/',
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
server: {
  port: 5173,
},
});