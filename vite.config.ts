import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "src/shared/assets/**/*.svg",
      svgrOptions: {
        titleProp: true,
        ref: true,
      },
    }),
  ],
  server: { host: true, port: 5173 },
});
