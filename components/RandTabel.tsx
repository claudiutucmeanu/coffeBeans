import { useEffect, useState } from "react";
import { Tr, Td } from "@chakra-ui/react";

const RandTabel = () => {
  const [cafe, setCafe] = useState([]);

  useEffect(() => {
    const fetchCafe = async () => {
      const response = await fetch(
        "https://coffeebeans-bebab-default-rtdb.firebaseio.com/shops.json"
      );
      const responesData = await response.json();
      const loadedCafe = [];

      for (const key in responesData) {
        loadedCafe.push({
          id: key,
          name: responesData[key].name,
          sector: responesData[key].sector,
          praj: responesData[key].praj,
          caf: responesData[key].caf,
        });
      }

      setCafe(loadedCafe);
    };
    fetchCafe();
  }, []);

  const cafeList = cafe.map((cafes) => (
    <Tr>
      <Td>{cafes.name}</Td>
      <Td>{cafes.sector}</Td>
      <Td>{cafes.praj}</Td>
      <Td>{cafes.caf}</Td>
    </Tr>
  ));
  console.log(cafeList);


  return cafeList;
};

export default RandTabel;
