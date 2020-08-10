import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom';

function EmployerHeader() {
    const history = useHistory();

    const navigateToChangePassword = () => {
        history.push('/change');
    }

    const navigateToDashboard = () => {
        history.push('/employerDashboard');
    }

    const fetchUser = () => {
        history.push('/profile');
    }

    const navigateToPaymentsMethods = () => {
        history.push('/payments');
    }

    const navigateToPostJobs = () => {
        history.push('/postjobs');
    }

    const navigateToMaintainJobs = () => {
        history.push('/maintain');
    }

    const navigateToSummary = () => {
        history.push('/summary');
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={navigateToDashboard}>Databases 353</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={navigateToDashboard}>Dashboard</Nav.Link>
                    <Nav.Link onClick={navigateToPostJobs}>Post Jobs</Nav.Link>
                    <Nav.Link onClick={navigateToMaintainJobs}>Maintain Jobs</Nav.Link>
                    <Nav.Link onClick={navigateToSummary}>Summary</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <DropdownButton id="dropdown-menu-align-right" title="Settings"
                className="justify-content-end" alignRight>
                <Dropdown.Item href="/">Logout</Dropdown.Item>
                <Dropdown.Item onClick={navigateToChangePassword}>Change Password</Dropdown.Item>
                <Dropdown.Item onClick={fetchUser}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={navigateToPaymentsMethods}>Payment Options</Dropdown.Item>
            </DropdownButton>
        </Navbar>
    );
}

export default EmployerHeader;
