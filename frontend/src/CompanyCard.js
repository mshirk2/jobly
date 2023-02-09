import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({handle, name, description, logoUrl}) {
    return (
        <Link className="CompanyCard" to={`/companies/${handle}`}>
            <div>
                <img src={logoUrl} alt={name}/>
                <h5>{name}</h5>
                <p><small>{description}</small></p>
            </div>
        </Link>
    );
}

export default CompanyCard;