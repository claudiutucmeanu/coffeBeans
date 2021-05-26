import Header from "../components/Header";
import { useRef } from "react";
import {
  FormLabel,
  Input,
  Textarea,
  Container,
  Radio,
  RadioGroup,
  HStack,
  Select,
  Button,
  Center,
} from "@chakra-ui/react";
import Styles from "../styles/formular.module.css";

export default function Home() {
  const nameRef = useRef('');
  const adressRef = useRef('');
  const infoRef = useRef('');
  const prajRef = useRef('');
  const cafRef = useRef('');
  const sectorRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("aaa");
    const cafenea = {
      name: nameRef.current.value,
      adress: adressRef.current.value,
      info: infoRef.current.value,
      praj: prajRef.current.value,
      caf: cafRef.current.value,
      sector: sectorRef.current.value,
    };

    console.log(cafenea);
  }

  return (
    <>
      <Header />
      <Container maxW="container.lg" className={Styles.casuta}>
        <form className={Styles.form} onSubmit={submitHandler}>
          <FormLabel marginTop="3px">Nume</FormLabel>
          <Input type="text" id="name" ref={nameRef}/>
          <FormLabel marginTop="4px">Adresă</FormLabel>
          <Input type="text" id="adress" ref={adressRef}/>
          <FormLabel marginTop="4px">Info</FormLabel>
          <Textarea type="text" id="info" ref={infoRef}/>
          <FormLabel marginTop="4px" as="legend">
            Prajitorie proprie
          </FormLabel>
          <Select placeholder="Alege optiune" id="praj" ref={prajRef}>
            <option>Da</option>
            <option>Nu</option>
          </Select>
          <FormLabel marginTop="4px" as="legend">
            Cafenea
          </FormLabel>
          <Select placeholder="Alege optiune" id="caf" ref={cafRef}>
            <option>Da</option>
            <option>Nu</option>
          </Select>
          <FormLabel>Sector</FormLabel>
          <Select placeholder="Alege sectorul" id="sector" ref={sectorRef}>
            <option>Sector 1</option>
            <option>Sector 2</option>
            <option>Sector 3</option>
            <option>Sector 4</option>
            <option>Sector 5</option>
            <option>Sector 6</option>
          </Select>
          <Center>
            <Button
              marginTop={30}
              colorScheme="blackAlpha"
              variant="outline"
              type="submit"
            >
              Submit
            </Button>
          </Center>
        </form>
      </Container>
    </>
  );
}
