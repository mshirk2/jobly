import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import './NavBar.css'
import UserContext from './UserContext';

function NavBar({logout}) {
    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return(
            <>
                <NavItem>
                    <NavLink to="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/jobs">Jobs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/" onClick={logout}>Logout, {currentUser.username}</NavLink>
                </NavItem>
            </>
        );
    }

    function loggedOutNav() {
        return(
            <>
                <NavItem>
                    <NavLink to='/login'>Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </NavItem>
            </>
        );
    }

    return (
        <Navbar expand="md" color='light'>
            <NavLink exact to="/" className="navbar-brand">
                Jobly
            </NavLink>
            <Nav className='ml-auto' navbar>
                {currentUser ? loggedInNav() : loggedOutNav()}
            </Nav>
        </Navbar>
    )
}

export default NavBar;