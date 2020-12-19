import { ThemeProvider, Text, Box, Flex, Button } from "@chakra-ui/core";
import customTheme from "../theme";
import { FaGithub } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Reset = {
    top: "-4px",
    opacity: "1",
};

const ExternalLink = (props) => {
    const shadow = props.disabled ? "" : props.shadow == "right" ? customTheme.shadows.right : customTheme.shadows.left;

    return (
        <Fade left cascade delay={props.delay} duration="600">
            <Button
                as="a"
                pos="relative"
                top="0"
                target="_blank"
                variant="outline"
                href={props.url}
                size="sm"
                fontSize="2xl"
                border="none"
                borderRadius={["0 15px 15px 0", "0 15px 15px 0", "50%"]}
                w={["30px", "30px", "50px"]}
                h={["30px", "30px", "50px"]}
                onClick={props.onClick}
                p={["0.30em", "0.30em", "0.55em"]}
                boxSizing="border-box"
                boxShadow={["default", "default", shadow]}
                color="accent.300"
                mt="6"
                left={["-20px", "-20px", "0"]}
                bg="primary.300"
                opacity="0"
                transition="all 0.3s ease-in-out"
                _hover={Reset}>
                {props.icon}
            </Button>
        </Fade>
    );
};

export default ExternalLink;
