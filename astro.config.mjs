import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
//import icon from "astro-icon";

// @ts-ignore
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.recursivezero.com",
  prefetch: true,
  integrations: [
    react({
      experimentalReactChildren: true
    }),
    tailwind({
      applyBaseStyles: true,
      nesting: true
    })
    //icon()
  ],
  output: "server",
  adapter: node({ mode: "standalone" })
});
