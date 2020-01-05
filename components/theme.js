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
            200: "#A66D82",
            300: "#A6375F",
            400: "#732743",
            "text": "#3C3D40"
        },
        secondary:{
            300: "#F25C05",
        },
        primary: {
            300: "#F2F2F2",
            400: "#F2F2F2"
        }
    },
};

export default customTheme;