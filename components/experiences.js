import { Text, List, ListItem, ListIcon, Box } from "@chakra-ui/core";
import { FiChevronRight } from "react-icons/fi";
import SectionHeading from "./modules/heading-section";
import Highlight from "./modules/highlight";
import customThemeLight from "./theme";
import customThemeDark from "./theme-dark";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import Fade from "react-reveal/Fade";

const Experiences = (props) => {
    const customTheme = props.theme === "light" ? customThemeLight : customThemeDark;
    return (
        <>
            <SectionHeading>Work Experience</SectionHeading>
            <Fade bottom duration={1500}>
                <Box
                    w={["90%", "500px", "600px", "650px"]}
                    minHeight="50px"
                    boxSizing="border-box"
                    p="md"
                    m="0 auto"
                    marginBottom={["16", "32"]}
                    boxShadow={customTheme.shadows.center}
                    overflow="hidden"
                    border="solid 1px rgba(0,0,0,0.01)"
                    borderRadius="lg"
                    p="0">
                    <Tabs borderColor="primary.300">
                        <TabList>
                            <Tab
                                bg="primary.300"
                                color="accent.300"
                                opacity="0.5"
                                border="0"
                                marginBottom="0"
                                marginBottom="-2px"
                                fontWeight="bold"
                                cursor="pointer"
                                _hover={{ bg: "primary.300" }}
                                _selected={{
                                    opacity: "1",
                                    color: "accent.400",
                                }}
                                _focus={{ border: "0px" }}>
                                01
                            </Tab>
                            <Tab
                                bg="primary.300"
                                color="accent.300"
                                opacity="0.5"
                                border="0"
                                cursor="pointer"
                                marginBottom="0"
                                marginBottom="-2px"
                                fontWeight="bold"
                                _hover={{ bg: "primary.300" }}
                                _selected={{ opacity: "1", color: "accent.400" }}
                                _focus={{ border: "0px" }}>
                                02
                            </Tab>
                            <Tab
                                bg="primary.300"
                                color="accent.300"
                                opacity="0.5"
                                border="0"
                                marginBottom="0"
                                marginBottom="-2px"
                                fontWeight="bold"
                                cursor="pointer"
                                _hover={{ bg: "primary.300" }}
                                _selected={{
                                    opacity: "1",
                                    color: "accent.400",
                                }}
                                _focus={{ border: "0px" }}>
                                03
                            </Tab>
                            <Tab
                                bg="primary.300"
                                color="accent.300"
                                opacity="0.5"
                                border="0"
                                marginBottom="0"
                                marginBottom="-2px"
                                fontWeight="bold"
                                cursor="pointer"
                                _hover={{ bg: "primary.300" }}
                                _selected={{
                                    opacity: "1",
                                    color: "accent.400",
                                }}
                                _focus={{ border: "0px" }}>
                                04
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel bg="primary.300" p={["4", "8"]} boxSizing="border-box">
                                <Text
                                    fontSize="xl"
                                    m="0"
                                    mb="2"
                                    color="accent.300"
                                    fontFamily="Playfair Display">
                                    Software Developer
                                </Text>
                                <Text fontSize="sm" m="0" mb="2" color="accent.300">
                                    at Sun-Net, Inc.
                                </Text>
                                <Text fontSize="sm" m="0" mb="4" color="accent.300">
                                    Aug 2021 - Present
                                </Text>
                                <List m="0" p="0" color="accent.text" lineHeight="1.8">
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Bug fixing, and implementing enhancements in legacy
                                            projects developed with stack:{" "}
                                            <Highlight>
                                                Tomcat, Spring, Apache Struts, JSP, JQuery, and
                                                Bootstrap.
                                            </Highlight>
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Integrating <Highlight>JaegerTracing</Highlight> in
                                            existing Java microservices.
                                        </Text>
                                    </ListItem>
                                </List>
                            </TabPanel>
                            <TabPanel bg="primary.300" p={["4", "8"]} boxSizing="border-box">
                                <Text
                                    fontSize="xl"
                                    m="0"
                                    mb="2"
                                    color="accent.300"
                                    fontFamily="Playfair Display">
                                    Contract Web Developer
                                </Text>
                                <Text fontSize="sm" m="0" mb="2" color="accent.300">
                                    at Foldscope Instruments
                                </Text>
                                <Text fontSize="sm" m="0" mb="4" color="accent.300">
                                    May 2021 - Aug 2021
                                </Text>
                                <List m="0" p="0" color="accent.text" lineHeight="1.8">
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Worked closely with a team to convert non-technical
                                            requirements and guidelines into software under short
                                            timelines for a seminar.
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Built a <Highlight>React dashboard</Highlight> that can
                                            be used to program a laser based projection device with{" "}
                                            <Highlight>Blockly</Highlight> and{" "}
                                            <Highlight>P5</Highlight>.
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            <Highlight>
                                                Designed a lower level language
                                            </Highlight>{" "}
                                            for the projector, and implemented a{" "}
                                            <Highlight>JavaScript</Highlight> based engine that
                                            converts <Highlight>HTML Canvas</Highlight> to the
                                            projector language.
                                        </Text>
                                    </ListItem>
                                </List>
                            </TabPanel>
                            <TabPanel bg="primary.300" p={["4", "8"]} boxSizing="border-box">
                                <Text
                                    fontSize="xl"
                                    m="0"
                                    mb="2"
                                    color="accent.300"
                                    fontFamily="Playfair Display">
                                    Full Stack Developer
                                </Text>
                                <Text fontSize="sm" m="0" mb="2" color="accent.300">
                                    at Red Line Safety
                                </Text>
                                <Text fontSize="sm" m="0" mb="4" color="accent.300">
                                    Oct 2019 - May 2020
                                </Text>
                                <List m="0" p="0" color="accent.text" lineHeight="1.8">
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Implemented a{" "}
                                            <Highlight display="inline">
                                                Node.js service
                                            </Highlight>{" "}
                                            that gathers live data from IoT devices using AWS IoT
                                            and GCP Pub/Sub, pushes it to Firebase database, and
                                            makes it available for frontend through{" "}
                                            <Highlight>Express.js REST API</Highlight>.
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Designed and implemented a socket based(
                                            <Highlight>socket.io</Highlight>) architecture to
                                            facilitate constant data streams for instant updates
                                            between frontend and backend.{" "}
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Implemented a map based dashboard using{" "}
                                            <Highlight>Next.js</Highlight> and Ant Design UI library
                                            for <Highlight>React</Highlight> to display realtime
                                            values from Firebase.
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Hosted the IoT Node.js service , and a dashboard web app
                                            on GCP Compute Engine.
                                        </Text>
                                    </ListItem>
                                </List>
                            </TabPanel>
                            <TabPanel bg="primary.300" p={["4", "8"]} boxSizing="border-box">
                                <Text
                                    fontSize="xl"
                                    m="0"
                                    mb="2"
                                    color="accent.300"
                                    fontFamily="Playfair Display">
                                    Research Assistant
                                </Text>
                                <Text fontSize="sm" m="0" mb="2" color="accent.300">
                                    SJSU Research Center
                                </Text>
                                <Text fontSize="sm" m="0" mb="4" color="accent.300">
                                    Nov 2018 - May 2019
                                </Text>
                                <List m="0" p="0" color="accent.text" lineHeight="1.8">
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Developed a web dashboard with{" "}
                                            <Highlight>Node.js and Express.js</Highlight> for
                                            backend, Firebase as database, and{" "}
                                            <Highlight>jQuery, EJS and SASS</Highlight> for frontend
                                            implementation.
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Visualized live locations of different entities on a map
                                            based on values in Firebase using constant{" "}
                                            <Highlight>AJAX</Highlight> calls to Node.js REST API,
                                            and Google MAPS API.
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Implemented a Node.js service that generates random
                                            coordinates, and other values for certain entities and
                                            pushes them to Firebase.
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            <ListIcon as={FiChevronRight} color="accent.300" />
                                            Enhanced existing <Highlight>Android</Highlight> app UI.
                                            Worked with Java and XML.
                                        </Text>
                                    </ListItem>
                                </List>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Fade>
        </>
    );
};

export default Experiences;
