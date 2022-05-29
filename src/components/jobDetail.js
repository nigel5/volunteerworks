import React, { useEffect, useRef, ReactElement } from "react";
import ReactDOM from "react-dom";

function JobDetail({ title, address, posted, needed, time, hours, phone, email, desc}) {
    return (
        <div>
            <p><b>{title}</b></p>
            <p>{address}</p>
            <p><b>Date Posted: </b>{posted}</p>
            <p><b>Date Needed: </b>{needed}</p>
            <p><b>Time Needed: </b>{time}</p>
            <p><b>Phone Number: </b>{phone ? phone : "N/A"}</p>
            <p><b>Email: </b>{email}</p>
            <p>{desc}</p>
        </div>
    );
}

export default JobDetail;
