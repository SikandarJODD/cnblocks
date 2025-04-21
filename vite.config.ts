import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  optimizeDeps: {
    // entries: ["./src/**/*.{svelte,ts,js}"], // Scan only your source files
    exclude: [
      "swiper",
      "bits-ui",
      "@lucide/svelte",
      "clsx",
      "mode-watcher",
      "tailwind-variants",
      "tailwind-merge",
      "paneforge",
      "shiki",
      "devalue",
      "tabbale",
      "@floating-ui/dom",
      "@internationalized/date",
    ], // Avoid pre-bundling large deps that break HMR
  },
});
