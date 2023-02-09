import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './api';

function CompanyDetail() {
    const [company, setCompany] = useState([]);
    const {handle} = useParams();

    useEffect(function getCompanyOnMount(){
        getCompany();
    }, [handle]);

    async function getCompany(){
        let company = await JoblyApi.getCompany(handle);
        setCompany(company);
    }

    return (
        <div className="CompanyDetail">
            <img src={company.logoUrl} alt={company.name}/>
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <p>Current jobs open..</p>
        </div>
    );
}

export default CompanyDetail;