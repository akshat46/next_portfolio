import { ColorModeProvider, localStorageManager } from "@chakra-ui/core";
import App from "../components/app";
import customThemeLight from "../components/theme";

function Index(props) {
    // const { colorMode, toggleColorMode } = useColorMode();
    // const customTheme = useColorModeValue(customThemeLight, customThemeLight);
    // const temp = useColorModeValue("red.400", "green.400");
    return (
        <ColorModeProvider colorModeManager={localStorageManager} options={customThemeLight.config}>
            <App />
        </ColorModeProvider>
    );
}

export default Index;
