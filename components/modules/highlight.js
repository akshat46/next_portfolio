import { ThemeProvider, Text } from "@chakra-ui/core";
import customTheme from '../theme';

const Highlight = (props) => (
    <ThemeProvider theme={customTheme}>
        <Text as="mark" backgroundColor="tertiary.400" color={props.textColor ? props.textColor : "accent.text"}>{props.children}</Text>
    </ThemeProvider>
)

export default Highlight;