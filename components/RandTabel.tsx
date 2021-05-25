import { Tr, Td } from "@chakra-ui/react";
import Link from "next/link"

const RandTabel = (props) => {
  return (
    <Tr>
      <Td><Link href="/cafe/[id]" as={`/cafe/${props.id}`}>{props.name}</Link></Td>
      <Td>{props.sector}</Td>
      <Td>{props.praj}</Td>
      <Td>{props.caf}</Td>
    </Tr>
  );
};

export default RandTabel;
