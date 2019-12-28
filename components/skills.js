import { ThemeProvider, Text, Heading, Box, Flex } from "@chakra-ui/core";
import SectionHeading from '../components/section-heading';
import customTheme from '../components/theme';

const Skills = props => (
    <ThemeProvider theme={customTheme}>
        <SectionHeading>Technical Skills</SectionHeading>
        <Box w={["80%", "500px", "600px", "850px"]}
            boxSizing="border-box" p="md" m="0 auto"
            marginTop={["12","24"]}
            marginBottom={["12", "24"]}
            opacity="0.8"
            textAlign="center"
            overflow="hidden">
            <Text color="accent.text">Few technologies I have been working with recently.</Text>
        </Box>
    </ThemeProvider>
);

export default Skills;