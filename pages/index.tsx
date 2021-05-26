import Map from "../components/map";
import { Box, Center, Container, Wrap, Button } from "@chakra-ui/react";
import NavBar from "../components/Header";
import Styles from "../styles/Home.module.css";
import Tabel from "../components/Tabel";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Wrap padding={5}>
        <Center className={Styles.text}>
          <p className={Styles.par}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Center>
        <Box className={Styles.map}>
          <Map lat={44.4403} lon={26.1025} zoom={12} />
        </Box>
      </Wrap>
      <Box className={Styles.line} />
      <Container maxW="container.xl" marginTop="25px">
        <Tabel />
      </Container>
      <Center>
        <Link href="/formular">
          <Button margin={30} colorScheme="blackAlpha" variant="outline">
            ADAUGĂ CAFENEA
          </Button>
        </Link>
      </Center>
    </div>
  );
}
