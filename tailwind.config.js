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
					grey: "#fdf3f0",
				},
				grey: {
					dark: "#333136",
					light: "#f1f3f5",
				},
			},
			backgroundImage: {
				hero: "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
				cta: "url('/assets/shared/desktop/bg-pattern-call-to-action.svg')",
				"about-mobile":
					"url('/assets/about/mobile/bg-pattern-hero-about-mobile.svg')",
				"about-desktop":
					"url('/assets/about/desktop/bg-pattern-hero-about-desktop.svg')",
				"circles-two":
					"url('/assets/shared/desktop/bg-pattern-two-circles.svg')",
				"circles-three":
					"url('/assets/shared/desktop/bg-pattern-three-circles.svg')",
			},
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1600px",
			xxxl: "1920px",

			"sm-max": { max: "480px" },
			"md-max": { max: "768px" },
			"lg-max": { max: "1024px" },
			"xl-max": { max: "1280px" },
			"xxl-max": { max: "1600px" },
			"xxxl-max": { max: "1920px" },

			"sm-only": { min: "480px", max: "767px" },
			"md-only": { min: "768px", max: "1023px" },
			"lg-only": { min: "1024px", max: "1279px" },
			"xl-only": { min: "1280px", max: "1599px" },
			"xxl-only": { min: "1600px", max: "1919px" },
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
