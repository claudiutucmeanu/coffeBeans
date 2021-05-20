import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, TableCaption } from "@chakra-ui/react";
import RandTabel from "./RandTabel";
import { orderBy } from "lodash";

const Tabel = () => {
  const [columnToSort, setColumnToSort] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
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

  


  const cafeRand = cafe.map((cafes) => (
    <RandTabel
      key={cafes.id}
      name={cafes.name}
      sector={cafes.sector}
      praj={cafes.praj}
      caf={cafes.caf}
    />
  ));


    

    useEffect(() => {
      console.log("adsadas");
    }, [cafe])
  return (
    <Table variant="simple" maxW="container.xl" colorScheme="black">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th
            onClick={() => {
   
              const caffkeys = Object.keys(cafe)
              setCafe([]);
            }}
          >
            Nume Cafenea
          </Th>
          <Th>Sector</Th>
          <Th>Prajitorie Proprie</Th>
          <Th>Cafenea</Th>
        </Tr>
      </Thead>
      <Tbody>{cafeRand}</Tbody>
    </Table>
  );
};

export default Tabel;
