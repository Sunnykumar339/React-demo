/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ make sure it scans your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
