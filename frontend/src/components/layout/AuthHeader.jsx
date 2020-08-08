import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AuthHeader() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Databases 353</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/forgot">Forgot Password</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AuthHeader;
