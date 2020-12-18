import { extendTheme } from "@chakra-ui/core";

const customTheme = extendTheme({
    background: "url('/bg.jpg')",
    fonts: {
        body: "Karla, sans-serif",
        heading: "Playfair Display",
    },
    styles: {
        global: {
            "html, body, :root": {
                padding: "0",
                margin: "0",
                background: "primary.300",
                fontFamily: "karla, sans-serif",
                overflowX: "hidden",
            },
        },
    },

    colors: {
        accent: {
            200: "#464D75",
            300: "#464D75",
            400: "#071252",
            text: "#1c234a",
        },
        primary: {
            200: "#FFFFFF",
            300: "#F0F0F0",
            400: "#f4f4f4",
        },
        tertiary: {
            400: "#1bfaad",
        },
    },
    shadows: {
        left: "4px -6px 6px rgba(255, 255, 255, 0.6), -10px 4px 20px rgba(0, 0, 0, 0.15)",
        right: "-4px -6px 6px rgba(255, 255, 255, 0.6), 10px 4px 20px rgba(0, 0, 0, 0.15)",
        center: "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)",
        default: "0 4px 18px -9px rgba(0,0,0,0.4)",
    },
});

export default customTheme;
