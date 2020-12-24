import { Text } from "@chakra-ui/core";

const Highlight = (props) => (
    <Text as="mark" borderRadius="sm" px="1" backgroundColor="accent.200" color="primary.200">
        {props.children}
    </Text>
);

export default Highlight;
