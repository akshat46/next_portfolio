import { ThemeProvider, Text, Box, Flex, Button } from "@chakra-ui/core";
import customTheme from '../theme';
import { FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Reset = {
    bg: "none",
    top: "-4px",
    opacity: "1",
    // color: "#7CA6A2"
}

const ExternalLink = props => (
    <ThemeProvider theme={customTheme}>
        <Fade left cascade delay={props.delay} duration="600">
        <Button as="a" target="_blank" variant="outline" href={props.url}
            size="sm"
            fontSize="2xl"
            border="none"
            w="50px"
            h="50px"
            p="4"
            top="0"
            boxSizing="border-box"
            mb="6"
            bg="primary.300"
            // boxShadow="0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)"
            boxShadow="4px -6px 6px rgba(255, 255, 255, 0.7), -10px 4px 20px rgba(0, 0, 0, 0.15)"
            borderRadius="50%"
            opacity="0"
            transition="all 0.3s ease-in-out"
            _hover={Reset}>
                {props.icon}
        </Button>
        </Fade>
    </ThemeProvider>
); 

export default ExternalLink;