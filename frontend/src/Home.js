import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import './Home.css'

function Home() {
    const { currentUser } = useContext(UserContext);

    return (
        <div className="Home">
            <div className="container text-center">
                <h1 className="display-1">JOBLY</h1>
                <p className="lead mb-5">Your dream job awaits</p>
                {currentUser 
                    ? <h4><em>Welcome back, {currentUser.firstName || currentUser.username}!</em></h4>
                    : (
                        <p>
                            <Link to="/login" className="btn btn-dark mr-3 px-4">Login</Link>
                            <Link to="/signup" className="btn btn-dark px-4">Signup</Link>
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Home;