import { ChakraProvider, Text, useColorModeValue, ColorModeScript } from "@chakra-ui/core";
import customThemeLight from "../components/theme";
import customThemeDark from "../components/theme-dark";
import Home from "../components/home";
import Experiences from "../components/experiences";
import About from "../components/about";
import Projects from "../components/projects";
import Links from "../components/links";
import Header from "../components/header";
import Footer from "../components/footer";
import Example from "../components/modules/toggle-theme";
// import React from "react";
import * as Scroll from "react-scroll";

let Element = Scroll.Element;

function Index(props) {
    const customTheme = useColorModeValue(customThemeLight, customThemeLight);
    const temp = useColorModeValue("red.400", "green.400");
    return (
        <ChakraProvider theme={customThemeLight}>
            <ColorModeScript initialColorMode="light" />
            {/* <Text color={temp}>TESTING</Text> */}
            <Header />
            {/* <ColorModeScript initialColorMode="light" /> */}
            <Element name="home">
                {/* <Example /> */}
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
        </ChakraProvider>
    );
}

export default Index;

// class Index extends React.Component {
//     state = {
//         loading: true,
//     };

//     componentDidMount() {
//         // this simulates an async action, after which the component will render the content
//         demoAsyncCall().then(() => this.setState({ loading: false }));
//     }

//     render() {
//         const { loading } = this.state;

//         // if (loading) { // if your component doesn't have to wait for an async action, remove this block
//         //   return (
//         //     <Box d="block" pos="absolute" left="50%" top="50%" transform="translate(-50%)">
//         //       <MagicSpinner size={40} color="#A6375F" loading={loading} />
//         //     </Box>
//         //   );
//         // }

//         return (
//         );
//     }
// }
function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 100));
}
