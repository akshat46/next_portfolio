import { ThemeProvider, Button } from "@chakra-ui/core";
import customTheme from "../theme";
import * as Scroll from 'react-scroll';
var Link = Scroll.Link;
import Fade from 'react-reveal/Fade';

const HeaderLink = props => (
    <ThemeProvider theme={customTheme}>
        
        <Link activeClass="active" to={props.target}
            spy={false} smooth={true} offset={props.offset}
            duration={1500} delay={100} >
        <Fade top cascade delay={props.delay} duration="600">
        <Button variant="outline" 
            size="sm"
            fontSize="2xl"
            border="none"
            w="50px"
            h="50px"
            p="2"
            boxSizing="border-box"
            mb="6"
            borderRadius="50px"
            bg="primary.300"
            top="0"
            transition="all 0.3s ease-in-out"
            cursor="pointer"
            border="none"
            borderColor="none"
            outline="none"
            opacity="0"
            _focus={{ border: "none !important", outline: "none" }}
            _active={{ border: "none !important", outline: "none" }}
            _selected={{ border: "none !important", outline: "none" }}
            _hover={{background: "none", top: "-4px"}}>
            {props.icon}
                </Button></Fade>
            </Link>
    </ThemeProvider>
);

export default HeaderLink;