import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './api';
import { Spinner } from "reactstrap";

function JobDetail(){
    const [job, setJob] = useState(null);
    const {id} = useParams();

    useEffect(function getJobOnMount(){
        getJob();
    }, [id]);

    async function getJob(){
        let job = await JoblyApi.getJob(id);
        setJob(job);
    }

    if (!job) return <Spinner />

    return (
        <div className="JobDetail">
            <div>
                {job.company.logoUrl && <img src={job.company.logoUrl} alt={job.company.name}/>}
                <h4>{job.title}</h4>
                <p>{job.company.name}</p>
                <p>{job.company.description}</p>
                {job.salary && <div>Salary: ${job.salary}</div>}
                {job.equity > 0 && <div>Equity: {job.equity}</div>}
            </div>
        </div>
    );
}

export default JobDetail;