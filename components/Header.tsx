import { Center, Flex, Heading, Box } from "@chakra-ui/layout";

function NavBar() {
    return (
        <Flex
        as="nav"
        w="100%"
        mb={0}
        p={8}
        paddingBottom={2}
        bg="white"
        color="#262626"
        >
            <Center>
                <Heading>{`{`+'coffeeBeans'+`}`}</Heading>
            </Center>
        </Flex>
    );
}

export default NavBar;