import React from "react";
import { Link } from "react-router-dom";

function JobCard({id, title, salary, equity, companyHandle}) {
    return (
        <Link className="JobCard" to={`/jobs/${id}`}>
            <div>
                <h5>{title}</h5>
                <p>{companyHandle}</p>
                <p>Salary: ${salary}</p>
                <p>Equity: {equity}</p>
            </div>
        </Link>
    );
}

export default JobCard;