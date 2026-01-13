/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // 🚑 THIS SAVES YOUR EXISTING CSS
  },
  plugins: [],
};
