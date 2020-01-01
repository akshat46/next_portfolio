import { ThemeProvider, Text, Heading, Box, Flex } from "@chakra-ui/core";
import customTheme from '../../components/theme';

const SkillsList = props => (
    <ThemeProvider theme={customTheme}>
        <Box m={["1", "2"]}>{props.title}</Box>
    </ThemeProvider>
);

export default SkillsList;