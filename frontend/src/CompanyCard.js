import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({handle, name, description, logoUrl}) {
    return (
        <div className="CompanyCard card">
            <Link to={`/companies/${handle}`}>
                <div className="card-body">
                    {logoUrl && <img src={logoUrl} alt={name}/>}
                    <h5 className="card-title mt-2">{name}</h5>
                    <p><small>{description}</small></p>
                </div>
            </Link>
        </div>
    );
}

export default CompanyCard;