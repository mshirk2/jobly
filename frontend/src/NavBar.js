import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <Navbar expand="md" color='light'>
                <NavLink exact to="/" className="navbar-brand">
                    Jobly
                </NavLink>
                
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink to="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/jobs">Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/profile">Profile</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;