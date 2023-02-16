import React from "react";
import { Link } from "react-router-dom";
import formatSalary from "../hooks/useFormatSalary";
import placeholderLogo from "../images/placeholderLogo.png"
import "./JobCard.css"

function JobCard({id, title, salary, equity, companyName, companyHandle, logoUrl}) {
    if(!logoUrl) logoUrl = placeholderLogo;

    return (
        <div className="JobCard card">
            <div className="card-body">
                <Link to={`/jobs/${id}`} className="link">
                    {logoUrl && <img src={logoUrl} alt={companyName} className="logo"/>}
                    <h5 className="card-title">{title}</h5>
                </Link>
                <Link to={`/companies/${companyHandle}`} className="link">
                    <p className="card-subtitle">{companyName}</p>
                </Link>
                {salary && <div>Salary: {formatSalary(salary)}</div>}
                {equity > 0 && <div>Equity: {equity}</div>}
            </div>
        </div>
    );
}

export default JobCard;