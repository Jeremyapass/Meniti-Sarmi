/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefinsans: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'drone1' : "url('/images/Drone1.png')",
        // "frame42" : "url('/images/Frame 42.png')",
        // "framePanjang" : "url('/images/framePanjang.png')",
      },
    },
  },
  plugins: [],
};
