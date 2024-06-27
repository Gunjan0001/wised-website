/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        md: '18px',
        lg: '20px',
        "12": '24px',
        "2xl": '72px',
      },

      colors: {
        primary: "#4D8AFF",
        secondary: "#FF0000",
        teritary: "#303135",
        black: "#BEC1C3",
        light: {
          100: "#FCFCFC",
          200: "#F7F7F7",
          300: "#F8F8F8",
          400: "#EEEFEF",
        },
      },

      screens: {
        sm: '640px', // Small screens (min-width: 640px)
        md: '768px', // Medium screens (min-width: 768px)
        lg: '1024px', // Large screens (min-width: 1024px)
        xl: '1280px', // Extra large screens (min-width: 1280px)
        '2xl': '1536px', // 2XL screens (min-width: 1536px)
      },


      // fontSize: {
      //   base: {
      //     sm: '17px', // min-width: 640px
      //     md: '18px', // min-width: 768px
      //     lg: '19px', // min-width: 1024px
      //     xl: '20px', // min-width: 1280px
      //     '2xl': '21px', // min-width: 1536px
      //   },
      //   lg: {
      //     sm: '21px',
      //     md: '22px',
      //     lg: '23px',
      //     xl: '24px',
      //     '2xl': '25px',
      //   },
      //   xl: {
      //     sm: '25px',
      //     md: '26px',
      //     lg: '27px',
      //     xl: '28px',
      //     '2xl': '29px',
      //   },
      //   "2xl": {
      //     sm: '80px',
      //     md: '88px',
      //     lg: '96px',
      //     xl: '104px',
      //     '2xl': '112px',
      //   },
      // },
    },
  },
};