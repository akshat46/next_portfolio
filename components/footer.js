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
        <div>
            <Box w="100%" h={["150px", "150px", "50px"]} bg="primary.300" pt="4" m="0" textAlign="center">
                <Box
                    m="0 auto"
                    w="100%"
                    maxW="340px"
                    boxSizing="border-box"
                    color="accent.text"
                    display={["block", "block", "none"]}
                    mb="8"
                    zIndex="50">
                    <ExternalLinkStatic url="https://github.com/akshat46" icon={[<FiGithub />]} />
                    <ExternalLinkStatic url="https://gitlab.com/akshat46" icon={[<FiGitlab />]} />
                    <ExternalLinkStatic url="https://codepen.io/akshat46" icon={[<FiCodepen />]} />
                    <ExternalLinkStatic url="https://www.linkedin.com/in/akshat46/" icon={[<FiLinkedin />]} />
                </Box>
                <Text color="accent.text" fontSize="xs">
                    Built with{" "}
                    <Link
                        as="a"
                        textTransform="none"
                        fontFamily="Playfair Display"
                        color="#0070f3"
                        opacity="1"
                        target="_blank"
                        href="https://nextjs.org/"
                        isExternal>
                        Next.js
                    </Link>{" "}
                    and{" "}
                    <Link
                        as="a"
                        textTransform="none"
                        fontFamily="Playfair Display"
                        color="teal.400"
                        opacity="1"
                        target="_blank"
                        href="https://chakra-ui.com/"
                        isExternal>
                        Chakra UI
                    </Link>
                    .
                </Text>
                {/* <Link */}
                {/*     as="a" */}
                {/*     textTransform="none" */}
                {/*     fontFamily="Playfair Display" */}
                {/*     color="black" */}
                {/*     opacity="1" */}
                {/*     target="_blank" */}
                {/*     href="https://github.com/akshat46/next_portfolio" */}
                {/*     isExternal> */}
                {/*     <Text fontSize="xs">See it on Github.</Text> */}
                {/* </Link> */}
            </Box>
        </div>
    );
}

export default Footer;
