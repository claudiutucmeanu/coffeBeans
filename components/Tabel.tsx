import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, TableCaption } from "@chakra-ui/react";
import RandTabel from "./RandTabel";
import Styles from "../styles/Tabel.module.css";

const Tabel = () => {
  const [order, setOrder] = useState(false);
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
  const orderHandler = (whatToSort) => {
    // console.log(whatToSort);
    if (order == false) {
      let newCafe = cafe
        .sort((a, b) => (a[whatToSort] > b[whatToSort] ? 1 : -1))
        .slice();
      setCafe(newCafe);
      setOrder(true);
    } else {
      let newCafe = cafe
        .sort((a, b) => (a[whatToSort] < b[whatToSort] ? 1 : -1))
        .slice();
      setCafe(newCafe);
      setOrder(false);
    }
  };

  const cafeRand = cafe.map((cafes) => (
    <RandTabel
      key={cafes.id}
      id={cafes.id}
      name={cafes.name}
      sector={cafes.sector}
      praj={cafes.praj}
      caf={cafes.caf}
    />
  ));

  return (
    <Table variant="simple" maxW="container.xl" colorScheme="black">
      <Thead>
        <Tr>
          <Th
            className={Styles.hand}
            onClick={() => {
              orderHandler("name");
            }}
          >
            Nume Cafenea
          </Th>
          <Th
            className={Styles.hand}
            onClick={() => {
              orderHandler("sector");
            }}
          >
            Sector
          </Th>
          <Th
            className={Styles.hand}
            onClick={() => {
              orderHandler("praj");
            }}
          >
            Prajitorie Proprie
          </Th>
          <Th
            className={Styles.hand}
            onClick={() => {
              orderHandler("caf");
            }}
          >
            Cafenea
          </Th>
        </Tr>
      </Thead>
      <Tbody>{cafeRand}</Tbody>
    </Table>
  );
};

export default Tabel;
