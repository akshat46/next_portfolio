import { ThemeProvider, Text, List, ListItem, ListIcon, Box} from "@chakra-ui/core";
import SectionHeading from './modules/heading-section';
import customTheme from '../components/theme';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import Fade from 'react-reveal/Fade';

const Experiences = props => (
    <ThemeProvider theme={customTheme}>
        <SectionHeading>Work Experience</SectionHeading>
        <Fade bottom duration={1500}>
        <Box w={["90%", "500px", "600px", "650px"]}
        minHeight="560px"
        boxSizing="border-box" p="md" m="0 auto" 
        marginTop={["12","24"]}
        marginBottom={["32","64"]} 
        boxShadow="0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)"
        overflow="hidden"
        border="solid 1px rgba(0,0,0,0.01)"
        borderRadius="lg" p="0">
            <Tabs borderColor="primary.300">
                <TabList>
                    <Tab bg="primary.400" color="accent.200" border="0" marginBottom="0" marginBottom="-2px" fontWeight="bold"
                        _hover={{ bg: "primary.300" }}
                        _selected={{ color: "accent.300", bg: "primary.300", borderBottom: "solid 3px" }} _focus={{border: "0px"}}>01</Tab>
                    <Tab bg="primary.400" color="accent.200" border="0" marginBottom="0" marginBottom="-2px" fontWeight="bold"
                        _hover={{ bg: "primary.300"}}
                        _selected={{ color: "accent.300", bg: "primary.300", borderBottom: "solid 3px" }} _focus={{ border: "0px" }}>02</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel bg="primary.300" p={["6","12"]} boxSizing="border-box" >
                        <Text fontSize="xl" m="0" mb="4" color="accent.300" fontFamily="Playfair Display">Research Assistant</Text>
                        <Text fontSize="md" m="0" mb="2" color="accent.300" fontWeight="bold">at San Jose State University</Text>
                        <Text fontSize="md" m="0" mb="2" color="accent.300">Oct2019 - Present</Text>
                            <List m="0" p="0" color="accent.text" lineHeight="2">
                                <ListItem><ListIcon icon="chevron-right" color="accent.300"/>Implemented a Node.js service that gathers live data from IoT devices 
                        using AWS IoT and GCP Pub/Sub, and pushes it to Firebase database.</ListItem>
                                <ListItem><ListIcon icon="chevron-right" color="accent.300"/>Hosted the IoT Node.js service , and a dashboard web app on GCP Compute Engine.</ListItem>
                                <ListItem><ListIcon icon="chevron-right" color="accent.300"/>Currently implementing a map based dashboard using Next.js and React that will display live values from Firebase. 
                        Using socket.io to implement client-server notification system</ListItem>
                            </List>
                    </TabPanel>
                    <TabPanel bg="primary.300" p={["6","12"]} boxSizing="border-box">
                        <Text fontSize="xl" m="0" mb="4" color="accent.300" fontFamily="Playfair Display">Research Assistant</Text>
                        <Text fontSize="md" m="0" mb="2" color="accent.300" fontWeight="bold">at San Jose State University</Text>
                        <Text fontSize="md" m="0" mb="2" color="accent.300">Dec2018 - May2019</Text>
                            <List m="0" p="0" color="accent.text" lineHeight="2">
                                <ListItem><ListIcon icon="chevron-right" color="accent.300"/>Developed a web dashboard with Node.js and Express.js for backend, Firebase as database, jQuery and SASS 
                                        for frontend implementation. Main achievments:
                                    <List color="accent.text" lineHeight="2">
                                        <ListItem><ListIcon icon="chevron-right" color="accent.300"/>Visualized live locations of different entities on a map based on values in Firebase using constant AJAX calls to Node.js REST API, and Google MAPS API.</ListItem>
                                        <ListItem><ListIcon icon="chevron-right" color="accent.300"/>Implemented a Node.js service that generates random coordinates, and other values for certain entities and saves them in Firebase.</ListItem>
                                    </List>
                                </ListItem>
                                <ListItem><ListIcon icon="chevron-right" color="accent.300"/>Enhanced existing Android app UI. Worked with Java and XML.</ListItem>
                            </List>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
        </Fade>
    </ThemeProvider>
);

export default Experiences;