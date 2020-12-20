import { Box } from "@chakra-ui/core";
import customThemeLight from "./theme";
import customThemeDark from "./theme-dark";
import Fade from "react-reveal/Fade";
import HeaderLink from "./modules/header-link";
import { RiHome5Fill } from "react-icons/ri";
import { IoInformationCircle, IoBriefcase, IoFileTrayStacked } from "react-icons/io5";
import { HamburgerSpin } from "react-animated-burgers";

class Header extends React.Component {
    state = {
        isActive: false,
        menuHeight: "30px",
    };
    constructor(props) {
        super(props);
    }
    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive,
        });
        if (!this.state.isActive) {
            this.state.menuHeight = "200px";
        } else {
            this.state.menuHeight = "30px";
        }
    };
    render() {
        const customTheme = this.props.theme === "light" ? customThemeLight : customThemeDark;
        return (
            <div>
                <Fade top cascade delay="2500" duration="1000">
                    <Box
                        pos="fixed"
                        w="50px"
                        h="260px"
                        m="auto"
                        right="40px"
                        top="40px"
                        boxSizing="border-box"
                        bg="primary.300"
                        borderRadius="50px"
                        boxShadow={customTheme.shadows.right}
                        color="accent.text"
                        pt="2"
                        overflow="hidden"
                        // visibility={["hidden", "hidden", "visibile"]}
                        zIndex={["-1", "-1", "20"]}>
                        <HeaderLink icon={[<RiHome5Fill />]} target="home" offset={-100} delay="2400" />
                        <HeaderLink icon={[<IoInformationCircle />]} target="about" offset={-100} delay="2800" />
                        <HeaderLink icon={[<IoBriefcase />]} target="experiences" offset={-100} delay="3000" />
                        <HeaderLink icon={[<IoFileTrayStacked />]} target="projects" offset={-100} delay="3100" />
                    </Box>
                </Fade>

                <Fade top cascade delay="100" duration="600">
                    <Box
                        pos="fixed"
                        w="auto"
                        h={this.state.menuHeight}
                        m="auto"
                        right="10px"
                        top="0x"
                        boxSizing="border-box"
                        bg="primary.300"
                        borderRadius="0 0 50px 50px"
                        boxShadow={customTheme.shadows.default}
                        color="accent.text"
                        zIndex="50"
                        overflow="hidden"
                        opacity="0"
                        transition="all 1s ease"
                        visibility={["visibile", "visibile", "hidden"]}>
                        <Box m="0" p="0" ml="0.20em">
                            <HamburgerSpin
                                isActive={this.state.isActive}
                                toggleButton={this.toggleButton}
                                buttonWidth={15}
                                buttonColor="transparent"
                                barColor="#3C3D40"
                            />
                        </Box>

                        <Box m="0" p="0">
                            <HeaderLink icon={[<RiHome5Fill />]} target="home" offset={0} />
                            <HeaderLink icon={[<IoInformationCircle />]} target="about" offset={-100} />
                            <HeaderLink icon={[<IoBriefcase />]} target="experiences" offset={-100} />
                            <HeaderLink icon={[<IoFileTrayStacked />]} target="projects" offset={-100} />
                        </Box>
                    </Box>
                </Fade>
            </div>
        );
    }
}

export default Header;
