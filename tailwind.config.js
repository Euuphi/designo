/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				black: "#1d1c1e",
				peach: {
					DEFAULT: "#e7816b",
					light: "#ffad8b",
				},
				grey: {
					dark: "#333136",
					light: "#f1f3f5",
				},
			},
			backgroundImage: {
				hero: "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
				cta: "url('/assets/shared/desktop/bg-pattern-call-to-action.svg')",
			},
		},
		screens: {
			"sm-max": { max: "480px" },
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1600px",
			xxxl: "1920px",
		},
		container: {
			padding: {
				DEFAULT: "0rem",
				sm: "1.5rem",
				md: "2.5rem",
				xl: "8rem",
				xxl: "10rem",
			},
			screens: {
				sm: "100%",
				md: "100%",
				lg: "100%",
				xl: "100%",
				xxl: "100%",
				xxxl: "1920px",
			},
		},
	},
	plugins: [],
};
