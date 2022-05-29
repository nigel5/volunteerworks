import React from "react";
import ReactDOM from "react-dom";
import {JobContext} from "../context/jobContext";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';

function NewJobForm() {
    const context = React.useContext(JobContext);
    const [date, onDateChange] = React.useState(new Date());

    return (
        <Form>
            <Container fluid>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formNumberOfPositions">
                            <Form.Label>Number of positions</Form.Label>
                            <Form.Control type="number"/>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Form.Group className="mb-3" controlId="formOrg">
                    <Form.Label>Organization / Company Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Container>
            <Container fluid>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Date needed</Form.Label>
                    <div>
                        <DateTimePicker onChange={onDateChange} value={date}/>
                    </div>
                </Form.Group>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label>Province</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option></option>
                                <option value="1">ON</option>
                                <option value="2">AB</option>
                                <option value="3">BC</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea"/>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default NewJobForm;
