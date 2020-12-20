import { ThemeProvider, Text, Box, Flex, Button } from "@chakra-ui/core";
import ExternalLink from "./modules/external-link";
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
            <ExternalLink
                theme={props.theme}
                url="/Akshat_Sharma_Resume.pdf"
                icon={[<IoDocumentText />]}
                delay="2200"
            />
            <ExternalLink
                theme={props.theme}
                url="https://github.com/akshat46"
                icon={[<IoLogoGithub />]}
                delay="2600"
            />
            <ExternalLink
                theme={props.theme}
                url="https://codepen.io/akshat46"
                icon={[<IoLogoCodepen />]}
                delay="3000"
            />
            <ExternalLink
                theme={props.theme}
                url="https://www.linkedin.com/in/akshat46/"
                icon={[<IoLogoLinkedin />]}
                delay="3400"
            />
        </Box>
    </div>
);

export default Links;
