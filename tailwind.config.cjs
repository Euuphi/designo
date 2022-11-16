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
            backgroundImage: {
                hero: "url('src/assets/home/desktop/bg-pattern-hero-home.svg')",
                cta: "url('/src/assets/shared/desktop/bg-pattern-call-to-action.svg')",
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
        container: {
            padding: {
                DEFAULT: "1.5rem",
                md: "2.5rem",
                xl: "8rem",
                "2xl": "10rem",
            },
            screens: {
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
                "3xxl": "1920px",
            },
        },
    },
    plugins: [],
};
