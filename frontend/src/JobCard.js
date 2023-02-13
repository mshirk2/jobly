import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function JobCard({id, title, salary, equity, companyName}) {
    const {appliedJobs, applyToJob} = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(function updateApplicationStatus(){
        setApplied(appliedJobs(id))
    }, [id, appliedJobs]);

    async function handleApply(){
        if (appliedJobs(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    return (
        <div className="JobCard card">
            {applied}
            <Link to={`/jobs/${id}`}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-subtitle">{companyName}</p>
                    {salary && <div>Salary: ${salary}</div>}
                    {equity > 0 && <div>Equity: {equity}</div>}

                </div>
            </Link>
            <button 
                className="btn" 
                onClick={handleApply}
                disabled={applied}
            >
                {applied ? "Applied" : "Apply"}
            </button>
        </div>
    );
}

export default JobCard;