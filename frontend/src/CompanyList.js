import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from './api';
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function CompanyList() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
      async function request(){
        let companies = await JoblyApi.request('companies');
        setCompanies(companies);
      } request();
    }, [])

    return (
        <div>
            <h2>This is company list</h2>
            <ListGroup>
                {companies.map(company => (
                    <Link to={`/companies/${company.id}`} key={company.id}>
                        <ListGroupItem>{company.name}</ListGroupItem>
                    </Link>
                ))}
            </ListGroup>
            <CompanyCard/>
            <CompanyCard/>
            <CompanyCard/>
        </div>
    );
}

export default CompanyList;