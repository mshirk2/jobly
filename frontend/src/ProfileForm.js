import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProfileForm() {
    const [profileForm, updateProfileForm] = useState({});
    const history = useHistory();

    function handleChange(e) {
        e.persist();
        updateProfileForm(f => ({ ...f, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // updateUser(profileForm);
        history.push(`/companies`);
    }

    let {username, email, firstName, lastName, password} = profileForm;

    return (
        <section>
            <h2>Update Profile</h2>
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
                            value="Update"
                            readOnly
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ProfileForm;