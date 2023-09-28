/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.vue",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}", // Flowbite Component Content Files
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}", // Flowbite Component Content Files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
