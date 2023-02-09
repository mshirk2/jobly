import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {
    const [loginForm, setLoginForm] = useState({});
    const history = useHistory();

    function handleChange(e) {
        e.persist();
        setLoginForm(f => ({ ...f, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // loginUser(loginForm);
        history.push(`/companies`);
    }

    let {username, password} = loginForm;

    return (
        <section>
            <h2>Login</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            name="username"
                            id="username"
                            type="text"
                            onChange={handleChange}
                            value={username}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            onChange={handleChange}
                            value={password}
                        />
                    </div>
                    <div>
                        <input
                            type="Submit"
                            value="Login"
                            readOnly
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginForm;