import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import JoblyApi from './api';
import UserContext from "./UserContext";
import { Spinner } from "reactstrap";
import formatSalary from "./hooks/useFormatSalary";

function JobDetail(){
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const { hasApplied, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();
    console.log("applied=", applied);

    useEffect(function getJobAndAppliedStatusOnMount(){
        async function getJob(){
            let job = await JoblyApi.getJob(id);
            setJob(job);
        }
        getJob();
    }, [id]);

    useEffect(function updateAppliedStatus(){
        setApplied(hasApplied(id));
    }, [id, hasApplied]);

    async function handleApply(){
        if (hasApplied(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    if (!job) return <Spinner />

    return (
        <div className="JobDetail">
            {applied}
            <div>
                <h4>{job.title}</h4>
                <Link to={`/companies/${job.company.handle}`}>
                    {job.company.logoUrl && <img src={job.company.logoUrl} alt={job.company.name}/>}
                    <p>{job.company.name}</p>
                </Link>
                <p>{job.company.description}</p>
                {job.salary && <div>Salary: {formatSalary(job.salary)}</div>}
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