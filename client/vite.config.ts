import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
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
      "@": "/src", // απευθείας από root /src
    },
  },
});
