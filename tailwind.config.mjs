/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "primary-color": "#EBEBEB",
      "secondary-color": "#3B6EFF",
      "accent-color": "#FDC01A",
      "black-color": "#484848",
      "white-color": "#f5f5f5",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
