// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "static",
    manifest: true, // Ensure manifest is set to true
    rollupOptions: {
      input: {
        main: "./src/main.tsx",
      },
      output: {
        entryFileNames: "static/main.js",
        assetFileNames: "static/style.css",
      },
    },
    assetsInlineLimit: 999999999,
  },
});
