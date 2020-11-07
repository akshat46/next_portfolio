import { Text, Heading, Box, Button, Image } from "@chakra-ui/core";
import Fade from 'react-reveal/Fade';
import Resume from './modules/resume';
import theme from "./theme";

class Home extends React.Component {
    render() {
        return (
            <Box
                m="0"
                marginBottom={["16", "32"]}
                background="black"
                w="100vw"
                h="100vh">
                <Box w={["70%", "400px", "630px", "760px"]} p="md" m="0 auto"
                    pos="relative" top={["50%"]} transform={["translateY(-50%)"]} color="white"
                    display="border-box" borderRadius="10px">
                    <Fade bottom cascade delay="2200" duration="800"><div>
                        <Text fontSize={["xl"]} textAlign="left" m="0" zIndex="10" opacity="0">Hello, I am</Text>
                        <Heading as="h1" fontSize={["3em", "5em", "6em"]} fontWeight="normal" m="0" textAlign="left" opacity="0">Akshat Sharma.</Heading>
                    </div></Fade>
                    <Resume />
                </Box>
            </Box>
        )
    }
}

export default Home;