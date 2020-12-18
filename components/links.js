import { ThemeProvider, Text, Box, Flex, Button } from "@chakra-ui/core";
import customTheme from "../components/theme";
import ExternalLink from "./modules/external-link";
import ExternalLinkStatic from "./modules/external-link-static";
import { IoLogoGithub, IoLogoCodepen, IoLogoLinkedin, IoDocumentText } from "react-icons/io5";

const Links = (props) => (
    <div>
        <Box
            pos="fixed"
            w="50px"
            h="auto"
            m="auto"
            left={["20px", "20px", "20px", "40px"]}
            bottom={["20px", "20px", "20px", "40px"]}
            boxSizing="border-box"
            color="accent.text"
            zIndex="20">
            <ExternalLink url="/Akshat_Sharma_Resume.pdf" icon={[<IoDocumentText />]} delay="2200" />
            <ExternalLink url="https://github.com/akshat46" icon={[<IoLogoGithub />]} delay="2600" />
            <ExternalLink url="https://codepen.io/akshat46" icon={[<IoLogoCodepen />]} delay="3000" />
            <ExternalLink url="https://www.linkedin.com/in/akshat46/" icon={[<IoLogoLinkedin />]} delay="3400" />
        </Box>
    </div>
);

export default Links;
