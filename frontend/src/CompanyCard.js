import React from "react";
import { Link } from "react-router-dom";
import placeholderLogo from './placeholderLogo.png';
import './CompanyCard.css'

function CompanyCard({handle, name, description, logoUrl}) {
    if(!logoUrl) logoUrl = placeholderLogo;

    return (
        <div className="CompanyCard card">
            <div className="card-body">
                <Link to={`/companies/${handle}`} className="link">
                    {logoUrl && <img src={logoUrl} alt={name} className="logo"/>}
                    <h5 className="card-title mt-2">{name}</h5>
                </Link>
                <p><small>{description}</small></p>
            </div>
        </div>
    );
}

export default CompanyCard;