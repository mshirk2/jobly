import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
import UserContext from "./UserContext";

function ProfileForm() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
    });
    const history = useHistory();

    function handleChange(e) {
        e.persist();
        setFormData(f => ({ ...f, [e.target.name]: e.target.value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let updatedData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };
        let username = formData.username
        let updatedUser;

        try {
            updatedUser = await JoblyApi.updateProfile(username, updatedData);
        } catch (err){
            console.log(err);
        }
        
        setCurrentUser(updatedUser);
        setFormData(f => ({ ...f, password: ""}));
        history.push(`/companies`);
        
    }

    return (
        <div className="ProfileForm">
            <div className="container col-md-6">
                <h2 className="m-4">Update Profile</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="username">Username</label>
                            <p className="form-control-plaintext">{formData.username}
                            </p>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                name="firstName"
                                id="firstName"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.firstName}
                            />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                name="lastName"
                                id="lastName"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.lastName}
                            />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                id="password"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </div>
                        <div>
                            <input
                                type="Submit"
                                value="Update"
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

export default ProfileForm;