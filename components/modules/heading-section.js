import { ThemeProvider, Heading } from "@chakra-ui/core";
import customTheme from '../../components/theme';
import Fade from 'react-reveal/Fade';

// const heading = {
//     WebkitBackgroundClip: "text",
//     backgroundClip: "text",
// };

const SectionHeading = props => (
    <ThemeProvider theme={customTheme}>
        <Fade bottom duration={1000}><Heading
            color="accent.300"
            textAlign="center" 
            fontSize={["4xl", "6xl"]}
            fontWeight="normal"
        >
                {props.children}
        </Heading></Fade>
    </ThemeProvider>
);

export default SectionHeading;