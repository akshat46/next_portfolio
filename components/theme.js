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
            200: "#05C7F2",
            300: "#049DD9",
            400: "#0477BF",
            "text": "#ffffffbe"
        },
        secondary:{
            300: "#F25C05",
        },
        primary: {
            300: "#013440",
            400: "#01222B"
        }
    },
};

export default customTheme;