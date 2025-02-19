/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		backgroundImage: {
			"hero-pattern": "url('/src/assets/images/hero.png')",
		},
		colors: {
			primary: "#0078B3",
			primaryText: "#003B71",
			secondaryText: "#718096",
			borderPrimary: "#E2E8F0",
			tertiaryText: "#2D3748",
			secondary: "#E9F5FC",
			tertiary: "#EBEBEB",
			white: "#FFFFFF",
			darkGreen: "#25855A",
			lightGreen: "#F0FFF4",
			gray: "#718096",
			gray100: "#EDF2F7",
			gray300: "#E0E0E0",
			gray800: "#1A202C",
			red800: "#B11116",
			"blue-100": "#F1F4FB",
		},
		fontSize: {
			small: "12px",
			nsmall: "13px",
			normal: "14px",
			large: "16px",
			xl: "18px",
			"2xl": "20px",
			"3xl": "24px",
			"4xl": "30px",
		},
		fontWeight: {
			light: "400",
			semibold: "500",
		},
	},
	plugins: [],
};
