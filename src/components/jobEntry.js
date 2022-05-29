import React, { useEffect, useRef, ReactElement } from "react";
import ReactDOM from "react-dom";
import {ListGroup,Button,Modal} from "react-bootstrap";
import JobDetail from "./jobDetail";

const ModalStyle = {
    "position": "absolute",
    "top" : "50%",
    "left": "50%",
    "transform": "translate(-50%,-50%)",
    "zIndex": 999999999999999,
    "background": "white",
    "padding": "2em"
};

function JobEntry({ title, address, posted, needed, time, hours, phone, email, desc }) {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ListGroup.Item action onClick={handleShow}>
                <p><b>{title}</b></p>
                <p>{address}</p>
                <p><b>Date Needed: </b>{needed}</p>
                <p><b>Time Needed: </b>{time}</p>
            </ListGroup.Item>
            <Modal show={show} onHide={handleClose} style={ModalStyle}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{"padding": "2em"}}>
                    <p>{address}</p>
                    <p><b>Date Posted: </b>{posted}</p>
                    <p><b>Date Needed: </b>{needed}</p>
                    <p><b>Time Needed: </b>{time}</p>
                    <p><b>Phone Number: </b>{phone ? phone : "N/A"}</p>
                    <p><b>Email: </b>{email}</p>
                    <p>{desc}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default JobEntry;
