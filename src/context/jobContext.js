import React from 'react';
import Config from "../config.json";

export const JobContext = React.createContext();

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = React.useState({});
    React.useEffect(() => {
        fetch(`/api/job`)
            .then(res => res.json())
            .then(res => {
                setJobs(res);
            });
    }, []);

    return (
        <JobContext.Provider
            value={{
                jobs,
                setJobs
            }}
            >
            {children}
        </JobContext.Provider>
    );
}