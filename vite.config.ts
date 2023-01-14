import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {
  createStyleImportPlugin,
  VxeTableResolve,
} from "vite-plugin-style-import";
import * as path from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [VxeTableResolve()],
    }),
  ],
});
