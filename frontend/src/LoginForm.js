import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from 'reactstrap';

function LoginForm({login}) {
    const [formData, setFormData] = useState({username: "", password: "",});
    const [formErrors, setFormErrors] = useState([]);
    const history = useHistory();

    function handleChange(e) {
        e.persist();
        setFormData(f => ({ ...f, [e.target.name]: e.target.value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let result = await login(formData)
        if (result.success){
            history.push(`/companies`);
        } else {
            setFormErrors(result.errors);
        }
    }

    let {username, password} = formData;

    return (
        <div className="LoginForm">
            <div className="container col-md-6">
                {formErrors.length ? 
                    <Alert color="danger">{formErrors}</Alert> 
                    : null }
                <h2 className="m-4">Log In</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                id="username"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={username}
                                autoComplete="username"
                                required
                            />
                        </div>
                        <div className="form-group  row">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                className="form-control"
                                onChange={handleChange}
                                autoComplete="current-password"
                                value={password}
                            />
                        </div>
                        <div>
                            <input
                                type="Submit"
                                value="Log In"
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

export default LoginForm;