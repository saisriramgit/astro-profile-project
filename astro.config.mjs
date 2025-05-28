// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "base64-tool": "/modules/base64-tool/dist/index.es.js",
        "json-formatter": "/modules/json-formatter/dist/index.es.js",
      },
    },
  },
});
