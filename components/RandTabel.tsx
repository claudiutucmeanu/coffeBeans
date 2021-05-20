import { Tr, Td } from "@chakra-ui/react";

const RandTabel = (props) => {
  return (
    <Tr>
      <Td>{props.name}</Td>
      <Td>{props.sector}</Td>
      <Td>{props.praj}</Td>
      <Td>{props.caf}</Td>
    </Tr>
  );
};

export default RandTabel;
