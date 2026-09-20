import { defineConfig } from "vite";
import { resolve } from "path";

// published as a static build under /demo/34-black-sky/ in the showcase
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/demo/34-black-sky/" : "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tracklist: resolve(__dirname, "tracklist.html"),
        track: resolve(__dirname, "track.html"),
        studio: resolve(__dirname, "studio.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
    copyPublicDir: true,
    chunkSizeWarningLimit: 800,
  },
}));
