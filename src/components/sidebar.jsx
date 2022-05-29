import React, { useEffect, useRef, ReactElement } from "react";
import ReactDOM from "react-dom";
import JobDetail from "./jobDetail";
import {JobContext} from "../context/jobContext";
import moment from "moment";

function Sidebar() {
    const context = React.useContext(JobContext);
    return (
        <div>
            {
                Object.keys(context.jobs).map((vx, i) => {
                    const v = context.jobs[i];
                    console.log(v[i])
                    let updatedOn = moment(v.updatedOn);
                    let neededOn = moment(v.date);
                    return <JobDetail key={i}
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
        </div>
    );
}

export default Sidebar;
