import { ThemeProvider, Text, Box, Flex, Button, Tooltip, Icon} from "@chakra-ui/core";
import customTheme from '../../components/theme';
import Fade from 'react-reveal/Fade';
import { FiGithub, FiLock } from "react-icons/fi";

const Reset = {
    bg: "none",
    top: "-4px",
    // color: "#7CA6A2"
}

const ItemProject = props => (
    <ThemeProvider theme={customTheme}>
        <Flex 
        w={["95%","420","700","900px"]}
        h="auto"
        bg="primary.300"
        m={["4", "8"]}
        mb={["8","16"]}
        p = {["4","0"]}
        color="accent.text"
        flexDirection={["column","column","row"]}
        boxSizing="border-box"
        lineHeight="2"
        borderRadius="lg"
        >
            <Box
            boxSizing="border-box"
            w={["100%", "100%", "50%"]}
            h="300px"
            backgroundImage={props.project.image}
            backgroundColor="blue"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            borderRadius="lg"
            overflow="hidden"
            boxShadow={["0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)", "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)","0px 0px 0px rgb(0,0,0,0)"]}
            m="0"/>
            {/* </Fade> */}
            <Box
            boxSizing="border-box"
            w={["100%", "100%", "50%"]}
            m="0"
            >
                <Box m="0" color="accent.text" textAlign="left"
                    boxShadow={["0","0","0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)"]}
                    borderRadius="lg"
                    bg={["none","primary.300"]}
                    ml={["0","0","-15%"]}
                    mt={["2", "8", "15%"]}
                    p={["2","4", "8"]}>
                    <Fade bottom cascade><div>
                        <Text fontSize="xl" m="0" mb="2" color="accent.300" fontFamily="Playfair Display" opacity="0">{props.project.title}</Text>
                        <Text opacity="0">{props.project.description}</Text>
                        <Text opacity="0" color="accent.300">{props.project.technologies}</Text>
                        {!props.project.private ? (
                            <Button as="a" target="_blank" variant="outline" href={props.project.github}
                                pos="relative"
                                float="right"
                                size="sm"
                                fontSize="xl"
                                border="none"
                                w="50px"
                                h="50px"
                                top="0"
                                boxSizing="border-box"
                                opacity="0"
                                cursor="pointer"
                                color={["accent.300","accent.300","primary.300","primary.300"]}
                                bg={["primary.300", "primary.300", "accent.300", "accent.300"]}
                                borderRadius="50%"
                                boxShadow={["0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)", "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)", "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.4)", "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.4)"]}
                                transition="all 0.3s ease-in-out"
                                _hover={Reset}>
                                    < FiGithub />
                            </Button>
                        ) : (
                                <Button as="a" target="_blank" variant="outline" href={props.project.github}
                                    pos="relative"
                                    float="right"
                                    size="sm"
                                    fontSize="xl"
                                    border="none"
                                    w="50px"
                                    h="50px"
                                    top="0"
                                    boxSizing="border-box"
                                    color={["grey","grey","primary.300","primary.300"]}
                                    bg={["primary.300", "primary.300", "grey", "grey"]}
                                    borderRadius="50%"
                                    opacity="0"
                                    boxShadow={["0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)","0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)", "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.4)", "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.4)"]}
                                    transition="all 0.3s ease-in-out" _hover={Reset}>
                                    <Tooltip hasArrow label="Private Repository" placement="bottom" bg="accent.300"><Icon name="lock" /></Tooltip>
                                </Button>
                        )
                        }
                    </div></Fade>
                </Box>
            </Box>
        </Flex>
    </ThemeProvider>
)

export default ItemProject;