import { ThemeProvider, Text, Heading, Box, Image } from "@chakra-ui/core";
import customTheme from '../components/theme';
import About from '../components/about';
import Experiences from '../components/experiences';
import Skills from '../components/skills';

const Index = () => (
  <ThemeProvider theme={customTheme}>
    <style jsx global>{`
          body,html,:root { 
              padding: 0;
              margin: 0;
              background: #01222B; 
              overflow-x: hidden;
          }
      `}
    </style>
    <About/>
    <Experiences/>
    <Skills />
  </ThemeProvider>
);

// background color

export default Index;
