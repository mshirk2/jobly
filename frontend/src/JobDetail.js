import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './api';
import UserContext from "./UserContext";
import { Spinner } from "reactstrap";

function JobDetail(){
    const [job, setJob] = useState(null);
    const {id} = useParams();
    const {appliedJobs, applyToJob} = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(function getJobOnMount(){
        getJob();
    }, [id]);

    async function getJob(){
        let job = await JoblyApi.getJob(id);
        setJob(job);
    }

    useEffect(function updateApplicationStatus(){
        setApplied(appliedJobs(id))
    }, [id, appliedJobs]);

    async function handleApply(){
        if (appliedJobs(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    if (!job) return <Spinner />

    return (
        <div className="JobDetail">
            {applied}
            <div>
                {job.company.logoUrl && <img src={job.company.logoUrl} alt={job.company.name}/>}
                <h4>{job.title}</h4>
                <p>{job.company.name}</p>
                <p>{job.company.description}</p>
                {job.salary && <div>Salary: ${job.salary}</div>}
                {job.equity > 0 && <div>Equity: {job.equity}</div>}
                <button 
                    className="btn" 
                    onClick={handleApply}
                    disabled={applied}
                >
                    {applied ? "Applied" : "Apply"}
                </button>
            </div>
        </div>
    );
}

export default JobDetail;