import React, { useEffect, useRef, ReactElement } from "react";
import ReactDOM from "react-dom";
import JobDetail from "./jobDetail";
import {JobContext} from "../context/jobContext";
import moment from "moment";
import {ListGroup} from "react-bootstrap";
import JobEntry from "./jobEntry";

function Sidebar() {
    const context = React.useContext(JobContext);
    return (
        <ListGroup>
            {
                Object.keys(context.jobs).map((vx, i) => {
                    const v = context.jobs[i];
                    let updatedOn = moment(v.updatedOn);
                    let neededOn = moment(v.date);
                    return <JobEntry key={i}
                                      title={v.title}
                                      address={v.address}
                                      posted={updatedOn.format("MMM Do YYYY")}
                                      time={`${neededOn.format("h:mm a")} - ${neededOn.add(v.hours, 'h').format("h:mm a")}`}
                                      needed={neededOn.format("MMM Do YYYY")}
                                      phone={v.phone}
                                      email={v.email}
                                      desc={v.desc}/> /*FIXME not support minutes*/

                })
            }
        </ListGroup>
    );
}

export default Sidebar;
