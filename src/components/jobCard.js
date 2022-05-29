import React, { useEffect, useRef, ReactElement } from "react";
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';



function JobCard({name, city, org, date, time, numPos, ...props}) {
    return (
        <Row>
                <Card style={{color: "#000", textAlign: 'left'}}>
                  <Card.Body>
                    <Row className="align-items-center">
                    <Col>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{fontSize: 15}}>{city}</Card.Text>
                    <Card.Text style={{fontSize: 15}}>{org}</Card.Text>
                    <Card.Text style={{fontSize: 15}}>{date}</Card.Text>
                    <Card.Text style={{fontSize: 15}}>{time}</Card.Text>
                    </Col>
                    <Col >
                      <Card.Text style={{color: 'green', fontSize: 15, textAlign: 'right'}}>{numPos} Positions Available</Card.Text>
                    </Col>
                    </Row>
                  </Card.Body>
                </Card>
        </Row>
    )
}

export default JobCard;