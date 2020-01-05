import { ThemeProvider, Text, Box, Flex, Button } from "@chakra-ui/core";
import customTheme from '../theme';

const Reset = {
    bg: "none",
    top: "-4px",
    opacity: "1",
}

const ExternalLink = props => (
    <ThemeProvider theme={customTheme}>
        <Button as="a" target="_blank" variant="outline" href={props.url}
            size="sm"
            fontSize="2xl"
            border="none"
            w="50px"
            h="50px"
            top="0"
            boxSizing="border-box"
            // pb="4px"
            ml={["4","4","0"]}
            mr={["4","4","0"]}
            mb="6"
            bg="primary.300"
            boxShadow="0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)"
            borderRadius="50%"
            opacity="1"
            color="accent.300"
            transition="all 0.3s ease-in-out"
            _hover={Reset}>
                {props.icon}
        </Button>
    </ThemeProvider>
); 

export default ExternalLink;