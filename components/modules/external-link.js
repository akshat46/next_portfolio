import { ThemeProvider, Text, Box, Flex, Button } from "@chakra-ui/core";
import customTheme from "../theme";
import { FaGithub } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Reset = {
    top: "-4px",
    opacity: "1",
};

const ExternalLink = (props) => (
    <Fade left cascade delay={props.delay} duration="600">
        <Button
            as="a"
            pos="relative"
            target="_blank"
            variant="outline"
            float="right"
            href={props.url}
            size="sm"
            fontSize="2xl"
            border="none"
            w="50px"
            onClick={props.onClick}
            h="50px"
            p="4"
            top="0"
            boxSizing="border-box"
            color="accent.300"
            mb="6"
            bg="primary.300"
            boxShadow={
                props.disabled ? "" : props.shadow == "right" ? customTheme.shadows.right : customTheme.shadows.left
            }
            borderRadius="50%"
            opacity="0"
            transition="all 0.3s ease-in-out"
            _hover={Reset}>
            {props.icon}
        </Button>
    </Fade>
);

export default ExternalLink;
