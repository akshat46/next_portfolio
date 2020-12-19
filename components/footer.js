import { Box, Link, ThemeProvider, Text } from "@chakra-ui/core";
import customTheme from "../components/theme";

function Footer() {
    return (
        <div>
            <Box w="100%" h="90px" bg="primary.300" pt="4" m="0" textAlign="center">
                <Text color="accent.text" fontSize="xs">
                    Designed and built by Akshat Sharma.
                </Text>
            </Box>
        </div>
    );
}

export default Footer;
