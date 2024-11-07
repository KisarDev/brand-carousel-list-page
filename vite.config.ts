import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import zyph from "vite-plugin-zyph";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), zyph()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
