import { theme } from "@chakra-ui/core";

const customTheme = {
    ...theme,
    fonts: {
        heading: 'Playfair Display',
        body: 'Karla',
    },
    colors: {
        ...theme.colors,
        accent: {
            200: "#8CFDD5",
            300: "#1BFAAD",
            400: "#04DC91",
            "text": "#141834"
        },
        primary: {
            300: "#141834",
            400: "#141834"
        }
    },
    shadows: {
        left: "4px -6px 6px rgba(#1c234a, 0.6), -10px 4px 20px rgba(0, 0, 0, 0.15)",
        right: "-4px -6px 6px rgba(#1c234a, 0.6), 10px 4px 20px rgba(0, 0, 0, 0.15)",
        center: "0px -6px 10px rgba(#1c234a, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)"
    }
};

export default customTheme;