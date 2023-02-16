import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from '../api';
import JobCard from "../jobs/JobCard";
import { Spinner } from "reactstrap";
import placeholderLogo from "../images/placeholderLogo.png"
import './CompanyDetail.css';


function CompanyDetail() {
    const {handle} = useParams();
    const [company, setCompany] = useState(null);

    useEffect(function getCompanyOnMount(){
        async function getCompany(){
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
        }
        getCompany();
    }, [handle]);

    if (!company) return <Spinner />
    if(!company.logoUrl) company.logoUrl = placeholderLogo;

    return (
        <div className="CompanyDetail">
            {company.logoUrl && <img src={company.logoUrl} alt={company.name}/>}
            <h4 className="display-4">{company.name}</h4>
            <p>{company.description}</p>
            {company.jobs ? 
                (
                    <div className="CompanyDetail-list">
                        {company.jobs.map(j => (
                            <JobCard
                                key={j.id}
                                id={j.id}
                                title={j.title}
                                salary={j.salary}
                                equity={j.equity}
                                companyName={j.companyName}
                                logoUrl={company.logoUrl}
                            />
                        ))}
                    </div>
                ) : (<p>No open positions</p>)
            }
        </div>
    );
}

export default CompanyDetail;