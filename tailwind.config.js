/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins'], 
      },
      container: {
        margin:'0 auto',
        center: true, 
        padding: '1rem', 
        screens: {
          sm: '100%', 
          md: '768px', 
          lg: '1024px', 
          xl: '1280px', 
        },
      },
    },
  },
  plugins: [],
}
