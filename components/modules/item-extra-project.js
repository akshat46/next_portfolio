import {
    ThemeProvider,
    Text,
    Box,
    Button,
    Flex,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    ModalBody,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
} from "@chakra-ui/core";
import ExternalLink from "./external-link";
import customTheme from "../../components/theme";
import Fade from "react-reveal/Fade";
import { IoLogoGithub, IoLockClosed } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

const ItemProjectExtra = (props) => {
    // const [open, setOpen] = React.useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            m="0 auto"
            mb={["4", "6", "10"]}
            w="90%"
            maxW={["100%", "90%", "800px"]}
            color="accent.text"
            textAlign="left"
            bg="primary.300">
            <Fade bottom cascade>
                <div>
                    <Text
                        fontSize="xl"
                        m="0"
                        lineHeight="0.8"
                        color="accent.300"
                        fontFamily="Playfair Display"
                        opacity="0">
                        {props.project.title}
                        <Box pos="relative" float="right" zIndex="10">
                            <Button
                                target="_blank"
                                as="a"
                                pos="relative"
                                variant="outline"
                                border="none"
                                p="0.55em"
                                w="50px"
                                h="50px"
                                boxSizing="border-box"
                                visibility={props.project.other != null ? "visible" : "hidden"}
                                color="accent.300"
                                bg="primary.300"
                                float="right"
                                borderRadius="50%"
                                _hover={{ background: "primary.300" }}
                                href={props.project.other}>
                                <FiExternalLink />
                            </Button>
                            {!props.project.private ? (
                                <Button
                                    target="_blank"
                                    as="a"
                                    variant="outline"
                                    border="none"
                                    pos="relative"
                                    p="0.55em"
                                    w="50px"
                                    h="50px"
                                    boxSizing="border-box"
                                    color="accent.300"
                                    bg="primary.300"
                                    borderRadius="50%"
                                    _hover={{ background: "primary.300" }}
                                    href={props.project.github}>
                                    <IoLogoGithub />
                                </Button>
                            ) : (
                                <Popover isLazy>
                                    <PopoverTrigger>
                                        <Button
                                            as="a"
                                            pos="relative"
                                            variant="outline"
                                            float="right"
                                            size="sm"
                                            border="none"
                                            p="0.55em"
                                            w="50px"
                                            h="50px"
                                            boxSizing="border-box"
                                            color="accent.300"
                                            bg="primary.300"
                                            borderRadius="50%"
                                            _hover={{ background: "primary.300" }}>
                                            <IoLockClosed />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        border="0"
                                        boxShadow="0 4px 18px -9px rgba(0,0,0,0.3)"
                                        _focus={{ border: "0" }}>
                                        <PopoverBody>
                                            Private Repository. Developed as part of professional work.
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            )}
                        </Box>
                    </Text>
                    <Text opacity="0" color="accent.300" fontSize="sm">
                        {props.project.technologies}
                    </Text>
                    <Text opacity="0" m="0">
                        {props.project.description}
                    </Text>
                </div>
            </Fade>
        </Box>
    );
};

export default ItemProjectExtra;
