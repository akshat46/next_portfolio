import { ThemeProvider, Text, Heading, Box, Scale} from "@chakra-ui/core";
import SectionHeading from '../components/section-heading';
import customTheme from '../components/theme';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

const Experiences = props => (
    <ThemeProvider theme={customTheme}>
        <SectionHeading>Experiences</SectionHeading>
        <Box w={["80%", "500px", "600px", "650px"]}
        minHeight="200px"
        boxSizing="border-box" p="md" m="0 auto" 
        marginTop={["12","24"]}
        marginBottom={["32","64"]}
        overflow="hidden"
        borderRadius="md" p="0">
            <Tabs borderColor="primary.300">
                <TabList>
                    <Tab bg="primary.400" color="secondary.300" border="0" marginBottom="0" marginBottom="-2px"
                        _hover={{ bg: "primary.300" }}
                        _selected={{ color: "accent.300", bg: "primary.300", borderBottom: "solid 3px", borderRadius: "5px 0 0 0" }} _focus={{border: "0px"}}>01</Tab>
                    <Tab bg="primary.400" color="secondary.300" border="0" marginBottom="0" marginBottom="-2px"
                        _hover={{ bg: "primary.300"}}
                        _selected={{ color: "accent.300", bg: "primary.300", borderBottom: "solid 3px", borderRadius: "0 5px 0 0" }} _focus={{ border: "0px" }}>02</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel bg="primary.300" p="12" boxSizing="border-box" >
                        <Text fontSize="xl" m="0" color="accent.300" fontFamily="Playfair Display">Research Assistant</Text>
                        <Text fontSize="md" m="0" color="accent.300" fontWeight="bold">at San Jose State University</Text>
                        <Text fontSize="md" m="0" color="accent.400">Nov2019 - Present</Text>
                        <Text marginTop="2" color="accent.text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc non tortor nec ipsum ornare ultricies nec id purus. Praesent elementum ipsum ac condimentum auctor. 
                        Duis vestibulum nulla ac placerat bibendum. Mauris cursus ante libero, eu euismod ipsum tristique ut. 
                        Nunc gravida vitae ante et malesuada. Praesent elementum ipsum ac condimentum auctor. 
                        Duis vestibulum nulla ac placerat bibendum. Mauris cursus ante libero, eu euismod ipsum tristique ut. 
                        Nunc gravida vitae ante et malesuada.</Text>
                    </TabPanel>
                    <TabPanel bg="primary.300" p="12" boxSizing="border-box">
                        <Text fontSize="xl" m="0" color="accent.300" fontFamily="Playfair Display">Research Assistant</Text>
                        <Text fontSize="md" m="0" color="accent.300" fontWeight="bold">at San Jose State University</Text>
                        <Text fontSize="md" m="0" color="accent.400">Dec2018 - May2019</Text>
                        <Text marginTop="2" color="accent.text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc non tortor nec ipsum ornare ultricies nec id purus. Praesent elementum ipsum ac condimentum auctor.
                        Duis vestibulum nulla ac placerat bibendum. Mauris cursus ante libero, eu euismod ipsum tristique ut.
                        Nunc gravida vitae ante et malesuada. Praesent elementum ipsum ac condimentum auctor.
                        Duis vestibulum nulla ac placerat bibendum. Mauris cursus ante libero, eu euismod ipsum tristique ut.
                        Nunc gravida vitae ante et malesuada.</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </ThemeProvider>
);

export default Experiences;