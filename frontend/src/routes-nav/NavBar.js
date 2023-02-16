import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import UserContext from '../auth/UserContext';
import './NavBar.css'

function NavBar({logout}) {
    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return(
            <>
                <NavItem>
                    <NavLink to="/companies" className="nav-link">Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/profile" className="nav-link">Profile</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/" onClick={logout} className="nav-link">Logout, {currentUser.firstName || currentUser.username}</NavLink>
                </NavItem>
            </>
        );
    }

    function loggedOutNav() {
        return(
            <>
                <NavItem>
                    <NavLink to='/login' className="nav-link">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/signup' className="nav-link">Sign Up</NavLink>
                </NavItem>
            </>
        );
    }

    return (
        <Navbar expand="md" className='Navbar mb-4'>
            <NavLink exact to="/" className="navbar-brand nav-link">
                Jobly
            </NavLink>
            <Nav className='ml-auto'>
                {currentUser ? loggedInNav() : loggedOutNav()}
            </Nav>
        </Navbar>
    )
}

export default NavBar;