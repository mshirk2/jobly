import React from "react";
import CompanyCard from "./CompanyCard";

function CompanyList() {
    return (
        <div>
            <h2>This is company list</h2>
            <CompanyCard/>
            <CompanyCard/>
            <CompanyCard/>
        </div>
    );
}

export default CompanyList;