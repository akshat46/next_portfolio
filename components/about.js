import { Text, Box, Flex } from "@chakra-ui/core";
import SectionHeading from "./modules/heading-section";
import Fade from "react-reveal/Fade";
import { IoChevronForward } from "react-icons/io5";

const skills = [
    "Java",
    "JavaScript",
    "JQuery",
    "OpenTracing",
    "Tailwind CSS",
    "React",
    "Node.js",
    "Git",
    "Linux",
];

const About = (props) => (
    <div>
        <SectionHeading>About me</SectionHeading>
        <Box
            w={["90%", "500px", "600px", "650px"]}
            boxSizing="border-box"
            p="md"
            m="0 auto"
            marginBottom={["16", "32"]}>
            <Fade bottom cascade>
                <div>
                    <Text color="accent.text" lineHeight="1.8" opacity="0">
                        I received a bachelor's degree in software engineering from San Jose State
                        University in 2018, and a master's degree in Software Engineering from SJSU
                        in December 2020. I have had significant experience in full stack web and
                        native Android development, and I am also passionate about UI/UX.
                    </Text>
                    <Text color="accent.text" marginTop={["4", "8"]} opacity="0">
                        Few technologies I have been working with recently:
                    </Text>
                </div>
            </Fade>
            <Fade bottom cascade>
                <Flex
                    w="100%"
                    h={["200px", "100px"]}
                    flexDir="column"
                    wrap="wrap"
                    color="accent.300"
                    marginTop={["2", "4"]}
                    textAlign="left"
                    fontFamily="Karla"
                    pos="relative"
                    opacity="0">
                    {skills.map((skill) => (
                        <Box mt={["1", "2"]}>
                            <IoChevronForward style={{ marginBottom: "-3px" }} /> {skill}
                        </Box>
                    ))}
                </Flex>
            </Fade>
        </Box>
    </div>
);

export default About;
