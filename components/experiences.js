import { ThemeProvider, Text, Heading, Box, Scale} from "@chakra-ui/core";
import SectionHeading from './modules/heading-section';
import customTheme from '../components/theme';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import Fade from 'react-reveal/Fade';

const Experiences = props => (
    <ThemeProvider theme={customTheme}>
        <SectionHeading>Work Experience</SectionHeading>
        <Fade bottom duration={1500}>
        <Box w={["90%", "500px", "600px", "650px"]}
        minHeight="500px"
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
                        <Text fontSize="md" m="0" mb="2" color="accent.300">Nov2019 - Present</Text>
                        <Text marginTop="2" color="accent.text" lineHeight="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc non tortor nec ipsum ornare ultricies nec id purus. Praesent elementum ipsum ac condimentum auctor. 
                        Duis vestibulum nulla ac placerat bibendum. Mauris cursus ante libero, eu euismod ipsum tristique ut. 
                        Nunc gravida vitae ante et malesuada. Praesent elementum ipsum ac condimentum auctor. 
                        Duis vestibulum nulla ac placerat bibendum. Mauris cursus ante libero, eu euismod ipsum tristique ut. 
                        Nunc gravida vitae ante et malesuada.</Text>
                    </TabPanel>
                    <TabPanel bg="primary.300" p={["6","12"]} boxSizing="border-box">
                        <Text fontSize="xl" m="0" mb="4" color="accent.300" fontFamily="Playfair Display">Research Assistant</Text>
                        <Text fontSize="md" m="0" mb="2" color="accent.300" fontWeight="bold">at San Jose State University</Text>
                        <Text fontSize="md" m="0" mb="2" color="accent.300">Dec2018 - May2019</Text>
                        <Text marginTop="2" color="accent.text" lineHeight="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc non tortor nec ipsum ornare ultricies nec id purus. Praesent elementntum auctor.
                        Duis vestibulum nulla ac placerat bibendum. Mauris cursus ante libero, eu euismod ipsum tristique ut.
                        Nunc gravida vitae ante et malesuada.</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
        </Fade>
    </ThemeProvider>
);

export default Experiences;