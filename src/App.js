import React, { useEffect, useRef, ReactElement } from "react";
import ReactDOM from "react-dom";
import './App.css';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { PersonFill } from 'react-bootstrap-icons';
import JobCard from './components/jobCard';
import Sidebar from "./components/sidebar";
import {JobContext} from "./context/jobContext";
import JobDetail from "./components/jobDetail";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


function App() {
  return (
    <div className="App" style={{width:'100%', height:'100%'}}>

      <header className="App-header">
        <Container fluid className="p-0" style={{ width: "100%" }}>
          <Row >
          <Col className="p-0" md={3} >
            <Container fluid className="vh-100" style={{backgroundColor: 'white', paddingLeft: 0, paddingRight: 0 }}>
              <Row>
                <Card style={{paddingBottom:5}}>
                  <Row>
                    <Col className="p-0" md={7}><Button className="rounded-pill btn-outline-secondary" style={{fontSize: 13, color: '#000', backgroundColor: 'white'}}>New Job Post</Button></Col>
                    <Col className="p-0"><PersonFill color="black"></PersonFill></Col>
                  </Row>
                  <Row style={{paddingTop: 10}}>
                    <Col md = {7} style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>Positions</Col>
                  </Row>
                  <Row style={{paddingTop: 10}}>
                    <Col md = {7} >
                    <Dropdown size="sm">
                      <Dropdown.Toggle className="btn-sm" variant="outline-secondary" id="dropdown-basic">
                        Sort By
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Location</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Time</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                  </Row>
                </Card>
              </Row>
              <Row>
                <Card style={{color: "#000", textAlign: 'left'}}>
                  <Card.Body>
                    <Row className="align-items-center">
                    <Col>
                    <Card.Title>Volunteer Soccer Coach</Card.Title>
                    <Card.Text style={{fontSize: 15}}>Scarborough, ON</Card.Text>
                    <Card.Text style={{fontSize: 15}}>Scarborough Eastsiders Soccer</Card.Text>
                    <Card.Text style={{fontSize: 15}}>Monday, May 30, 2022</Card.Text>
                    <Card.Text style={{fontSize: 15}}>6:00 PM - 8:00 PM</Card.Text>
                    </Col>
                    <Col >
                      <Card.Text style={{color: 'green', fontSize: 15, textAlign: 'right'}}>4 Positions Available</Card.Text>
                    </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Row>
              <JobCard name="Volunteer English Teacher" city="Toronto, ON" org="York West Active Living Centre" date="Thursday, June 2, 2022" time="9:30 AM - 10:30 AM" numPos="1"/>
            </Container>
          </Col >
          <Col className="p-0">
            <Container fluid className="vh-100" style={{backgroundColor: 'blue', paddingLeft: 0, paddingRight: 0 }}>
              <MapContainer center={[43.6609, -79.3959]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[43.6609, -79.3959]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
              </MapContainer>
            </Container>
          </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
