import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({handle, name, description, logoUrl}) {
    return (
        <Link className="CompanyCard" to={`/companies/${handle}`}>
            <div>
                <h5>{name}</h5>
                <img src={logoUrl} alt={name}/>
                <p><small>{description}</small></p>
            </div>
        </Link>
    );
}

export default CompanyCard;