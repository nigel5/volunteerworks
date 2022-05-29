import React, { useEffect, useRef, ReactElement } from "react";
import ReactDOM from "react-dom";
import JobCard from "./jobCard";
import {JobContext} from "../context/jobContext";
import moment from "moment";

function Sidebar() {
    const context = React.useContext(JobContext);
    console.log(context)
    return (
        <div>
            {
                Object.keys(context.jobs).map((vx, i) => {
                    const v = context.jobs[i];
                    console.log(v[i])
                    let updatedOn = moment(v.updatedOn);
                    let neededOn = moment(v.date);
                    console.log(v.title)
                    return <JobCard   name={v.title}
                                      address={v.address}
                                      org={v.org}
                                      date={updatedOn.format("MMM Do YYYY")}
                                      time={`${neededOn.format("h:mm a")} - ${neededOn.add(v.hours, 'h').format("h:mm a")}`}
                                      numPos={v.numberOfPositions}/> /*FIXME not support minutes*/
                })
            }
        </div>
    );
}

export default Sidebar;
