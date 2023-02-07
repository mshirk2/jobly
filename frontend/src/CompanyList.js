import React, { useEffect, useState } from "react";
import JoblyApi from './api';
import CompanyCard from "./CompanyCard";

function CompanyList() {
    const [companies, setCompanies] = useState([]);

    useEffect(function getCompaniesOnMount(){
        getCompanies();
    }, []);

    async function getCompanies(){
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
    }

    console.log("CompanyList companies = ", companies)

    return (
        <div className="CompanyList">
            <h2>Company List</h2>
            {companies.length ? 
                (
                    <div className="CompanyList-list">
                        {companies.map(c => (
                            <CompanyCard
                                key={c.handle}
                                handle={c.handle}
                                name={c.name}
                                description={c.description}
                                logoUrl={c.logoUrl}
                            />
                        ))}
                    </div>
                ) : (<p>Results Not Found</p>)
            }
        </div>
    );
}

export default CompanyList;