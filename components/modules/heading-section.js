import { ThemeProvider, Heading } from "@chakra-ui/core";
import customTheme from '../../components/theme';
import Fade from 'react-reveal/Fade';

// const heading = {
//     WebkitBackgroundClip: "text",
//     backgroundClip: "text",
// };

const SectionHeading = props => (
    <ThemeProvider theme={customTheme}>
        <Heading 
            // backgroundImage="url('/bg.jpg')"
            // backgroundPosition="center"
            // backgroundSize="cover"
            // backgroundRepeat="no-repeat"
            // color="transparent"
            color="accent.300"
            textAlign="center" 
            overflow="hidden"
            fontSize={["4xl", "6xl"]}
            fontWeight="normal"
        >
                <Fade bottom duration={1000}>{props.children}</Fade>
        </Heading>
    </ThemeProvider>
);

export default SectionHeading;