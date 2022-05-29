import React, {useEffect, useRef, ReactElement} from "react";
import ReactDOM from "react-dom";
import './App.css';
import {Container, Row, Col, Card, Button, Dropdown, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {PersonFill} from 'react-bootstrap-icons';
import JobCard from './components/jobCard';
import Sidebar from "./components/sidebar2";
import {JobContext} from "./context/jobContext";
import JobDetail from "./components/jobDetail";
import NewJobForm from "./components/newJobForm";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


function App() {
    const [show, setShow] = React.useState({
        open: false,
        page: 'new', // new or detail
    });

    const context = React.useContext(JobContext);
    const handleClose = () => setShow({...show, open: false});
    const handleSave = () => {
        setShow({...show, open: false});
        context.setJobs([...context.jobs, {
            "title": "Volunteer Coordinator",
            "date": "2022-07-04T09:00:00.000Z",
            "org": "Toronto Cares Initiative",
            "lat": 43.660387660625744,
            "long": -79.36847796621,
            "desc": "",
            "hours": 7,
            "numberOfPositions": 10,
            "phone": "+14169343411",
            "address": "1155 Yonge St, Toronto, ON M4T 1W2",
            "email": "volunteering@torontocares.ca"
        }])
    }
    const handleShowNew = () => setShow({open: true, page: 'new'});
    const handleShowDetail = (jobId) => setShow({open: true, page: 'detail', jobId: jobId });

    return (
        <>
            <Modal show={show.open} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>{show.page === 'new' ? "New Opportunity" : "Job" }</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {
                      show.page === 'new' ? <NewJobForm/> : <JobDetail jobId={show.jobId}/>
                  }
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    {show.page === 'new' ? "Cancel" : "Close" }
                </Button>
                  {show.page === 'new' ?
                      <Button variant="primary" onClick={handleSave}>
                          Save Changes
                      </Button> : null }
              </Modal.Footer>
            </Modal>
            <div className="App" style={{width: '100%', height: '100%'}}>
                <header className="App-header">
                    <Container fluid className="p-0" style={{width: "100%"}}>
                        <Row>
                            <Col className="p-0" md={3}>
                                <Container fluid className="vh-100" style={{backgroundColor: 'white'}}>
                                    <Row>
                                        <Card style={{paddingBottom: 5}}>
                                            <Row>
                                                <Col className="p-0" md={7}><Button
                                                    className="rounded-pill btn-outline-secondary"
                                                    style={{fontSize: 13, color: '#000', backgroundColor: 'white'}}
                                                    onClick={handleShowNew}>New
                                                    Job Post</Button></Col>
                                                <Col className="p-0"><PersonFill color="black"></PersonFill></Col>
                                            </Row>
                                            <Row style={{paddingTop: 10}}>
                                                <Col md={7} style={{
                                                    fontSize: 20,
                                                    color: '#000',
                                                    fontWeight: 'bold'
                                                }}>Positions</Col>
                                            </Row>
                                            <Row style={{paddingTop: 10}}>
                                                <Col md={7}>
                                                    <Dropdown size="sm">
                                                        <Dropdown.Toggle className="btn-sm" variant="outline-secondary"
                                                                         id="dropdown-basic">
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
                                    <Sidebar/>
                                </Container>
                            </Col>
                            <Col className="p-0">
                                <Container fluid className="vh-100"
                                           style={{backgroundColor: 'blue', paddingLeft: 0, paddingRight: 0}}>
                                    <MapContainer center={[43.6609, -79.3959]} zoom={13} scrollWheelZoom={true}>
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        {
                                            Object.keys(context.jobs).map((v, i) => {
                                                const job = context.jobs[i];
                                                const lat = job.lat;
                                                const lng = job.long;
                                                return (
                                                    <Marker key={i} position={[lat, lng]} eventHandlers={{
                                                        click: (e) => handleShowDetail(job.id)
                                                    }}>
                                                        <Popup>
                                                            {job.title}
                                                        </Popup>
                                                    </Marker>
                                                );
                                            })
                                        }
                                    </MapContainer>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </header>
            </div>
        </>
    );
}

export default App;
