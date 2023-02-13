import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function JobCard({id, title, salary, equity, companyName, companyHandle, logoUrl=null}) {
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
            <div className="card-body">
                <Link to={`/jobs/${id}`}>
                    {logoUrl && <img src={logoUrl} alt={companyName}/>}
                    <h5 className="card-title">{title}</h5>
                </Link>
                <Link to={`/companies/${companyHandle}`}>
                    <p className="card-subtitle">{companyName}</p>
                </Link>
                {salary && <div>Salary: ${salary}</div>}
                {equity > 0 && <div>Equity: {equity}</div>}
            </div>
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