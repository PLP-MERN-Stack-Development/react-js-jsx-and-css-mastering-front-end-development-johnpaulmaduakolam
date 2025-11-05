import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(), // ✅ activate Tailwind here
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ optional but useful
    },
  },
});
