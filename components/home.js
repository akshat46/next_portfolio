import { Text, Heading, Box, } from "@chakra-ui/core";
import Fade from 'react-reveal/Fade';

var text_overlay = {
        mixBlendMode: "color-dodge",
}

var blur = {
    filter: 'blur(40px)',
}

const Home = props => (
    <Box
        m="0"
        marginBottom={["32", "64"]}
        w="100vw"
        h="100vh">
        <Box zIndex="20" w={["80%", "400px", "630px", "760px"]} p="md" m="0 auto" filter="blur(10px)"
            pos="relative" top={["50%"]} transform={["translateY(-50%)"]} color="primary.300"
             display="border-box" borderRadius="10px">
            <Fade bottom cascade duration="1000"><div>
                <Text fontSize={["xl"]} textAlign="left" m="0" zIndex="10" opacity="0">Hello, I am</Text>
                <Heading as="h1" fontSize={["3em", "5em", "6em"]} fontWeight="normal" m="0" textAlign="left" opacity="0" textShadow="0px -2px 6px rgba(255, 255, 255, 0.3), 0px 4px 15px rgba(0, 0, 0, 0.3)">Akshat Sharma.</Heading>
            </div></Fade>
        </Box>

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="url(#img1)" fillOpacity="1" d="M0,288L34.3,272C68.6,256,137,224,206,224C274.3,224,343,256,411,272C480,288,549,288,617,256C685.7,224,754,160,823,144C891.4,128,960,160,1029,176C1097.1,192,1166,192,1234,170.7C1302.9,149,1371,107,1406,85.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg> */}
        <Box
            pos="absolute"
            top="40px"
            zIndex="10"
            m="0"
            w="100%"
            h="100%"
            backgroundImage="url('/bg.jpg')"
            backgroundColor="blue"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            style={blur}
            visibility={["hidden","visible"]}
            opacity="0.8" />
        <Box
            pos="absolute"
            top="0"
            zIndex="18"
            m="0"
            w="100%"
            h="100%"
            backgroundImage="url('/bg.jpg')"
            backgroundColor="blue"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)" />
    </Box>
);

// gradient color

export default Home;