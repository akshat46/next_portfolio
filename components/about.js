import { Text, Heading, Box, } from "@chakra-ui/core";

const About = props => (
    <Box
        m="0"
        marginBottom={["32", "64"]}
        w="100vw"
        h="100vh"
        backgroundImage="url('/bg.jpg')"
        backgroundPosition="center"
        backgroundSize="cover"
        overflow="hidden"
        backgroundRepeat="no-repeat">
        <Box w={["80%", "400px", "630px", "760px"]} p="md" m="0 auto" filter="blur(10px)"
            pos="relative" top={["50%"]} transform={["translateY(-50%)"]} color="white"
             display="border-box" borderRadius="10px">
            <Text fontSize={["xl"]} textAlign="left" m="0" zIndex="10">Hello, I am</Text>
            <Heading as="h1" fontSize={["3em", "5em", "6em"]} fontWeight="normal" m="0" textAlign="left" zIndex="10">Akshat Sharma.</Heading>
            {/* <Text fontSize={["xl"]} maxW={["100%", "100%", "50%", "50%"]} textAlign={["left"]} m="0" zIndex="10">
                I make software.
            </Text> */}
        </Box>
        <Box w="100%" h="55vh" pos="absolute" bottom="0" background='linear-gradient(180deg, rgba(1,34,43,0) 0%, rgba(1,34,43,1) 100%)'/> 
    </Box>
);

// gradient color

export default About;