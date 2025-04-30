// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         'gryffindor-red': '#740001',
//         'gryffindor-gold': '#D3A625',
//         'parchment': '#f0e6d2',
//         'ink': '#333333',
//         'hogwarts-stone': '#8e8e8e',
//         'spellcast': '#0597d8',
//         'forbidden-forest': '#1a472a',
//       },
//       fontFamily: {
//         'serif': ['Garamond', 'Georgia', 'Times New Roman', 'serif'],
//       },
//       animation: {
//         'fadeIn': 'fadeIn 0.3s ease-in-out',
//         'castSpell': 'castSpell 2s infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         castSpell: {
//           '0%': { transform: 'rotate(-20deg) translateY(0)', textShadow: '0 0 5px rgba(211, 166, 37, 0.5)' },
//           '25%': { transform: 'rotate(20deg) translateY(-5px)', textShadow: '0 0 15px rgba(211, 166, 37, 1)' },
//           '50%': { transform: 'rotate(-10deg) translateY(0)', textShadow: '0 0 20px rgba(211, 166, 37, 0.8), 0 0 30px rgba(116, 0, 1, 0.5)' },
//           '75%': { transform: 'rotate(10deg) translateY(-3px)', textShadow: '0 0 10px rgba(211, 166, 37, 0.7)' },
//           '100%': { transform: 'rotate(-20deg) translateY(0)', textShadow: '0 0 5px rgba(211, 166, 37, 0.5)' },
//         },
//       },
//       textShadow: {
//         'DEFAULT': '2px 2px 4px rgba(0, 0, 0, 0.5)',
//       },
//       borderWidth: {
//         '3': '3px',
//       },
//       typography: (theme) => ({
//         DEFAULT: {
//           css: {
//             h1: {
//               color: theme('colors.gryffindor-red'),
//               fontFamily: theme('fontFamily.serif'),
//             },
//             h2: {
//               color: theme('colors.gryffindor-red'),
//               fontFamily: theme('fontFamily.serif'),
//             },
//             h3: {
//               color: theme('colors.gryffindor-red'),
//               fontFamily: theme('fontFamily.serif'),
//             },
//             em: {
//               color: theme('colors.forbidden-forest'),
//             },
//             strong: {
//               color: theme('colors.gryffindor-red'),
//             },
//             a: {
//               color: '#0066cc',
//             },
//           },
//         },
//       }),
//     },
//   },
//   plugins: [
//     function ({ addUtilities }) {
//       const newUtilities = {
//         '.text-shadow': {
//           textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//         },
//       };
//       addUtilities(newUtilities);
//     },
//     require('@tailwindcss/typography'),
//   ],
// };


/** @type {import('tailwindcss').Config} */
const shadcnConfig = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

module.exports = {
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      ...shadcnConfig.theme.extend,
      colors: {
        "gryffindor-red": "#740001",
        "gryffindor-gold": "#D3A625",
        parchment: "#f0e6d2",
        ink: "#333333",
        "hogwarts-stone": "#8e8e8e",
        spellcast: "#0597d8",
        "forbidden-forest": "#1a472a",
        ...shadcnConfig.theme.extend.colors,
      },
      fontFamily: {
        serif: ["Garamond", "Georgia", "Times New Roman", "serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        castSpell: "castSpell 2s infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        bounce: "bounce 1s infinite",
        shimmer: "shimmer 2s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        castSpell: {
          "0%": { transform: "rotate(-20deg) translateY(0)", filter: "drop-shadow(0 0 5px rgba(211, 166, 37, 0.5))" },
          "25%": { transform: "rotate(20deg) translateY(-5px)", filter: "drop-shadow(0 0 15px rgba(211, 166, 37, 1))" },
          "50%": {
            transform: "rotate(-10deg) translateY(0)",
            filter: "drop-shadow(0 0 20px rgba(211, 166, 37, 0.8)) drop-shadow(0 0 30px rgba(116, 0, 1, 0.5))",
          },
          "75%": {
            transform: "rotate(10deg) translateY(-3px)",
            filter: "drop-shadow(0 0 10px rgba(211, 166, 37, 0.7))",
          },
          "100%": { transform: "rotate(-20deg) translateY(0)", filter: "drop-shadow(0 0 5px rgba(211, 166, 37, 0.5))" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 2px rgba(211, 166, 37, 0.7))" },
          "50%": { filter: "drop-shadow(0 0 10px rgba(211, 166, 37, 1))" },
          "100%": { filter: "drop-shadow(0 0 2px rgba(211, 166, 37, 0.7))" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      textShadow: {
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        3: "3px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gryffindor-red"),
              fontFamily: theme("fontFamily.serif"),
            },
            h2: {
              color: theme("colors.gryffindor-red"),
              fontFamily: theme("fontFamily.serif"),
            },
            h3: {
              color: theme("colors.gryffindor-red"),
              fontFamily: theme("fontFamily.serif"),
            },
            em: {
              color: theme("colors.forbidden-forest"),
            },
            strong: {
              color: theme("colors.gryffindor-red"),
            },
            a: {
              color: "#0066cc",
            },
          },
        },
        dark: {
          css: {
            h1: {
              color: theme("colors.gryffindor-gold"),
            },
            h2: {
              color: theme("colors.gryffindor-gold"),
            },
            h3: {
              color: theme("colors.gryffindor-gold"),
            },
            strong: {
              color: theme("colors.gryffindor-gold"),
            },
          },
        },
      }),
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        magical: "0 0 15px rgba(211, 166, 37, 0.5)",
        spellcast: "0 0 25px rgba(5, 151, 216, 0.6)",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
        },
      }
      addUtilities(newUtilities)
    },
    require("@tailwindcss/typography"),
    ...shadcnConfig.plugins,
  ],
}

