import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Jobly</h1>
            <Link to="/login" className="btn">Log In</Link>
            <Link to="/signup" className="btn">Sign Up</Link>
        </div>
    )
}

export default Home;