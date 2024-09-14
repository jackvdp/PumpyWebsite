import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				blob: "blob 7s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "tranlate(0px, 0px) scale(1)",
					},
				},
			},
			backgroundImage: {
				'gradient-text': 'linear-gradient(to right, var(--tw-gradient-stops))',
			},
			transitionProperty: {
				'width': 'width'
			},
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			}
		}
	},
	variants: {
		extend: {
			backgroundImage: ['hover', 'focus'],
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require("tailwindcss-animate"),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.hover-underline': {
					position: 'relative',
					'&::after': {
						content: '""',
						position: 'absolute',
						width: '0',
						height: '2px',
						bottom: '0',
						left: '0',
						backgroundColor: 'currentColor',
						transition: 'width 0.3s ease-in-out'
					},
					'&:hover::after': {
						width: '100%'
					}
				}
			})
		})
	],
};
export default config;
