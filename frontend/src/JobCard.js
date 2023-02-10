import React from "react";
import { Link } from "react-router-dom";

function JobCard({id, title, salary, equity, companyName}) {
    return (
        <Link className="JobCard card" to={`/jobs/${id}`}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-subtitle">{companyName}</p>
                {salary && <div>Salary: ${salary}</div>}
                {equity > 0 && <div>Equity: {equity}</div>}
            </div>
        </Link>
    );
}

export default JobCard;