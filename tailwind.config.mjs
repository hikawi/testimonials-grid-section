/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-violet": "hsl(263, 55%, 52%)", // Moderate violet
        "primary-light-violet": "#A775F1", // Light violet
        "primary-gray-blue": "hsl(217, 19%, 35%)", // Very dark grayish blue
        "primary-black-blue": "hsl(219, 29%, 14%)", // Very dark blackish blue
        "neutral-gray": "hsl(0, 0%, 81%)", // Light gray
        "neutral-gray-blue": "hsl(210, 46%, 95%)", // Light grayish blue
      },
      fontSize: {
        body: "13px",
      },
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', "sans-serif"],
      },
      backgroundImage: {
        comma: "url('./src/assets/bg-pattern-quotation.svg')",
      },
    },
  },
  plugins: [],
};
