import { ThemeProvider, Text, Box, Flex, Button } from "@chakra-ui/core";
import customTheme from '../components/theme';
import ExternalLink from './modules/external-link';
import ExternalLinkStatic from './modules/external-link-static';
import Fade from 'react-reveal/Fade';
import { FaGithub, FaLinkedinIn, FaCodepen, FaGitlab } from 'react-icons/fa';
import { FiGithub, FiGitlab, FiCodepen, FiLinkedin } from "react-icons/fi";

const Links = props => (
    <ThemeProvider theme={customTheme}>
        <Box 
            pos="fixed"
            w="50px"
            h="auto"
            m="auto"
            left="40px"
            bottom="40px"
            boxSizing="border-box"
            color="accent.text"
            zIndex={["-1","-1","50"]}
        >
            <ExternalLink url="https://github.com/akshat46" icon={[<FiGithub />]} delay="600"/>
            <ExternalLink url="https://gitlab.com/akshat46" icon={[<FiGitlab />]} delay="800"/>
            <ExternalLink url="https://codepen.io/akshat46" icon={[<FiCodepen />]} delay="1000"/>
            <ExternalLink url="https://www.linkedin.com/in/akshat46/" icon={[<FiLinkedin />]} delay="1200"/>
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
            zIndex="50"
        >
            <ExternalLinkStatic url="https://github.com/akshat46" icon={[<FiGithub />]} />
            <ExternalLinkStatic url="https://gitlab.com/akshat46" icon={[<FiGitlab />]} />
            <ExternalLinkStatic url="https://codepen.io/akshat46" icon={[<FiCodepen />]} />
            <ExternalLinkStatic url="https://www.linkedin.com/in/akshat46/" icon={[<FiLinkedin />]} />
        </Box>
    </ThemeProvider>
);

export default Links;