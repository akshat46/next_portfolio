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

let Element = Scroll.Element;

function Example() {
    const { colorMode, toggleColorMode } = useColorMode();
    console.log("****", colorMode);
    const customTheme = useColorModeValue(customThemeLight, customThemeDark);
    return (
        <ThemeProvider theme={customTheme}>
            <GlobalStyle />
            <>
                <Header />
                <Element name="home">
                    <Home />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="experiences">
                    <Experiences />
                </Element>
                <Element name="projects">
                    <Projects />
                </Element>
                <Links />
                <Footer />
            </>
            {/* <Button colorScheme="teal" onClick={toggleColorMode}> */}
            {/*     Toggle {colorMode === "light" ? "Dark" : "Light"} */}
            {/* </Button> */}
        </ThemeProvider>
    );
}

export default Example;
