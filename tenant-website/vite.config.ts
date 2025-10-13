/// <reference types="node" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "tailwindcss";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [
    react({
      include: "**/*.jsx",
    }),
  ],
  build: {
    outDir: "dist", // αυτό είναι default, αλλά καλό να το βάλεις ρητά
  },
  define: {
    "import.meta.env": {}, // Prevents ESLint issues
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"), // ✅ works locally & on Vercel
    },
  },
});
