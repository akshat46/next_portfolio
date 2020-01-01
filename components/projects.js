import { ThemeProvider, Text, Heading, Box, Flex } from "@chakra-ui/core";
import customTheme from '../components/theme';
import SectionHeading from './modules/heading-section';
import ItemProject from './modules/item-project';


var projects = [
    {
        title: "IoT Dashboard",
        technologies: "Node.js, Express.js, Google Maps API, Firebase, AWS, GCP",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet tincidunt pharetra, lectus velit egestas sem, ac finibus sapien erat vitae justo. Phasellus egestas tincidunt arcu, et tempus ligula venenatis a."
    },
    {
        title: "Ryu Dashboard",
        technologies: "Node.js, Next.js, SCSS, Ryu Python API",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet tincidunt pharetra, lectus velit egestas sem, ac finibus sapien erat vitae justo. Phasellus egestas tincidunt arcu, et tempus ligula venenatis a."
    },
]

const Projects = props => (
    <ThemeProvider theme={customTheme}>
        <SectionHeading>Projects</SectionHeading>
        <Flex
            w={["90%","80%"]}
            h="auto"
            position="relative"
            margin=" 0 auto"
            marginTop={["12", "24"]}
            marginBottom={["32", "64"]}
            direction="column"
            alignContent="space-around"
            marginTop={["2", "4"]}
            textAlign={["center", "left"]}
            flexWrap="wrap">
                {projects.map((value, index) => {
                    return <ItemProject project={value} /> 
                })}
            </Flex>
    </ThemeProvider>
)

export default Projects;