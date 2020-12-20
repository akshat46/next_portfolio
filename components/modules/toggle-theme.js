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
import { IoMoon } from "react-icons/io5";

function Example() {
    const { colorMode, toggleColorMode } = useColorMode();
    const customTheme = useColorModeValue(customThemeLight, customThemeDark);
    const Reset = {
        top: "-4px",
        opacity: "1",
    };
    return (
        <ThemeProvider theme={customTheme}>
            <ColorModeProvider colorModeManager={localStorageManager} options={customTheme.config}>
                <GlobalStyle />
                <Experiences />
                <Button
                    _hover={Reset}
                    top="0"
                    left={["-20px", "-20px", "0"]}
                    borderRadius={["0 15px 15px 0", "0 15px 15px 0", "50%"]}
                    w={["30px", "30px", "50px"]}
                    h={["30px", "30px", "50px"]}
                    p={["0.30em", "0.30em", "0.55em"]}
                    size="sm"
                    fontSize="2xl"
                    border="none"
                    boxSizing="border-box"
                    color="accent.300"
                    mt="6"
                    bg="primary.300"
                    opacity="0"
                    transition="all 0.3s ease-in-out"
                    onClick={toggleColorMode}>
                    <IoMoon />
                </Button>
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default Example;
