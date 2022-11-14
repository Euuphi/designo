/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1600px",
			"3xxl": "1920px",
		},
	},
	plugins: [],
};
