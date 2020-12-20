import { Text, Box, Flex, Button } from "@chakra-ui/core";
import customThemeLight from "../theme";
import customThemeDark from "../theme-dark";
import { FaGithub } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Reset = {
    top: "-4px",
    opacity: "1",
};

const ExternalLink = (props) => {
    const customTheme = props.theme === "light" ? customThemeLight : customThemeDark;
    const shadow = props.disabled ? "" : props.shadow == "right" ? customTheme.shadows.right : customTheme.shadows.left;

    return (
        <Fade left cascade delay={props.delay} duration="600">
            <Button
                as="a"
                pos="relative"
                target="_blank"
                variant="outline"
                href={props.url}
                onClick={props.onClick}
                boxShadow={["default", "default", shadow]}
                _hover={Reset}
                _focus={{ border: "none" }}
                top="0"
                size="sm"
                fontSize="2xl"
                border="none"
                borderRadius={["0 15px 15px 0", "0 15px 15px 0", "50%"]}
                w={["30px", "30px", "50px"]}
                h={["30px", "30px", "50px"]}
                p={["0.30em", "0.30em", "0.55em"]}
                boxSizing="border-box"
                color="accent.300"
                mt="6"
                left={["-20px", "-20px", "0"]}
                bg="primary.300"
                opacity="0"
                transition="all 0.3s ease-in-out">
                {props.icon}
            </Button>
        </Fade>
    );
};

export default ExternalLink;
