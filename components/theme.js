import { extendTheme, useColorModeValue, useColorMode } from "@chakra-ui/core";

const customThemeLight = {
    background: "url('/bg.jpg')",
    fonts: {
        body: "Karla, sans-serif",
        heading: "Playfair Display",
    },
    colors: {
        accent: {
            200: "#464D75",
            300: "#1c234a",
            400: "#071252",
            text: "#1c234a",
        },
        primary: {
            300: "#F0F0F0",
            400: "#F2F2F2",
        },
        tertiary: {
            400: "#1bfaad",
        },
    },
    shadows: {
        left: "4px -6px 6px rgba(255, 255, 255, 0.6), -10px 4px 20px rgba(0, 0, 0, 0.15)",
        right: "-4px -6px 6px rgba(255, 255, 255, 0.6), 10px 4px 20px rgba(0, 0, 0, 0.15)",
        center: "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)",
    },
};

const customThemeDark = {
    background: "url('/bg.jpg')",
    fonts: {
        body: "Karla, sans-serif",
        heading: "Playfair Display",
    },
    colors: {
        accent: {
            200: "#8CFDD5",
            300: "#1BFAAD",
            400: "#04DC91",
            text: "#141834",
        },
        primary: {
            300: "#141834",
            400: "#141834",
        },
    },
    shadows: {
        left: "4px -6px 6px rgba(#1c234a, 0.6), -10px 4px 20px rgba(0, 0, 0, 0.15)",
        right: "-4px -6px 6px rgba(#1c234a, 0.6), 10px 4px 20px rgba(0, 0, 0, 0.15)",
        center: "0px -6px 10px rgba(#1c234a, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)",
    },
};

// useColorModeValue(customThemeLight, customThemeDark);

const customTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    console.log("******", colorMode);
    return useColorModeValue(customThemeLight, customThemeDark);
};

export default extendTheme(customThemeLight);

