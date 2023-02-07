import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';

function Routes() {

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    This is login
                </Route>
                <Route exact path="/signup">
                    This is signup
                </Route>
                <Route exact path="/profile">
                    This is profile
                </Route>
                <Route exact path="/companies">
                    <CompanyList />
                </Route>
                <Route exact path="/companies/:handle">
                    <CompanyDetail />
                </Route>
                <Route exact path="/jobs">
                    This is job list
                </Route>
                <Route>
                    <div className='404'>
                        Page not found
                    </div>
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;