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
            200: "#466386",
            300: "#3F5978",
            400: "#384F6B",
            text: "#223042",
        },
        primary: {
            invert: "#192330",
            200: "#f4f4f4",
            300: "#F0F0F0",
            400: "#FFFFFF",
        },
        tertiary: {
            400: "#5996BB",
        },
    },
    shadows: {
        left: "4px -6px 6px rgba(255, 255, 255, 0.4), -10px 4px 20px rgba(0, 0, 0, 0.1)",
        right: "-4px -6px 6px rgba(255, 255, 255, 0.4), 10px 4px 20px rgba(0, 0, 0, 0.1)",
        center: "0px -6px 12px rgba(255, 255, 255, 0.8), 0px 4px 20px rgba(0, 0, 0, 0.1)",
        default: "0 8px 24px -12px rgba(0,0,0,0.2)",
        invert: "4px -6px 6px #22304233, -10px 4px 20px #151d287F",
    },
});

export default customTheme;
