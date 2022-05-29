import React, {useEffect, useRef, ReactElement} from "react";
import ReactDOM from "react-dom";
import {MapContainer, Marker, Popup, TileLayer,} from "react-leaflet";
import './App.css';
import Sidebar from "./components/sidebar";
import {JobContext} from "./context/jobContext";
import JobDetail from "./components/jobDetail";
import moment from "moment";

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
                {
                    Object.keys(context.jobs).map((vx, i) => {
                        const v = context.jobs[i];
                        let lat = v.lat
                        let lng = v.long;
                        return (
                            <Marker position={[lat, lng]} key={i}>
                                <Popup>
                                    {v.title}
                                </Popup>
                            </Marker>
                        );

                    })
                }
            </MapContainer>
        </div>
    );
}

export default App;
