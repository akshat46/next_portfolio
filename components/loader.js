import { Box } from "@chakra-ui/core";
import { motion } from "framer-motion";
import customThemeLight from "./theme";
import customThemeDark from "./theme-dark";
const MotionBox = motion.custom(Box);

const container = {
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const LoaderBlock = (options) => {
    return (
        <MotionBox
            display="inline-block"
            mx="4"
            boxShadow={options.shadow}
            borderRadius="50%"
            boxSize={["25px", "40px", "40px"]}
            boxSizing="border-box"
            bg="primary.300"
            variants={options.variants}
        />
    );
};

const Loader = (props) => {
    const customTheme = props.theme === "light" ? customThemeLight : customThemeDark;
    const item = {
        hidden: { boxShadow: "none" },
        show: {
            opacity: 1,
            boxShadow: customTheme.shadows.center,
            y: -5,
            backgroundColor: customTheme.colors.primary["300"],
            transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 },
        },
    };
    return (
        <MotionBox
            variants={container}
            initial="hidden"
            animate="show"
            display="block"
            pos="absolute"
            maxH="50px"
            top="50%"
            left="50%"
            transform="translate(-50%)">
            <LoaderBlock variants={item} shadow={customTheme.shadows.center} />
            <LoaderBlock variants={item} shadow={customTheme.shadows.center} />
            <LoaderBlock variants={item} shadow={customTheme.shadows.center} />
            <LoaderBlock variants={item} shadow={customTheme.shadows.center} />
        </MotionBox>
    );
};

export default Loader;
