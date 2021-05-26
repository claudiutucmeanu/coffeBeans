import Header from "../components/Header";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useRef, useCallback, useState } from "react";
import {
  FormLabel,
  Input,
  Textarea,
  Container,
  Select,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import Styles from "../styles/formular.module.css";
import Geocoder from "react-map-gl-geocoder";
import ReactMapGL from "react-map-gl";

export default function Home() {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiY2xhdWRpdXR1Y21lYW51IiwiYSI6ImNrb25iZTQ4OTAxcTczMHJzdmc4MDA5MHIifQ.K9dH5SFgNqUQ_kBV2NNTQQ";

  const mapRef = useRef();
  const nameRef = useRef("");
  const adressRef = useRef("");
  const infoRef = useRef("");
  const prajRef = useRef("");
  const cafRef = useRef("");
  const sectorRef = useRef("");

  const [viewport, setViewport] = useState({
    latitude: 44.4403,
    longitude: 26.1025,
    zoom: 11,
  });

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  const submitHandler = async (event) => {
    event.preventDefault();
    const cafenea = {
      name: nameRef.current.value,
      adress: adressRef.current.value,
      info: infoRef.current.value,
      praj: prajRef.current.value,
      caf: cafRef.current.value,
      sector: sectorRef.current.value,
      lat: viewport.latitude,
      lon: viewport.longitude,
    };

    // console.log(cafenea);

    const response = await fetch(
      "https://coffeebeans-bebab-default-rtdb.firebaseio.com/shops.json",
      {
        method: "POST",
        body: JSON.stringify(cafenea),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Header />
      <Container maxW="container.lg" className={Styles.casuta}>
        <form className={Styles.form} onSubmit={submitHandler}>
          <FormLabel marginTop="3px">Nume</FormLabel>
          <Input type="text" id="name" ref={nameRef} />
          <FormLabel marginTop="4px">Adresă</FormLabel>
          <Input type="text" id="adress" ref={adressRef} />
          <FormLabel marginTop="4px">Info</FormLabel>
          <Textarea type="text" id="info" ref={infoRef} />
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

          <div style={{ height: "60vh", marginTop: "20px" }}>
            <ReactMapGL
              ref={mapRef}
              {...viewport}
              width="100%"
              height="100%"
              onViewportChange={handleViewportChange}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              mapStyle="mapbox://styles/claudiutucmeanu/ckoorfmdv178p17qkt33mdrzm"
            >
              <div className={Styles.mapcoder}>
                <Geocoder
                  mapRef={mapRef}
                  onViewportChange={handleGeocoderViewportChange}
                  mapboxApiAccessToken={MAPBOX_TOKEN}
                  position="top-left"
                />
              </div>
            </ReactMapGL>
          </div>
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
