import { ThemeProvider } from "@chakra-ui/core";
import customTheme from '../components/theme';
import Home from '../components/home';
import Experiences from '../components/experiences';
import About from '../components/about';
import Projects from '../components/projects';
import Links from '../components/links';
import Header from "../components/header";
import React from 'react'
import * as Scroll from 'react-scroll';

let Element = Scroll.Element;

class Index extends React.Component{
  render(){
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

// background color
export default Index;
