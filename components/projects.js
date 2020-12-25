import {
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    ModalBody,
    ModalHeader,
    Box,
    Button,
    Text,
} from "@chakra-ui/core";
import customThemeLight from "./theme";
import customThemeDark from "./theme-dark";
import SectionHeading from "./modules/heading-section";
import ItemProject from "./modules/item-project";
import ItemProjectExtra from "./modules/item-extra-project";
import { IoFileTrayFull, IoFolderOpen } from "react-icons/io5";

var projects = [
    {
        title: "Boreas",
        technologies: "Native Android, Java, Room Database, Gradle, XML",
        image: "/boreas.png",
        portrait: true,
        private: false,
        github: "https://github.com/akshat46/boreas",
        other: "https://drive.google.com/file/d/1aw7bde9RUFunkEi6PhOpkJVmyOFW7VZ9/view?usp=sharing",
        description:
            "An encrypted offline chatting application. Highlights of my tasks include implementing padded RSA based encryption, event based architecture to facilitate emitter-listener relation between controllers and views, searching for nearby usersto be messaged using Google's Nearby Connection API, and UI enhancements.",
    },
    {
        title: "FlyingFox",
        technologies: "CSS, Firefox",
        image: "/flyingfox.gif",
        private: false,
        github: "https://github.com/akshat46/flyingfox",
        description: "A Firefox redesign and a passion project.",
    },
    {
        title: "IoT Dashboard",
        technologies: "Node.js, Express.js, jQuery, Google Maps API, Firebase, AWS, GCP",
        image: "/private.svg",
        private: true,
        description:
            "Implemented a JavaScript dashboard that shows live locations and sensor values of different devices. Implemented a custom event system that updates the locations' and sensor values' UI whenever new ones are recieved from AJAX call.",
    },
    {
        title: "UniRide",
        technologies: "Native Android, Java, Gradle, XML",
        image: "/uniride-android.png",
        portrait: true,
        private: false,
        github: "https://github.com/195-uniride/UniRideAndroid",
        description:
            "An android application that facilitates carpooling for university students developed with native android framework.",
    },
];

const extra_projects = [
    {
        title: "Perpetual Zen",
        technologies: "Ubuntu18.04, AwesomeWM, Lua",
        github: "https://github.com/akshat46/perpetual-zen",
        description: "A workspace theme for Awesome Window Manager with various toggleable components.",
    },
    {
        title: "Ryu Dashboard",
        technologies: "Node.js, Next.js, React, SCSS, Ryu Python API",
        private: false,
        github: "https://github.com/195-uniride/UniRideAndroid",
        description:
            "Implemented a React dashboard that displays details(flows, ports) of a network's switches based on the network's Ryu controller. Used Next.js for backend, and Mininet to simulate network topology.",
    },
    {
        title: "SmokeJumper",
        technologies: "Django, Firebase, SCSS, JQuery, MapBox",
        private: false,
        github: "https://gitlab.com/SmokeJump/smokejumper-dashboard",
        other: "https://drive.google.com/file/d/1IWjwX-Fjc8EEqWDZGnRFlVThCjYmAZjp/view?usp=sharing",
        description:
            "A map based dashboard for firefighters that used MapBox to aid firefighters in field. It performed various operations on maps suchs as custom pins, distance calculator, etc.",
    },
];

const Reset = {
    transform: "translateY(-6px)",
    opacity: "1",
};

const Projects = (props) => {
    const customTheme = props.theme === "light" ? customThemeLight : customThemeDark;
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box w={["90%", "80%"]} h="auto" position="relative" margin=" 0 auto" marginBottom={["12", "24"]}>
            <SectionHeading>Projects</SectionHeading>
            <Flex
                w="100%"
                direction="column"
                marginBottom={["6", "12"]}
                alignContent="space-around"
                marginTop={["2", "4"]}
                textAlign={["center", "left"]}
                flexWrap="wrap">
                {projects.map((value, index) => {
                    return <ItemProject project={value} shadow={customTheme.shadows.default} theme={props.theme} />;
                })}
            </Flex>
            <Button
                variant="outline"
                onClick={onOpen}
                display="block"
                position="relative"
                m="0 auto"
                h="50px"
                size="sm"
                fontWeight="normal"
                fontFamily="Karla, sans-serif"
                cursor="pointer"
                border="none"
                boxSizing="border-box"
                bg="primary.300"
                boxShadow={customTheme.shadows.center}
                borderRadius="lg"
                color="accent.300"
                transform="translateY(0px)"
                transition="transform 0.3s ease-in-out"
                _focus={{ border: "none" }}
                _hover={Reset}>
                <IoFileTrayFull style={{ marginBottom: "-3px" }} /> More Projects
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent boxShadow="0" maxW={["100%", "80%", "60%"]} bg="primary.300">
                    <ModalHeader w={["100%", "90%", "800px"]} m="0 auto">
                        <Text fontSize="xl" fontWeight="bold" fontFamily="Karla" a color="accent.300">
                            <IoFileTrayFull style={{ marginBottom: "-3px" }} /> Additional Projects
                        </Text>
                    </ModalHeader>
                    <ModalBody mb="0">
                        {extra_projects.map((value, index) => {
                            return <ItemProjectExtra project={value} />;
                        })}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Projects;
