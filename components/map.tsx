import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Center } from "@chakra-ui/react";
import MapMarker from "./MapMarker";

import Styles from "../styles/map.module.css"


const Map = (props) => {
  const [viewport, setViewport] = useState({
    width: "60vw",
    height: "75vh",
    latitude: props.lat,
    longitude: props.lon,
    zoom: props.zoom,
  });

  return (
    <Center className={Styles.harta}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiY2xhdWRpdXR1Y21lYW51IiwiYSI6ImNrb25iZTQ4OTAxcTczMHJzdmc4MDA5MHIifQ.K9dH5SFgNqUQ_kBV2NNTQQ"
        mapStyle="mapbox://styles/claudiutucmeanu/ckoorfmdv178p17qkt33mdrzm"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <MapMarker />
      </ReactMapGL>
    </Center>
  );
}

export default Map;
