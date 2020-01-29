import { ThemeProvider, Box } from "@chakra-ui/core";
import customTheme from '../components/theme';
import Home from '../components/home';
import Experiences from '../components/experiences';
import About from '../components/about';
import Projects from '../components/projects';
import Links from '../components/links';
import Header from "../components/header";
import React from 'react'
import * as Scroll from 'react-scroll';
import { MagicSpinner } from "react-spinners-kit";

let Element = Scroll.Element;

class Index extends React.Component{
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render(){
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
        <style jsx global>{`
          body,html,:root { 
              padding   : 0;
              margin    : 0;
              background: #F2F2F2;
              overflow-x: hidden;
          }
      `}
        </style>
        <Header />
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="experiences"><Experiences /></Element>
        <Element name="projects"><Projects /></Element>
        <Links/>
      </ThemeProvider>
    )
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 100));
}

// background color
export default Index;
