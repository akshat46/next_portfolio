import {
    Button,
    Text,
    useColorMode,
    useColorModeValue,
    ThemeProvider,
    ColorModeProvider,
    localStorageManager,
    GlobalStyle,
} from "@chakra-ui/core";
import customThemeLight from "../theme";
import customThemeDark from "../theme-dark";
import Experiences from "../experiences";

function Example() {
    const { colorMode, toggleColorMode } = useColorMode();
    console.log("****", colorMode);
    const customTheme = useColorModeValue(customThemeLight, customThemeDark);
    return (
        <ThemeProvider theme={customTheme}>
            <ColorModeProvider colorModeManager={localStorageManager} options={customTheme.config}>
                <GlobalStyle />
                <Text color="accent.400">Testing</Text>
                <Experiences />
                <Button colorScheme="teal" onClick={toggleColorMode}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default Example;
