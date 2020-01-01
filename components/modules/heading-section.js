import { ThemeProvider, Text, Heading, Box } from "@chakra-ui/core";
import customTheme from '../../components/theme';

const heading = {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
};

const SectionHeading = props => (
    <ThemeProvider theme={customTheme}>
        <Heading 
            backgroundImage="url('/bg.jpg')"
            backgroundPosition="center"
            backgroundSize="cover"
            overflow="hidden"
            marginTop={["12", "-135px"]}
            backgroundRepeat="no-repeat"
            fontSize={["4xl", "6xl"]} 
            textAlign="center" 
            color="transparent"
            fontWeight="normal"
            // textShadow="0px -6px 10px rgba(255, 255, 255, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.15)"
            style={heading}>
                {props.children}
        </Heading>
    </ThemeProvider>
);

export default SectionHeading;