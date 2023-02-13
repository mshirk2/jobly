import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './api';
import JobCard from "./JobCard";
import { Spinner } from "reactstrap";

function CompanyDetail() {
    const [company, setCompany] = useState(null);
    const {handle} = useParams();

    useEffect(function getCompanyOnMount(){
        getCompany();
    }, [handle]);

    async function getCompany(){
        let company = await JoblyApi.getCompany(handle);
        setCompany(company);
    }

    if (!company) return <Spinner />

    return (
        <div className="CompanyDetail">
            <img src={company.logoUrl} alt={company.name}/>
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            {company.jobs ? 
                (
                    <div className="JobList-list">
                        {company.jobs.map(j => (
                            <JobCard
                                key={j.id}
                                id={j.id}
                                title={j.title}
                                salary={j.salary}
                                equity={j.equity}
                                companyName={j.companyName}
                            />
                        ))}
                    </div>
                ) : (<p>No open positions</p>)
            }
        </div>
    );
}

export default CompanyDetail;