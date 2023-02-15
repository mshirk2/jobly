import React from "react";
import { Link } from "react-router-dom";
import formatSalary from "./hooks/useFormatSalary";

function JobCard({id, title, salary, equity, companyName, companyHandle, logoUrl=null}) {

    return (
        <div className="JobCard card">
            <div className="card-body">
                <Link to={`/jobs/${id}`}>
                    {logoUrl && <img src={logoUrl} alt={companyName}/>}
                    <h5 className="card-title">{title}</h5>
                </Link>
                <Link to={`/companies/${companyHandle}`}>
                    <p className="card-subtitle">{companyName}</p>
                </Link>
                {salary && <div>Salary: {formatSalary(salary)}</div>}
                {equity > 0 && <div>Equity: {equity}</div>}
            </div>
        </div>
    );
}

export default JobCard;