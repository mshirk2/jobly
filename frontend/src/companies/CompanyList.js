import React, { useEffect, useState } from "react";
import JoblyApi from '../api';
import SearchForm from "../SearchForm";
import CompanyCard from "./CompanyCard";
import {Spinner} from 'reactstrap';

function CompanyList() {
    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesOnMount(){
        getCompanies();
    }, []);

    async function getCompanies(name){
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <Spinner />

    return (
        <div className="CompanyList">
            <h2 className="display-4">Explore Companies</h2>
            <SearchForm searchFor={getCompanies}/>
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