/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      display: ["group-hover"],

      backgroundImage: {
        'hero': "url('/src/assets/connect.jpg');",
        'heroTwo':"url(https://monoassets.com/f/118499/1080x1280/f73f641e15/directpay.jpg)",
        'heroThr':"url(https://monoassets.com/f/118499/1080x1280/f5a17c8f24/percept.png)"
      },

      fontFamily: {
        'DM-Sans': ['DM-Sans', 'sans-serif'],
      },
    
      screens: {
        md: { min: "415px", max: "800px" },

        sm: { max: "414px" }
      },
    },
  },
  plugins: [],
}

