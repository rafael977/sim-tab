import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import webExtension from "@samrum/vite-plugin-web-extension"
import getManifest from "./manifest"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [
    svelte(),
    webExtension({
      manifest: getManifest(),
    }),
  ],
})
