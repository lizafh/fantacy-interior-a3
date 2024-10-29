// module.exports = {
//     //...
//     daisyui: {
//       themes: ["light", "dark", "cupcake"],
//     },
//   }

module.exports = {
    mode: 'jit', // Ensure JIT mode is enabled
    content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}'], // Adjust paths if necessary
    theme: {
      extend: {},
    },
    plugins: [],
  }