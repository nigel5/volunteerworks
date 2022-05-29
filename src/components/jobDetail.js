import React from "react";
import {JobContext} from "../context/jobContext";
import moment from "moment";

function JobDetail({ jobId }) {
    const context = React.useContext(JobContext);
    const jobs = context.jobs;

    let job;
    for (const _job of jobs) {
        if (_job.id === jobId) {
            job = _job;
            break;
        }
    }

    let updatedOn = moment(job.updatedOn);
    let neededOn = moment(job.date);

    return (
        <div>
            <p><b>{job.title}</b></p>
            <p><b>Organization</b>{job.org}</p>
            <p><b>Address</b>{job.address}</p>
            <p><b>Date Posted: </b>{updatedOn.format("MMM Do YYYY")}</p>
            <p><b>Date Needed: </b>{neededOn.format("MMM Do YYYY")}</p>
            <p><b>Time Needed: </b>{`${neededOn.format("h:mm a")} - ${neededOn.add(job.hours, 'h').format("h:mm a")}`}</p>
            <p><b>Phone Number: </b>{job.phone}</p>
            <p><b>Email: </b>{job.email}</p>
            <p>{job.desc}</p>

        </div>
    );
}

export default JobDetail;
