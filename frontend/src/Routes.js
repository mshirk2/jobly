import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import JobDetail from './JobDetail';

function Routes({signup, login}) {
    return (
        <div className='Routes'>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <LoginForm />
                </Route>
                <Route exact path="/signup">
                    <SignupForm signup={signup}/>
                </Route>
                <Route exact path="/profile">
                    <ProfileForm />
                </Route>
                <Route exact path="/companies">
                    <CompanyList />
                </Route>
                <Route exact path="/companies/:handle">
                    <CompanyDetail />
                </Route>
                <Route exact path="/jobs">
                    <JobList />
                </Route>
                <Route exact path="/jobs/:id">
                    <JobDetail />
                </Route>
                <Route>
                    <div className='404'>
                        Page not found
                    </div>
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;