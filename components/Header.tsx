import { Center, Flex, Heading } from "@chakra-ui/layout";

const NavBar = () => {
    return (
        <Flex
        as="nav"
        w="100%"
        mb={0}
        p={8}
        paddingBottom={4}
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