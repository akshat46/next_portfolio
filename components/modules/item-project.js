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

const ItemProject = (props) => {
    // const [open, setOpen] = React.useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            w={["95%", "420", "700", "900px"]}
            h="auto"
            minH="350px"
            bg="primary.300"
            m={["4", "8"]}
            mb={["6", "12"]}
            p={["4", "0"]}
            color="accent.text"
            flexDirection={["column", "column", "row"]}
            boxSizing="border-box"
            lineHeight="1.8"
            borderRadius="lg">
            <Box
                boxSizing="border-box"
                w={["100%", "100%", "50%"]}
                h="300px"
                backgroundImage={`url('${props.project.image}')`}
                onClick={props.project.image === "/private.svg" ? null : onOpen}
                cursor={props.project.image === "/private.svg" ? "not-allowed" : "pointer"}
                backgroundColor="primary.200"
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                borderRadius="lg"
                overflow="hidden"
                m="0"
            />
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent
                    p="0"
                    bg="transparent"
                    boxShadow="0"
                    maxW={props.project.portrait ? ["80%", "60%", "30%"] : "80%"}>
                    <ModalBody p="0" mb="0" bg="transparent">
                        <Image
                            width="100%"
                            objectFit="cover"
                            src={props.project.image}
                            boxShadow="0px 4px 34px rgba(0, 0, 0, 0.40)"
                            borderRadius="lg"
                            m="0"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* </Fade> */}
            <Box boxSizing="border-box" w={["100%", "100%", "50%"]} m="0">
                <Box
                    m="0"
                    color="accent.text"
                    textAlign="left"
                    borderRadius="lg"
                    bg={["none", "primary.300"]}
                    mt={["6", "6", "2"]}
                    ml={["0", "0", "6"]}>
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
                            </Text>
                            <Text opacity="0" color="accent.300" fontSize="sm">
                                {props.project.technologies}
                            </Text>
                            <Text opacity="0">{props.project.description}</Text>
                            {!props.project.private ? (
                                <Button
                                    target="_blank"
                                    as="a"
                                    pos="relative"
                                    variant="outline"
                                    float="right"
                                    border="none"
                                    p="0.55em"
                                    w="50px"
                                    h="50px"
                                    boxSizing="border-box"
                                    color="accent.300"
                                    bg="primary.300"
                                    float="right"
                                    borderRadius="50%"
                                    _focus={{ border: "none" }}
                                    _hover={{ background: "primary.300" }}
                                    href={props.project.github}>
                                    <IoLogoGithub />
                                </Button>
                            ) : (
                                <Popover isLazy>
                                    <PopoverTrigger>
                                        <Button
                                            cursor="pointer"
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
                                            _focus={{ border: "none" }}
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
                            <Button
                                target="_blank"
                                as="a"
                                pos="relative"
                                variant="outline"
                                float="right"
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
                        </div>
                    </Fade>
                </Box>
            </Box>
        </Flex>
    );
};

export default ItemProject;
