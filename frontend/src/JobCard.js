import React from "react";
import { Link } from "react-router-dom";

function JobCard({id, title, salary, equity, companyName}) {
    return (
        <Link className="JobCard" to={`/jobs/${id}`}>
            <div>
                <h5>{title}</h5>
                <p>{companyName}</p>
                <p>Salary: ${salary}</p>
                <p>Equity: {equity}</p>
            </div>
        </Link>
    );
}

export default JobCard;