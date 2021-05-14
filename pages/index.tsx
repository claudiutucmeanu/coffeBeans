import Map from "../components/map";
import { Box, Center } from "@chakra-ui/react";
import NavBar from "../components/Header";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Center>
        <Box width="90vw" height="80vh">
          <Map />
        </Box>
      </Center>
    </div>
  );
}
