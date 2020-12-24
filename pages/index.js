import { ColorModeProvider, localStorageManager } from "@chakra-ui/core";
import LocalApp from "../components/app";
import customThemeLight from "../components/theme";

function Index(props) {
    return (
        <ColorModeProvider colorModeManager={localStorageManager} options={customThemeLight.config}>
            <LocalApp />
        </ColorModeProvider>
    );
}

export default Index;
