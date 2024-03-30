module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
            "3xl": "1921px",
            // => @media (min-width: 1921px) { ... }
        },
        extend: {
            fontFamily: {
                rubik: ["rubik", "sans-serif"],
                oswald: ["Oswald", "sans-serif"],
            },
            boxShadow: {
                DEFAULT: "4px 4px 4px 4px rgba(0, 0, 0, 0.03)",
            },
            colors: {
                "base-color": "#fdfdfd",
                "dark-green":"#005963",
                green: "#00acb1",
                "light-blue": "#ebf4fb",
                blue: {
                    100: "#123153",
                    200: "#E6F1FD"
                },
                gray: {
                    100: "#808080",
                    200: "#c3d2e2"
                }
            },
            width: {
                "base-button-width": "131px",
            },
            fontSize: {
                xs: ["12px", {lineHeight: "16px"}],
                "xs.5": ["13px", {lineHeight: "18px"}],
                sm: ["14px", {lineHeight: "20px"}],
                "sm.5": ["15px", {lineHeight: "22px"}],
                base: ["16px", {lineHeight: "24px"}],
                lg: ["18px", {lineHeight: "28px"}],
                xl: ["20px", {lineHeight: "28px"}],
                "2xl": ["24px", {lineHeight: "32px"}],
                "3xl": ["30px", {lineHeight: "36px"}],
                "4xl": ["36px", {lineHeight: "40px"}],
                "5xl": ["48px", {lineHeight: "1"}],
                "6xl": ["60px", {lineHeight: "1"}],
                "7xl": ["72px", {lineHeight: "1"}],
                "8xl": ["96px", {lineHeight: "1"}],
                "9xl": ["128px", {lineHeight: "1"}],
            },
            spacing: {
                px: "1px",
                0: "0",
                0.5: "2px",
                0.75: "3px",
                1: "4px",
                1.5: "6px",
                2: "8px",
                2.5: "10px",
                3: "12px",
                3.25: "13px",
                3.5: "14px",
                4: "16px",
                4.5: "18px",
                5: "20px",
                6: "24px",
                7: "28px",
                8: "32px",
                9: "36px",
                10: "40px",
                11: "44px",
                12: "48px",
                14: "56px",
                16: "64px",
                20: "80px",
                24: "96px",
                28: "112px",
                32: "128px",
                36: "144px",
                40: "160px",
                44: "176px",
                48: "192px",
                52: "208px",
                56: "224px",
                60: "240px",
                64: "256px",
                72: "288px",
                80: "320px",
                96: "384px",
                98: "400px",
            },
        },
        keyframes: {
            spin: {
                "0%": {
                    transform: "rotate(0deg)",
                },
                "50%": {
                    transform: "rotate(360deg)",
                },
                "100%": {
                    transform: "rotate(0deg)",
                },
            },
            ping: {
                "75%": {
                    transform: "scale(2)",
                    opacity: 0,
                },
                "100%": {
                    transform: "scale(2)",
                    opacity: 0,
                },
            },
            fadeOut: {
                "0%": {opacity: 0},
                "100%": {opacity: 1},
            },
            waves: {
                "0%": {
                    transform: "scale(1)",
                    top: "28%",
                    left: "20%",
                    width: "50%",
                    height: "50%",
                    opacity: 0.2,
                },
                "100%": {
                    transform: "scale(3)",
                    top: "28%",
                    left: "20%",
                    width: "50%",
                    height: "50%",
                    opacity: 0,
                },
            },
        },
        animation: {
            "spin-slow": "spin 3s ease-in-out infinite",
            radar: "waves 4s infinite ease",
            fade: "fadeOut 0.5s ease-in-out",
            ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        },
    },
    plugins: [require("tailwindcss-animation-delay")],
};
