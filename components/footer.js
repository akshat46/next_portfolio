import { Box, Link, ThemeProvider, Text } from "@chakra-ui/core";
import customTheme from "../components/theme";
import ExternalLinkStatic from "./modules/external-link-static";
import { FiGithub, FiGitlab, FiCodepen, FiLinkedin, FiGitBranch, FiPenTool, FiEdit2 } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { GiPaintRoller } from "react-icons/gi";

const Reset = {
    bg: "none",
    top: "-4px",
    opacity: "1",
    // color: "#7CA6A2"
};

function Footer() {
    return (
        <ThemeProvider theme={customTheme}>
            <Box w="100%" h={["200px", "200px", "100px"]} bg="primary.300" pt="4" m="0" textAlign="center">
                <Box
                    m="0 auto"
                    w="100%"
                    maxW="340px"
                    boxSizing="border-box"
                    color="accent.text"
                    display={["block", "block", "none"]}
                    mb="8"
                    zIndex="50"
                >
                    <ExternalLinkStatic url="https://github.com/akshat46" icon={[<FiGithub />]} />
                    <ExternalLinkStatic url="https://gitlab.com/akshat46" icon={[<FiGitlab />]} />
                    <ExternalLinkStatic url="https://codepen.io/akshat46" icon={[<FiCodepen />]} />
                    <ExternalLinkStatic url="https://www.linkedin.com/in/akshat46/" icon={[<FiLinkedin />]} />
                </Box>
                <Text color="accent.text">
                    Built with{" "}
                    <Link
                        as="a"
                        textTransform="none"
                        fontWeight="bold"
                        color="#0070f3"
                        opacity="1"
                        target="_blank"
                        href="https://nextjs.org/"
                        isExternal
                    >
                        <FiEdit2 /> Next.js
                    </Link>{" "}
                    and
                    <Link
                        as="a"
                        textTransform="none"
                        fontWeight="bold"
                        color="teal.400"
                        opacity="1"
                        target="_blank"
                        href="https://chakra-ui.com/"
                        isExternal
                    >
                        <GiPaintRoller /> Chakra UI
                    </Link>
                    .
                </Text>
                <Link
                    as="a"
                    textTransform="none"
                    fontWeight="bold"
                    color="accent.300"
                    opacity="1"
                    target="_blank"
                    href="https://github.com/akshat46/next_portfolio"
                    isExternal
                >
                    <FiGitBranch /> See it on Github.
                </Link>
            </Box>
        </ThemeProvider>
    );
}

export default Footer;

