import React, {useEffect, useRef, ReactElement} from "react";
import ReactDOM from "react-dom";
import {MapContainer, Marker, Popup, TileLayer,} from "react-leaflet";
import './App.css';
import Sidebar from "./components/sidebar";
import {JobContext} from "./context/jobContext";
import JobDetail from "./components/jobDetail";

function App() {
    const center = {lat: 43.6529, lng: -79.3849};
    const zoom = 4;
    const context = React.useContext(JobContext);
    console.log(context)
    return (
        <div>
            <Sidebar></Sidebar>
            <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default App;
