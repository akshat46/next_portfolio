import { Button, useColorMode, useColorModeValue, ThemeProvider, GlobalStyle } from "@chakra-ui/core";
import Home from "./home";
import Experiences from "./experiences";
import About from "./about";
import Projects from "./projects";
import Links from "./links";
import Header from "./header";
import Footer from "./footer";
import customThemeLight from "./theme";
import customThemeDark from "./theme-dark";
import * as Scroll from "react-scroll";
import { IoMoon } from "react-icons/io5";

let Element = Scroll.Element;

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    const customTheme = useColorModeValue(customThemeLight, customThemeDark);
    const Reset = {
        transform: "translateY(-4px)",
        opacity: "1",
        color: "inherit",
        background: "inherit",
    };
    return (
        <ThemeProvider theme={customTheme}>
            <GlobalStyle />
            <>
                <Header theme={colorMode} />
                <Element name="home">
                    <Home theme={colorMode} />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="experiences">
                    <Experiences theme={colorMode} />
                </Element>
                <Element name="projects">
                    <Projects theme={colorMode} />
                </Element>
                <Links theme={colorMode} />
                <Footer />
            </>
            <Button
                _hover={Reset}
                _focus={{ border: "none" }}
                left={["0px", "0px", "40px"]}
                top={["20px", "20px", "40px"]}
                borderRadius={["0 15px 15px 0", "0 15px 15px 0", "50%"]}
                w={["30px", "30px", "50px"]}
                h={["30px", "30px", "50px"]}
                p={["0.30em", "0.30em", "0.55em"]}
                cursor="pointer"
                pos="fixed"
                size="sm"
                fontSize="2xl"
                border="none"
                boxSizing="border-box"
                color="primary.invert"
                bg="none"
                transition="all 0.3s ease-in-out"
                onClick={toggleColorMode}>
                <IoMoon />
            </Button>
        </ThemeProvider>
    );
}

export default App;
