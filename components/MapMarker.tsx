import { Marker } from "react-map-gl";

import Styles from "../styles/MapMarker.module.css"

const MapMarker = () => {
    return (
        <Marker key="1" latitude={44.4268} longitude={26.1025}>
            <button className={Styles.pinbutton}>
              <img src="/bean.svg"/>
            </button>
        </Marker>
    )
}

export default MapMarker;