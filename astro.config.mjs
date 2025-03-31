import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://recursivezero.com",
  prefetch: true,
  output: "static",
  devToolbar: {
    enabled: false
  },
  experimental: {
    svg: true
  },
  integrations: [
    mdx(),
    react({
      experimentalReactChildren: true
    }),
    tailwind({
      applyBaseStyles: false,
      nesting: true
    })
  ],
  adapter: node({ mode: "standalone" }),
  style: {
    global: true // Ensure global styles are applied
  },
  vite: {
    plugins: [],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});
