import { ThemeProvider, Text, Box, Flex, Button } from "@chakra-ui/core";
import customTheme from "../components/theme";
import ExternalLink from "./modules/external-link";
import ExternalLinkStatic from "./modules/external-link-static";
import { FiGithub, FiGitlab, FiCodepen, FiLinkedin, FiFileText } from "react-icons/fi";

const Links = (props) => (
    <div>
        <Box
            pos="fixed"
            w="50px"
            h="auto"
            m="auto"
            left="40px"
            bottom="40px"
            boxSizing="border-box"
            color="accent.text"
            zIndex={["-1", "-1", "50"]}>
            <ExternalLink url="/Akshat_Sharma_Resume.pdf" icon={[<FiFileText />]} delay="2200" />
            <ExternalLink url="https://github.com/akshat46" icon={[<FiGithub />]} delay="3100" />
            <ExternalLink url="https://codepen.io/akshat46" icon={[<FiCodepen />]} delay="4000" />
            <ExternalLink url="https://www.linkedin.com/in/akshat46/" icon={[<FiLinkedin />]} delay="4150" />
        </Box>

        <Box
            pos="relative"
            w="340px"
            h="80px"
            m="auto"
            left="20px"
            bottom="20px"
            boxSizing="border-box"
            color="accent.text"
            visibility={["visibile", "visibile", "hidden"]}
            zIndex="50">
            <ExternalLink url="/Akshat_Sharma_Resume.pdf" icon={[<FiFileText />]} delay="2200" />
            <ExternalLinkStatic url="https://github.com/akshat46" icon={[<FiGithub />]} />
            <ExternalLinkStatic url="https://codepen.io/akshat46" icon={[<FiCodepen />]} />
            <ExternalLinkStatic url="https://www.linkedin.com/in/akshat46/" icon={[<FiLinkedin />]} />
        </Box>
    </div>
);

export default Links;

