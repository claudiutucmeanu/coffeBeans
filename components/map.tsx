import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Center } from "@chakra-ui/react"

function Map() {
  const [viewport, setViewport] = useState({
    width: '85vw',
    height: '75vh',
    latitude: 44.4268,
    longitude: 26.1025,
    zoom: 11
  });

  return (
    <Center>
    <ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1IjoiY2xhdWRpdXR1Y21lYW51IiwiYSI6ImNrb25iZTQ4OTAxcTczMHJzdmc4MDA5MHIifQ.K9dH5SFgNqUQ_kBV2NNTQQ">

    </ReactMapGL>
    </Center>
  );
}

export default Map;