import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({ cache: false, include: [".src/**/*.ts, ./src/**/*.tsx"] }),
  ],
  server: {
    host: "localhost",
    port: 3000,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/index"),
      "@static": path.resolve(__dirname, "./src/static/index"),
      "@containers": path.resolve(__dirname, "./src/containers/index"),
      "@context": path.resolve(__dirname, "./src/context/index"),
      "@config": path.resolve(__dirname, "./src/config/index"),
      "@enums": path.resolve(__dirname, "./src/enums/index"),
      "@graphql": path.resolve(__dirname, "./src/graphql"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces/index"),
      "@routes": path.resolve(__dirname, "./src/routes/index"),
      "@hooks": path.resolve(__dirname, "./src/hooks/index"),
      "@styles": path.resolve(__dirname, "./src/styles/index"),
      "@utils": path.resolve(__dirname, "./src/utils/index"),
      "@validators": path.resolve(__dirname, "./src/validators/index"),
      "@views": path.resolve(__dirname, "./src/views/index"),
    },
  },
});
