import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marcador from "../assets/img/marcador-de-posicion.png";

var myIcon = L.icon({
  iconUrl: marcador,
  iconSize: [30, 30],
  iconAnchor: [20, 20],
});

const Maps = () => {
  return (
    <div>
      <MapContainer
        center={[-31.419651782324127, -64.18824290399506]}
        zoom={15}
        scrollWheelZoom={false}
        className="mapa"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[-31.419651782324127, -64.18824290399506]}
          icon={myIcon}
        >
  
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
