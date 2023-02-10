import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({handle, name, description, logoUrl}) {
    return (
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
            <div className="card-body">
                {logoUrl && <img src={logoUrl} alt={name}/>}
                <h5 className="card-title">{name}</h5>
                <p><small>{description}</small></p>
            </div>
        </Link>
    );
}

export default CompanyCard;