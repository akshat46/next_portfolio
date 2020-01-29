import { Button, Box, Text } from "@chakra-ui/core";
import Fade from 'react-reveal/Fade';
import { FiBook } from "react-icons/fi";

const Reset = {
    bg: "none",
    top: "-4px",
    opacity: "1",
    // color: "#7CA6A2"
}

 function Resume(){
        return (
        <Fade bottom delay="2400" duration="800">
            <Button as="a" target="_blank" variant="outline" href="/Akshat_Sharma_Resume.pdf" //TODO: resume url
                border="none"
                top="0"
                textDecoration="none"
                boxSizing="border-box"
                bg="accent.300"
                color="primary.300"
                boxShadow="4px -6px 6px rgba(166,55,95,0.20), -10px 4px 20px rgba(166,109,130,0.40)"
                p={["2", "6"]}
                mt="6"
                borderRadius="40px"
                cursor="pointer"
                transition="all 0.3s ease-in-out"
                _hover={Reset}>
                <FiBook /> Resume
            </Button>
        </Fade>
        )
}

export default Resume;