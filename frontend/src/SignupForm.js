import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from 'reactstrap';

function SignupForm({signup}) {
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);
    const history = useHistory();

    function handleChange(e) {
        e.persist();
        setFormData(f => ({ ...f, [e.target.name]: e.target.value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let result = await signup(formData)
        if (result.success){
            history.push(`/companies`);
        } else {
            setFormErrors(result.errors)
        }
    }

    let {username, email, firstName, lastName, password} = formData;

    return (
        <div className="SignupForm">
            <div className="container col-md-6">
                {formErrors.length ? 
                    <Alert color="danger">{formErrors}</Alert> 
                    : null }
                <h2 className="m-4">Sign Up</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="username" className="">Username</label>
                            <input
                                name="username"
                                id="username"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={username}
                                required
                            />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control"
                                onChange={handleChange}
                                value={email}
                            />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                name="first-name"
                                id="first-name"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={firstName}
                            />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="last-name">Last Name</label>
                            <input
                                name="last-name"
                                id="last-name"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={lastName}
                            />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                className="form-control"
                                onChange={handleChange}
                                value={password}
                            />
                        </div>
                        <div>
                            <input
                                type="Submit"
                                value="Sign Up"
                                className="btn btn-primary"
                                readOnly
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;