import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @를 src 디렉터리에 매핑
    },
  },
  test: {
    globals: true,
    includeSource: ["src/**/*.js", "src/**/*.jsx"],
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
  },
});
