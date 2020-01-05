import { ThemeProvider, Box, Button } from "@chakra-ui/core";
import customTheme from '../components/theme';
import Fade from 'react-reveal/Fade';
import HeaderLink from './modules/header-link';
import { FiHome, FiInfo, FiBriefcase, FiActivity } from 'react-icons/fi';
import { HamburgerSpin } from 'react-animated-burgers'

class Header extends React.Component{
    state = {
        isActive: false,
        menuHeight: "50px",
        
    }
    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive
        })
        if (!this.state.isActive) {
            this.state.menuHeight = "325px"
        }
        else {
            this.state.menuHeight = "50px"
        }
    }
    render(){
        return (
        <ThemeProvider theme={customTheme}>
                <Fade top cascade delay="2500" duration="1000">
                <Box
                pos="fixed"
                w="50px"
                h="300px"
                m="auto"
                right="40px"
                top="40px"
                boxSizing="border-box"
                bg="primary.300"
                borderRadius="50px"
                boxShadow="-4px -6px 6px rgba(255, 255, 255, 0.6), 10px 4px 20px rgba(0, 0, 0, 0.15)"
                color="accent.text"
                pt="2"
                overflow="hidden"
                // visibility={["hidden", "hidden", "visibile"]}
                zIndex={["-1", "-1", "-1", "20"]}
            >
                <HeaderLink icon={[<FiHome />]} target="home" offset={-100} delay="2400"/>
                <HeaderLink icon={[<FiInfo />]} target="about" offset={-100} delay="2800"/>
                <HeaderLink icon={[<FiBriefcase />]} target="experiences" offset={-100} delay="3000"/>
                <HeaderLink icon={[<FiActivity />]} target="projects" offset={-100} delay="3100"/>
            </Box>
            </Fade>

            <Fade top cascade delay="100" duration="600">
            <Box
                pos="fixed"
                w="50px"
                h={this.state.menuHeight}
                m="auto"
                right="20px"
                top="20px"
                boxSizing="border-box"
                bg="primary.300"
                borderRadius="50px"
                boxShadow="-4px -6px 6px rgba(255, 255, 255, 0.7), 10px 4px 20px rgba(0, 0, 0, 0.15)"
                color="accent.text"
                zIndex="50"
                pt="2"
                overflow="hidden"
                opacity="0"
                transition="all 1s ease"
                visibility={["visibile", "visibile", "visibile", "hidden"]}
            >
                <Box m="0" p="0" ml="1">
                    <HamburgerSpin isActive={this.state.isActive} 
                    toggleButton={this.toggleButton}
                    buttonWidth={25}
                    buttonColor="transparent" barColor="#3C3D40" />
                </Box>

                <Box m="0" p="0">
                    <HeaderLink icon={[<FiHome />]} target="home" offset={0} />
                    <HeaderLink icon={[<FiInfo />]} target="about" offset={-100} />
                    <HeaderLink icon={[<FiBriefcase />]} target="experiences" offset={-100} />
                    <HeaderLink icon={[<FiActivity />]} target="projects" offset={-100} />
                </Box>
                
            </Box>
            </Fade>
        </ThemeProvider>
        );
    }
}

export default Header;