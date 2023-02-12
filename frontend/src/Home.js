import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 className="m-4">Welcome to Jobly</h1>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/signup" className="btn">Sign Up</Link>
        </div>
    )
}

export default Home;