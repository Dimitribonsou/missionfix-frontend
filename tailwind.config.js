/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(30, 58, 138)",      // #1E3A8A
        secondary: "rgb(245, 158, 11)",   // #F59E0B
        background: "#F3F4F6",            // gris clair (bg)
        text: "#111827",                  // gris foncé (text)
        success: "#10B981",               // vert
        danger: "#EF4444",                // rouge
      },
      fontFamily: {
        primary: ['"Open Sans"', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: "16px",
      },
      borderRadius: {
        base: "5px",
      },
      boxShadow: {
        base: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        'gradient-primary': "linear-gradient(to right, rgb(30, 58, 138), rgb(245, 158, 11))",
      }
    },
  },
  plugins: [],
}
