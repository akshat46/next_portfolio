import { ThemeProvider, Text, Box, Flex, } from "@chakra-ui/core";
import customTheme from '../../components/theme';
import Fade from 'react-reveal/Fade';

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
            backgroundImage="url('/ryudashboard.jpg')"
            backgroundColor="blue"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            borderRadius="lg"
            borderColor="primary.300"
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
                    overflow="hidden"
                    p={["2","4", "8"]}>
                    <Fade bottom cascade><div>
                        <Text fontSize="xl" m="0" mb="2" color="accent.300" fontFamily="Playfair Display" opacity="0">{props.project.title}</Text>
                        <Text opacity="0">{props.project.description}</Text>
                    </div></Fade>
                </Box>
            </Box>
        </Flex>
    </ThemeProvider>
)

export default ItemProject;