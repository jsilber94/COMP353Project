import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SignedInUser(props) {
    if (props.name === "") {
        return null;
    } else {
        return (<Navbar.Text>
            Signed in as: <a href="#login">{props.name}</a>
        </Navbar.Text>)
    }
}

function Header(props) {
    const [user, setUser] = useState("")

    return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Databases 353</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#admin">Admin</Nav.Link>
                <Nav.Link href="#user">User</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
            <SignedInUser name={props.user} />
        </Navbar.Collapse>
    </Navbar>
}

export default Header;