import { Text, Heading, Box, ThemeProvider } from "@chakra-ui/core";
import Fade from 'react-reveal/Fade';
import Resume from './modules/resume';
import customTheme from '../components/theme';

var text_overlay = {
    mixBlendMode: "color-dodge",
}

var blur = {
    filter: 'blur(40px)',
}

const Reset = {
    bg: "none",
    top: "-4px",
    opacity: "1",
    // color: "#7CA6A2"
}

class Home extends React.Component {
    opacity = "0.7"

    render() {
        return (
            <ThemeProvider theme={customTheme}><Box
                m="0"
                marginBottom={["16", "32"]}
                w="100vw"
                h="100vh">
                <Box zIndex="20" w={["70%", "400px", "630px", "760px"]} p="md" m="0 auto" filter="blur(10px)"
                    pos="relative" top={["50%"]} transform={["translateY(-50%)"]} 
                    display="border-box" borderRadius="10px">
                    <Fade bottom cascade delay="2200" duration="800"><div>
                        <Text fontSize={["xl"]} textAlign="left" m="0" zIndex="10" opacity="0" color="accent.text">Hello, I am</Text>
                        <Heading as="h1" fontSize={["3em", "5em", "6em"]} fontWeight="normal" mt="6" textAlign="left" opacity="0" color="accent.text">Akshat Sharma.</Heading>
                    </div></Fade>
                </Box>
                <Fade bottom duration="2400" delay="100" opacity="01">
                    <span m="0" p="0" opacity="0" pos="relative">
                    <Box
                        pos="absolute"
                        top="10%" left="9%"
                        m="0"
                        w="82%"
                        h="82%"
                        borderRadius="lg"
                        backgroundImage={customTheme.background}
                        backgroundColor="blue"
                        backgroundPosition="center"
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        opacity="0.8"
                        style={blur}
                        visibility={["hidden", "visible"]} />
                    <Box
                        pos="absolute"
                        top="10%" left="10%"
                        zIndex="2"
                        m="0"
                        w="80%"
                        h="80%"
                        borderRadius="lg"
                        backgroundImage={customTheme.background}
                        backgroundColor="blue"
                        backgroundPosition="center"
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        boxShadow="0px 4px 23px rgba(0, 0, 0, 0.15)" />
                    </span></Fade>
            </Box></ThemeProvider>);
    }
}

// gradient color

export default Home;