// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,  // disables Tailwind’s CSS reset (keeps your old styles intact)
  },
  plugins: [],
};
