// const svgToDataUri = require('mini-svg-data-uri');
// const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');
// const {
//   default: flattenColorPalette,
// } = require('tailwindcss/lib/util/flattenColorPalette');
// const { nextui } = require('@nextui-org/react');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx}',
//     './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-sans, "")', ...defaultTheme.fontFamily.sans],
//         mono: ['var(--font-mono, "")', ...defaultTheme.fontFamily.mono],
//       },
//       colors: {
//         divider: {
//           light: colors.slate[200],
//           dark: colors.slate[800],
//         },
//       },
//       animation: {
//         'bounce-x': 'bounce-x 1s infinite',
//       },
//       keyframes: {
//         'bounce-x': {
//           '0%, 100%': {
//             transform: 'translateX(25%)',
//             animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
//           },
//           '50%': {
//             transform: 'translateX(0)',
//             animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
//           },
//         },
//       },
//     },
//   },

//   plugins: [
//     nextui(),
//     function ({ addVariant }) {
//       addVariant('fm', '.fm &');
//     },
//     function ({ matchUtilities, theme }) {
//       matchUtilities(
//         {
//           'bg-grid': (value) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
//       );
//     },
//     require('@headlessui/tailwindcss'),
//     require('tailwindcss-accent')({
//       colors: ['violet', 'blue'],
//       root: 'violet',
//     }),
//     addVariablesForColors,
//     function ({ matchUtilities, theme }) {
//       matchUtilities(
//         {
//           'bg-dot-thick': (value) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
//       );
//     },
//   ],
// };

// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme('colors'));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ':root': newVars,
//   });
// }

const svgToDataUri = require('mini-svg-data-uri');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default;
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans, "")', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono, "")', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        divider: {
          light: colors.slate[200],
          dark: colors.slate[800],
        },
        animation: {
          aurora: 'aurora 60s linear infinite',
        },
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          aurora: {
            from: {
              backgroundPosition: '50% 50%, 50% 50%',
            },
            to: {
              backgroundPosition: '350% 50%, 350% 50%',
            },
          },
        },
      },
    },
  },
  plugins: [
    nextui(),
    addVariablesForColors,
    function ({ addVariant }) {
      addVariant('fm', '.fm &');
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
    require('@headlessui/tailwindcss'),
    require('tailwindcss-accent')({
      colors: ['violet', 'blue'],
      root: 'violet',
    }),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-dot-thick': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
