import { ThemeProvider, Button } from "@chakra-ui/core";
import customTheme from "../theme";
import * as Scroll from "react-scroll";
var Link = Scroll.Link;
import Fade from "react-reveal/Fade";

const HeaderLink = (props) => (
    <Link
        activeClass="active"
        to={props.target}
        spy={false}
        smooth={true}
        offset={props.offset}
        duration={1500}
        delay={100}>
        <Fade right cascade delay={props.delay} duration="600">
            <Button
                variant="outline"
                size="sm"
                fontSize="2xl"
                border="none"
                w={["30px", "30px", "50px"]}
                h={["30px", "30px", "50px"]}
                p={["0.30em", "0.30em", "0.55em"]}
                boxSizing="border-box"
                mb="2"
                borderRadius="50px"
                color="accent.300"
                bg="inherit"
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
                _hover={{ background: "none", top: "-4px" }}>
                {props.icon}
            </Button>
        </Fade>
    </Link>
);

export default HeaderLink;
