import { Center } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";

import Styles from "../styles/MapMarker.module.css";

const MapMarker = () => {
  const [cafe, setCafe] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);

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
          lat: responesData[key].lat,
          lon: responesData[key].lon,
          adress: responesData[key].adress,
        });
      }

      setCafe(loadedCafe);
    };
    fetchCafe();
  }, []);

  const cafePin = cafe.map((cafes) => (
    <>
      <Marker key={cafes.id} latitude={cafes.lat} longitude={cafes.lon}>
        <button
          className={Styles.pinbutton}
          onClick={(e) => {
            e.preventDefault();
            setSelectedCafe(cafes);
          }}
        >
          <img src="/bean.svg" />
        </button>
      </Marker>
      {selectedCafe ? (
        <Popup
          latitude={selectedCafe.lat}
          longitude={selectedCafe.lon}
          onClose={() => {
            setSelectedCafe(null);
          }}
        >
          <Center>{selectedCafe.name}</Center>
          <p>{selectedCafe.adress}</p>
        </Popup>
      ) : null}
    </>
  ));

  return (
    <>
    {cafePin}
    </>
    );
};

export default MapMarker;
