import {defineConfig} from "astro/config"
import node from "@astrojs/node"
import tailwind from "@astrojs/tailwind"
import alpinejs from "@astrojs/alpinejs"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  // prefetch: true,
  output: "server",
  server: {port: 8002},
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    tailwind(),
    icon({
      include: {
        tabler: ["x", "arrow-right"],
      },
    }),
    alpinejs({
      entrypoint: "/entry/alpinejs",
    }),
  ],
  image: {
    domains: ["placekitten.com"],
  },
})