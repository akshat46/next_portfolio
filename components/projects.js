import { ThemeProvider, Text, Heading, Box, Flex } from "@chakra-ui/core";
import customTheme from '../components/theme';
import SectionHeading from './modules/heading-section';
import ItemProject from './modules/item-project';


var projects = [
    {
        title: "Ryu Dashboard",
        technologies: "Node.js, Next.js, React, SCSS, Ryu Python API",
        image: "url('/ryudashboard.jpg')",
        private: false,
        github: 'https://github.com/akshat46/ryu-dashboard',
        description: "Due to lack of any user interface for Ryu controller, implemented a React dashboard that displays details(flows, ports) of a network's switches based on the network's Ryu controller. Used Next.js for backend, and Mininet to simulate network topology."
    },
    {
        title: "IoT Dashboard",
        technologies: "Node.js, Express.js, jQuery, Google Maps API, Firebase, AWS, GCP",
        image: "url('/private.svg')",
        private: true,
        description: "Implemented a dashboard with JavaScript that shows live locations, and sensor values of different devices. Implemented a custom event system that updates the locations', and sensor values' UI whenever new ones are recieved from AJAX call."
    },
    {
        title: "UniRide",
        technologies: "Native Android, Java, XML",
        image: "url('/uniride-android.png')",
        private: false,
        github: "https://github.com/195-uniride/UniRideAndroid",
        description: "An android application that facilitates carpooling for university students developed with native android framework."
    },
    {
        title: "Perpetual Zen",
        technologies: "Ubuntu18.04, AwesomeWM, Lua",
        image: "url('/perpetual-zen.png')",
        private: false,
        github: "https://github.com/akshat46/perpetual-zen",
        description: "A workspace theme for Awesome Window Manager with various toggleable components."
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