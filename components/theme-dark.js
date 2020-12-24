import { extendTheme } from "@chakra-ui/core";

const customTheme = extendTheme({
    background: "url('/bg-dark.jpg')",
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
            200: "#5996BB",
            300: "#59A9BB",
            400: "#59B7BB",
            text: "#7996B9",
        },
        primary: {
            invert: "#F0F0F0",
            200: "#223042",
            300: "#192330",
            400: "#151D28",
        },
        tertiary: {
            400: "#59A9BB",
        },
    },
    shadows: {
        left: "4px -6px 6px #22304266, -10px 4px 20px rgba(0, 0, 0, 0.2)",
        right: "-4px -6px 6px #22304266, 10px 4px 20px rgba(0, 0, 0, 0.2)",
        center: "0px -6px 12px #223042CC, 0px 4px 15px rgba(0, 0, 0, 0.2)",
        default: "0 4px 24px -12px #151d28",
        invert: "4px -6px 6px rgba(255, 255, 255, 0.2), -10px 4px 20px rgba(0, 0, 0, 1)",
    },
});

export default customTheme;
