"use client";

import React from "react";
import L from "leaflet";
import MarkerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../node_modules/leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

type CustomMapProps = {
  position: [number, number];
  zoom: number;
  className?: string;
};

export default function CustomMap(props: CustomMapProps) {
  const { position, zoom, className } = props;
  return (
    <MapContainer center={position} zoom={13} className="h-[50vh] w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={
          new L.Icon({
            iconUrl: MarkerIcon.src,
            iconRetinaUrl: MarkerIcon.src,
            iconSize: [25, 41],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41],
            shadowUrl: MarkerShadow.src,
            shadowSize: [41, 41],
          })
        }
        position={[51.505, -0.09]}
      >
        <Popup>
          Robot #123123. <br /> Battery: 86%. 4G: OK
        </Popup>
      </Marker>
    </MapContainer>
  );
}
