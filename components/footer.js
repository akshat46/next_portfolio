import { Box, Link, ThemeProvider, Text } from "@chakra-ui/core";
import customTheme from "../components/theme";
import ExternalLinkStatic from "./modules/external-link-static";
import { FiGithub, FiGitlab, FiCodepen, FiLinkedin, FiGitBranch, FiPenTool, FiEdit2 } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { GiPaintRoller } from "react-icons/gi";

function Footer() {
    return (
        <div>
            <Box w="100%" h="90px" bg="primary.300" pt="4" m="0" textAlign="center">
                <Text color="accent.text" fontSize="xs">
                    Built and designed by Akshat Sharma.
                </Text>
                <Text color="accent.text" fontSize="xs" cursor="pointer">
                    Attributes
                </Text>
            </Box>
        </div>
    );
}

export default Footer;
