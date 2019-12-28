import { ThemeProvider, Text, Heading, Box } from "@chakra-ui/core";

const heading = {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
};

const SectionHeading = props => (
    <ThemeProvider>
        <Heading 
            backgroundImage="url('/bg.jpg')"
            backgroundPosition="center"
            backgroundSize="cover"
            overflow="hidden"
            marginTop={["12", "24"]}
            backgroundRepeat="no-repeat"
            fontFamily="Playfair Display" 
            fontSize={["4xl", "6xl"]} 
            textAlign="center" 
            color="transparent"
            fontWeight="normal"
            style={heading}>
                {props.children}
        </Heading>
    </ThemeProvider>
);

export default SectionHeading;