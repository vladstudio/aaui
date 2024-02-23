/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{css,astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {
         fontFamily: {
            sans: "Public Sans Variable, system-ui, sans-serif",
         },
      },
   },
   plugins: [],
}
