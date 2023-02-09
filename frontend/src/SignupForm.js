import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignupForm() {
    const [signupForm, updateSignupForm] = useState({});
    const history = useHistory();

    function handleChange(e) {
        e.persist();
        updateSignupForm(f => ({ ...f, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // addUser(signupForm);
        history.push(`/companies`);
    }

    let {username, email, firstName, lastName, password} = signupForm;

    return (
        <section>
            <h2>Signup</h2>
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
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            id="email"
                            type="text"
                            onChange={handleChange}
                            value={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input
                            name="first-name"
                            id="first-name"
                            type="text"
                            onChange={handleChange}
                            value={firstName}
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            name="last-name"
                            id="last-name"
                            type="text"
                            onChange={handleChange}
                            value={lastName}
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
                            value="Signup"
                            readOnly
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignupForm;