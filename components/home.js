import { Text, Heading, Box, Link } from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import customThemeLight from "./theme";
import customThemeDark from "./theme-dark";

var text_overlay = {
    mixBlendMode: "color-dodge",
};

var blur = {
    filter: "blur(40px)",
};

const Reset = {
    bg: "none",
    top: "-4px",
    opacity: "1",
};

const Home = (props) => {
    const customTheme = props.theme === "light" ? customThemeLight : customThemeDark;
    return (
        <Box m="0" marginBottom={["16", "32"]} w="100vw" h="100vh">
            <Box
                zIndex="20"
                w={["70%", "400px", "630px", "760px"]}
                p="md"
                m="0 auto"
                filter="blur(10px)"
                pos="relative"
                top="45%"
                transform="translateY(-40%)"
                display="border-box">
                <Fade bottom cascade delay="2200" duration="800">
                    <div>
                        <Text fontSize={["xl"]} textAlign="left" m="0" zIndex="10" opacity="0" color="accent.text">
                            Hello, I am
                        </Text>
                        <Heading
                            as="h1"
                            fontSize={["3em", "4em", "5em"]}
                            lineHeight={["1.1", "1.1", "1.1", "2.5rem"]}
                            fontWeight="normal"
                            mt="6"
                            textAlign="left"
                            filter="invert"
                            opacity="0"
                            color="accent.300">
                            Akshat Sharma.
                        </Heading>
                    </div>
                </Fade>
            </Box>
            <Fade bottom duration="2400" delay="100" opacity="01">
                <span m="0" p="0" opacity="0" pos="relative">
                    <Box
                        pos="absolute"
                        top="10%"
                        left="9%"
                        m="0"
                        w="82%"
                        h="82vh"
                        borderRadius="lg"
                        backgroundImage={customTheme.background}
                        backgroundColor="blue"
                        backgroundPosition="center"
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        opacity="0.8"
                        style={blur}
                        visibility={["hidden", "visible"]}
                    />
                    <Box
                        pos="absolute"
                        top="10%"
                        left="10%"
                        zIndex="2"
                        m="0"
                        w="80%"
                        h="80vh"
                        borderRadius="lg"
                        backgroundImage={customTheme.background}
                        backgroundColor="blue"
                        backgroundPosition="center"
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        boxShadow={props.theme === "light" ? "0px 4px 23px rgba(0, 0, 0, 0.15)" : ""}>
                        <Text pos="absolute" color="accent.400" right="15px" bottom="0" opacity="0.3" fontSize="xs">
                            Photo by{" "}
                            <Link
                                fontWeight="bold"
                                href="https://unsplash.com/@jesuskiteque?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                                Jesus Kiteque
                            </Link>{" "}
                            on{" "}
                            <Link href="https://unsplash.com/photos/TqlOQKxIoms?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                                Unsplash.
                            </Link>
                        </Text>
                    </Box>
                </span>
            </Fade>
        </Box>
    );
};

// gradient color

export default Home;
