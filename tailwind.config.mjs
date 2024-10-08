/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: { 'max': "458px" },
        sh: [{ 'raw': "(max-height: 740px)" }],
      },
    },
  },
  plugins: [require("daisyui")],
};
