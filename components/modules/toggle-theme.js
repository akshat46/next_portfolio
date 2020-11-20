import { Button, ChakraProvider, useColorMode } from "@chakra-ui/core";

function Example() {
    const { colorMode, toggleColorMode } = useColorMode();
    return <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>;
}

export default Example;
