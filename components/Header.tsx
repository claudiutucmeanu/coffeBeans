import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import Styles from "../styles/Header.module.css";
import Link from "next/link"

const NavBar = () => {
  return (
    <>
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
        <Heading><Link href="/">{`{` + "coffeeBeans" + `}`}</Link></Heading>
      </Center>
    </Flex>
    <Box className={Styles.line} />
    </>
  );
};

export default NavBar;
