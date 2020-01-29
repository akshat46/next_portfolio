import { ThemeProvider, Text, Heading, Box, Flex } from "@chakra-ui/core";
import SectionHeading from './modules/heading-section';
import Fade from 'react-reveal/Fade';
import customTheme from './theme';
import { DiJavascript1, DiSass, DiNodejsSmall, DiReact, DiFirebase, DiAws, DiGoogleCloudPlatform, DiGit, DiLinux } from 'react-icons/di';
import { AiFillCopyrightCircle } from 'react-icons/ai';
import { GiMoonOrbit } from 'react-icons/gi';

const languages = {
    title: "Languages",
    items: ["Java", "Python", "Ruby", "Bash", "Lua"]
}

const frameworks = {
    title: "frameworks",
    items: ["Python Django", "Ruby on Rails", "Native Android", ]
}

const databases = {
    title: "Databases",
    items: ["MySQL"]
}

const About = props => (
    <ThemeProvider theme={customTheme}>
        <SectionHeading>About me</SectionHeading>

        <Box w={["90%", "500px", "600px", "650px"]}
            boxSizing="border-box" p="md" m="0 auto"
            marginTop={["12","24"]}
            marginBottom={["32", "64"]}
            textAlign="center">
            <Fade bottom cascade><div>
                <Text color="accent.text" lineHeight="2" opacity="0">I recieved a Bachelors in software engineering from San Jose State University in 2015, 
                and I am currently pursuring masters in Software Engineering at SJSU(graduating May2020). I am passionate about software development, and 
                I am specially enjoying full stack web development as a Research Assistant in SJSU these days. </Text>
                <Text color="accent.text" marginTop={["6", "12"]} opacity="0">Few technologies I have been working with recently.</Text>
            </div></Fade>
            <Fade bottom cascade>
            <Flex w="100%" h={["200px", "100px"]}
            direction="column"
            alignContent="space-around"
            color="accent.300"
            marginTop={["2", "4"]}
            textAlign="left"
            fontFamily="Karla"
            flexWrap="wrap"
            pos="relative"
            opacity="0"
            ml="auto" mr="auto">
                <Box m={["1", "2"]}><AiFillCopyrightCircle /> C Language</Box>
                <Box m={["1", "2"]}><DiJavascript1 /> JavaScript</Box>
                <Box m={["1", "2"]}><DiSass /> SCSS</Box>
                <Box m={["1", "2"]}><DiNodejsSmall/> Node.js</Box>
                <Box m={["1", "2"]}><DiNodejsSmall /> Express.js</Box>
                <Box m={["1", "2"]}><DiReact/> React (Next.js)</Box>
                <Box m={["1", "2"]}><DiFirebase /> Firebase</Box>
                <Box m={["1", "2"]}><DiLinux/> Linux</Box>
                <Box m={["1", "2"]} w={["45%", "auto"]}><DiGoogleCloudPlatform /> Google Cloud Platform</Box>
                <Box m={["1", "2"]} w={["45%", "auto"]}><DiAws /> Amazon Web Services IoT</Box>
            </Flex></Fade>
        </Box>
        {/* <Box w={["80%", "500px", "600px", "650px"]}
            boxSizing="border-box" p="md" m="0 auto"
            marginBottom={["32", "64"]}
            textAlign="center">
            <Text color="accent.text">Other technologies I am familiar with.</Text>
            <Flex w="100%"
                direction="column"
                alignContent="space-around"
                color="accent.300"
                textAlign="left"
                flexWrap="wrap"
                h="100px">
                <SkillsList m={["2px", "10px"]} title={languages.title}></SkillsList>
            </Flex>
        </Box> */}
    </ThemeProvider>
);

export default About;