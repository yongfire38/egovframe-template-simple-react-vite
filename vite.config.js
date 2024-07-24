import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/egovframe-template-simple-react-vite",
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  test: {
    include: ["src/**/*.test.js", "src/**/*.test.jsx"],
  },
  build: {
    chunkSizeWarningLimit: 100000000,
  },
});
