import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import dts from "unplugin-dts/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      processor: "vue",
      outDirs: "dist",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib.ts"),
      name: "VueComponents",
      formats: ["es"],
      fileName: "lib",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
