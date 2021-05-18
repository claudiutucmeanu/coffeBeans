import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import RandTabel from "./RandTabel";

const Tabel = () => {
  return (
    <Table variant="simple" maxW="container.xl" colorScheme="black">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Nume Cafenea</Th>
          <Th>Sector</Th>
          <Th>Prajitorie Proprie</Th>
          <Th>Cafenea</Th>
        </Tr>
      </Thead>
      <Tbody>
        <RandTabel />
      </Tbody>
    </Table>
  );
};

export default Tabel;
