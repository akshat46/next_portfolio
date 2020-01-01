import { ThemeProvider, Text, Heading, Box, Image } from "@chakra-ui/core";
import customTheme from '../components/theme';
import Home from '../components/home';
import Experiences from '../components/experiences';
import About from '../components/about';
import Projects from '../components/projects';

const Index = () => (
  <ThemeProvider theme={customTheme}>
    <style jsx global>{`
          body,html,:root { 
              padding: 0;
              margin: 0;
              background: #F2F2F2; 
              overflow-x: hidden;
          }
      `}
    </style>
    <Home />
    <About />
    <Experiences/>
    <Projects />
  </ThemeProvider>
);

// background color

export default Index;
