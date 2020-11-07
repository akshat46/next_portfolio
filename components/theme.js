import { extendTheme } from "@chakra-ui/core"

const customTheme = extendTheme({
    background: "url('/bg.jpg')",
    fonts: {
        body: 'Karla, sans-serif',
        heading: 'Playfair Display',
    },
    colors: {
        accent: {
            200: "#464D75",
            300: "#1c234a",
            400: "#071252",
            "text": "#1c234a"
        },
        primary: {
            300: "#F0F0F0",
            400: "#F2F2F2"
        },
        tertiary: {
            400: "#1bfaad"
        }
    },
    shadows: {
        left: "4px -6px 6px rgba(255, 255, 255, 0.6), -10px 4px 20px rgba(0, 0, 0, 0.15)",
        right: "-4px -6px 6px rgba(255, 255, 255, 0.6), 10px 4px 20px rgba(0, 0, 0, 0.15)",
        center: "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)"
    }
});

export default customTheme;