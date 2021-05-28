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
  FormControl,
} from "@chakra-ui/react";
import Styles from "../styles/formular.module.css";
import Geocoder from "react-map-gl-geocoder";
import ReactMapGL from "react-map-gl";

export default function Home() {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiY2xhdWRpdXR1Y21lYW51IiwiYSI6ImNrb25iZTQ4OTAxcTczMHJzdmc4MDA5MHIifQ.K9dH5SFgNqUQ_kBV2NNTQQ";

    const mapRef = useRef();
    const nameRef = useRef('');

    const [enteredName, setEnteredName] = useState('');
    const [enteredAdress, setEnteredAdress] = useState('');
    const [enteredInfo, setEnteredInfo] = useState('');
    const [enteredPraj, setEnteredPraj] = useState('');
    const [enteredCaf, setEnteredCaf] = useState('');
    const [enteredSector, setEnteredSector] = useState('');

    // const [formIsValid, setFormIsValid] = useState(false);

    const nameInputChangeHandler = (event) => {
      setEnteredName(event.target.value);
    };
    const adressInputChangeHandler = (event) => {
      setEnteredAdress(event.target.value);
    };
    const infoInputChangeHandler = (event) => {
      setEnteredInfo(event.target.value);
    };
    const prajInputChangeHandler = (event) => {
      setEnteredPraj(event.target.value);
    };
    const cafInputChangeHandler = (event) => {
      setEnteredCaf(event.target.value);
    };
    const sectorInputChangeHandler = (event) => {
      setEnteredSector(event.target.value);
    };

    // const enteredNameIsValid = enteredName.trim() !== '';
    // const enteredAdressIsValid = enteredAdress.trim() !== '';
    // const enteredInfoIsValid = enteredInfo.trim() !== '';
    // const enteredPrajIsValid = enteredPraj.trim() !== '';
    // const enteredCafIsValid = enteredCaf.trim() !== '';
    // const enteredSectorIsValid = enteredSector.trim() !== '';
    

    let formIsValid=false;
    

    // if (enteredNameIsValid && enteredAdressIsValid && enteredInfoIsValid && enteredPrajIsValid && enteredCafIsValid && enteredSectorIsValid) {
    //   formIsValid=true;      
    // }

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


  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredAdressIsValid = enteredAdress.trim() !== '';
  const enteredInfoIsValid = enteredInfo.trim() !== '';
  const enteredPrajIsValid = enteredPraj.trim() !== '';
  const enteredCafIsValid = enteredCaf.trim() !== '';
  const enteredSectorIsValid = enteredSector.trim() !== '';
  const latitudeIsValid = viewport.latitude != 44.4403;
  const longitudeIsValid = viewport.longitude != 26.1025;

  if (enteredNameIsValid && enteredAdressIsValid && enteredInfoIsValid && enteredPrajIsValid && enteredCafIsValid && enteredSectorIsValid && latitudeIsValid && longitudeIsValid) {
    formIsValid=true;      
  }


  const submitHandler = async (event) => {
    event.preventDefault();
    const cafenea = {
      name: enteredName,
      adress: enteredAdress,
      info: enteredInfo,
      praj: enteredPraj,
      caf: enteredCaf,
      sector: enteredSector,
      lat: viewport.latitude,
      lon: viewport.longitude,
    };

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
    
     setEnteredName('');
     setEnteredAdress('');
     setEnteredInfo('');
     setEnteredPraj('');
     setEnteredCaf('');
     setEnteredSector('');
  };

  return (
    <>
      <Header />
      <Container maxW="container.lg" className={Styles.casuta}>
        <form className={Styles.form} onSubmit={submitHandler}>
          <FormControl isRequired>
            <FormLabel marginTop="3px">Nume</FormLabel>
            <Input type="text" id="name" onChange={nameInputChangeHandler} value={enteredName} />
          </FormControl>
          <FormControl isRequired>
          <FormLabel marginTop="4px">Adresă</FormLabel>
          <Input type="text" id="adress" onChange={adressInputChangeHandler} value={enteredAdress} />
          </FormControl>
          <FormControl isRequired>
          <FormLabel marginTop="4px">Info</FormLabel>
          <Textarea type="text" id="info" onChange={infoInputChangeHandler} value={enteredInfo} />
          </FormControl>
          <FormControl isRequired>
          <FormLabel marginTop="4px">
            Prajitorie proprie
          </FormLabel>
          <Select placeholder="Alege optiune" id="praj" onChange={prajInputChangeHandler} value={enteredPraj} >
            <option>Da</option>
            <option>Nu</option>
          </Select>
          </FormControl>
          <FormControl isRequired>
          <FormLabel marginTop="4px">
            Cafenea
          </FormLabel>
          <Select placeholder="Alege optiune" id="caf" onChange={cafInputChangeHandler} value={enteredCaf} >
            <option>Da</option>
            <option>Nu</option>
          </Select>
          </FormControl>
          <FormControl isRequired>
          <FormLabel marginTop="4px">Sector</FormLabel>
          <Select placeholder="Alege sectorul" id="sector" onChange={sectorInputChangeHandler} value={enteredSector} >
            <option>Sector 1</option>
            <option>Sector 2</option>
            <option>Sector 3</option>
            <option>Sector 4</option>
            <option>Sector 5</option>
            <option>Sector 6</option>
          </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel marginTop=" 10px">Locațita pe hartă</FormLabel>
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
          </FormControl>
          <Center>
            <Button
              marginTop={30}
              colorScheme="blackAlpha"
              variant="outline"
              type="submit"
              disabled={!formIsValid}
            >
              Submit
            </Button>
          </Center>
        </form>
      </Container>
    </>
  );
}
