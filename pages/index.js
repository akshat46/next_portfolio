import { ThemeProvider } from "@chakra-ui/core";
import customTheme from "../components/theme";
import Home from "../components/home";
import Experiences from "../components/experiences";
import About from "../components/about";
import Projects from "../components/projects";
import Links from "../components/links";
import Header from "../components/header";
import Footer from "../components/footer";
import Example from "../components/modules/toggle-theme";
import dynamic from "next/dynamic";
import React from "react";
import * as Scroll from "react-scroll";
import { MagicSpinner } from "react-spinners-kit";

let Element = Scroll.Element;

class Index extends React.Component {
    state = {
        loading: true,
    };

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    render() {
        const { loading } = this.state;

        // if (loading) { // if your component doesn't have to wait for an async action, remove this block
        //   return (
        //     <Box d="block" pos="absolute" left="50%" top="50%" transform="translate(-50%)">
        //       <MagicSpinner size={40} color="#A6375F" loading={loading} />
        //     </Box>
        //   );
        // }

        return (
            <ThemeProvider theme={customTheme}>
                <style jsx global>
                    {`
                        body,
                        html,
                        :root {
                            padding: 0;
                            margin: 0;
                            background: ${customTheme.colors.primary["300"]};
                            font-family: karla, sans-serif;
                            overflow-x: hidden;
                        }
                    `}
                </style>
                <Header />
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
            </ThemeProvider>
        );
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 100));
}

// background color
export default Index;
